import sys
import os
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load all CSV files from a directory
def load_all_csv(directory_path):
    """Load and combine all CSV files from a given directory."""
    all_data = []
    for file_name in os.listdir(directory_path):
        if file_name.endswith('.csv'):
            file_path = os.path.join(directory_path, file_name)
            data = pd.read_csv(file_path)
            all_data.append(data)
    return pd.concat(all_data, ignore_index=True)

# Summarize text to fit within a maximum length
MAX_CONTEXT_LENGTH = 1000

def summarize_text(text, max_length=MAX_CONTEXT_LENGTH):
    """Truncate or summarize text to a specified maximum length."""
    if not isinstance(text, str):
        return "No answer available."
    return text if len(text) <= max_length else text[:max_length] + "..."

# Load the MedQuad dataset
def load_medquad_dataset(path):
    """Load the medquad dataset."""
    # print(f"Loading dataset from {path}...")
    data = pd.read_csv(path)
    # print(f"Dataset loaded with {len(data)} entries.")
    return data

# Create a TF-IDF matrix for dataset questions
def create_tfidf_matrix(data):
    """Generate a TF-IDF matrix for question similarity matching."""
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(data['question'])
    return vectorizer, tfidf_matrix

# Find the most similar question
def find_most_similar_question(query, vectorizer, tfidf_matrix, data):
    """Find the most similar question in the dataset using cosine similarity."""
    query_vector = vectorizer.transform([query])
    similarities = cosine_similarity(query_vector, tfidf_matrix).flatten()
    best_match_index = similarities.argmax()
    best_match_score = similarities[best_match_index]
    if best_match_score > 0.5:  # Threshold for similarity
        return data.iloc[best_match_index]
    return None

# Answer a user query
def answer_query(query, vectorizer, tfidf_matrix, data):
    """
    Respond to user queries:
    - Match dataset questions for relevant answers.
    - Provide general fallback responses for unrelated queries.
    """
    match = find_most_similar_question(query, vectorizer, tfidf_matrix, data)
    if match is not None:
        return f"{summarize_text(match['answer'])}"
    else:
        return f"General response: I don't have specific information about '{query}', but I recommend consulting reliable sources."

# Initialize and prepare the chatbot
def initialize_chatbot(dataset_path):
    """Prepare the chatbot by loading the dataset and building the TF-IDF matrix."""
    data = load_medquad_dataset(dataset_path)
    vectorizer, tfidf_matrix = create_tfidf_matrix(data)
    return data, vectorizer, tfidf_matrix

# Interactive chatbot loop
import ollama


def refine_with_ollama(chatbot_response, user_query, model="medllama2"):
    """
    Use the Ollama Python library to refine or expand the chatbot's initial response.
    """
    try:
        # Construct the conversational context
        messages = [
            {
                "role": "system",
                "content": "You are a helpful assistant that refines and improves chatbot responses."
            },
            {
                "role": "user",
                "content": f"""
                User Query: {user_query}
                Chatbot Response: {chatbot_response}
                Please refine the response to make it more informative and user-friendly.
                """
            }
        ]

        # Generate a refined response using Ollama
        response = ollama.chat(model=model, messages=messages)
        return response['message']['content'].strip()  # Return the refined response content
    except Exception as e:
        # print(f"Error with Ollama refinement: {e}")
        return chatbot_response  # Fallback to the original response if Ollama fails


def chatbot_loop_with_ollama(data, vectorizer, tfidf_matrix):
    """Interactive loop to handle user queries with Ollama refinement."""
    # print("Enhanced Chatbot with Ollama is ready! Ask a question (type 'exit' to quit).")
    
    query = str(sys.argv[1])
    if query.lower() == 'exit':
        print("Chatbot: Goodbye!")
    initial_response = answer_query(query, vectorizer, tfidf_matrix, data)
    refined_response = refine_with_ollama(initial_response, query)
    print(refined_response)


# Main execution with Ollama Python library integration
if __name__ == "__main__":
    dataset_path = "medquad.csv"  # Replace with your dataset path
    medquad_data, vectorizer, tfidf_matrix = initialize_chatbot(dataset_path)
    chatbot_loop_with_ollama(medquad_data, vectorizer, tfidf_matrix)