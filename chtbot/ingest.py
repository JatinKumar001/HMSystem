import os
from langchain_community.embeddings import SentenceTransformerEmbeddings
from langchain_community.document_loaders import UnstructuredFileLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Qdrant

# Embedding model
embeddings = SentenceTransformerEmbeddings(model_name="NeuML/pubmedbert-base-embeddings")
print("Embeddings Loaded: ", embeddings)

# DirectoryLoader to load PDF files
data_dir = os.path.join(os.getcwd(), 'data')
loader = DirectoryLoader(
    data_dir, 
    glob="*.pdf",  # Ensure proper glob pattern
    show_progress=True, 
    loader_cls=UnstructuredFileLoader
)

# Load documents
documents = loader.load()
print(f"Loaded {len(documents)} documents.")  # Debug: Check loaded documents

# Split the documents into smaller chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=700, chunk_overlap=70)
texts = text_splitter.split_documents(documents)
print(f"Total text chunks: {len(texts)}")  # Debug: Check text chunks

if texts:
    print("Sample text chunk:", texts[0])

    # Check if embeddings are generated
    embedded_texts = embeddings.embed_documents([text.page_content for text in texts])
    print(f"Generated {len(embedded_texts)} embeddings.")
else:
    print("No texts to embed!")

# Set up the URL for Qdrant and connect the vector store if embeddings are available
if texts and embedded_texts:
    url = "http://localhost:6333"
    qdrant = Qdrant.from_documents(
        texts,
        embeddings,
        url=url,
        prefer_grpc=False,
        collection_name="vector_db"
    )
    print("Vector DB Successfully Created!")
else:
    print("Vector DB creation skipped due to missing data!")