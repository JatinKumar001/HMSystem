import React, { useState } from 'react'

export default function Chatbot() {

    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!query.trim()) {
            alert("Please enter a query before submitting.");
            return;
        }

        setIsLoading(true);
        setResponse(""); // Clear previous response

        try {
            const res = await fetch("http://localhost:8080/api/chatbot", {
                method: "POST", // Assuming the backend accepts POST requests for chatbot queries
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }), // Send query in the request body
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }

            const data = await res.json();
            setResponse(data || "No response received."); // Assuming the backend sends the response in `message`
            setQuery("")
        } catch (error) {
            setResponse("An error occurred while communicating with the chatbot.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4 text-center">Chat with Chatbot</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <textarea
                            value={query}
                            onChange={handleQueryChange}
                            placeholder="Type your message here..."
                            rows="4"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send"}
                        </button>
                    </form>
                    <div className="mt-4">
                        <h2 className="text-lg font-medium">Response:</h2>
                        <p className="bg-gray-100 p-3 rounded-md mt-2">{response || "No response yet."}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
