import React, { useState, useEffect } from 'react';
// Assuming you have installed: npm install @google/genai
import { GoogleGenAI } from '@google/genai'; 

// --- SECURE API KEY EXTRACTION ---
// ⚠️ IMPORTANT: Uncomment the line that matches your React setup (CRA or Vite)
// const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY; // For Create React App (CRA)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // For Vite

// Initialize the GoogleGenAI client with the key
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });


// --- STRUCTURED OUTPUT SCHEMA ---
const newsSchema = {
    type: "array",
    description: "An array of 3 to 5 highly relevant news articles for a farmer.",
    items: {
        type: "object",
        properties: {
            id: { type: "integer", description: "A unique integer ID for the news item." },
            title: { type: "string", description: "The concise, actionable, and personalized news headline." },
            summary: { type: "string", description: "A two-sentence summary focused on the farmer's location/crops (e.g., price impact, subsidy deadline)." },
            link: { type: "string", description: "A real or plausible hypothetical URL where the full article would be." }
        },
        required: ["id", "title", "summary", "link"]
    }
};

// --- DYNAMIC INPUT VARIABLES (FARMER PROFILE) ---
const farmerProfile = {
    location: "North Karnataka",
    crops: ["Sugarcane", "Cotton", "Maize"]
};

// --- REAL-TIME INPUT PAYLOAD (MOCK DATA) ---
const realTimeRawNews = [
    "Prime Minister to release 21st instalment of PM-KISAN on Nov 19. Over 11 crore farmer families benefit.",
    "Government prepares draft Seeds Bill 2025 to replace 1966 act; invites public comments till December 11.",
    "High-yield maize and other new crop varieties unveiled at Krishi Mela 2025 in Bengaluru, Karnataka.",
    "Department of Fertilizers conducted major crackdown on black marketing and hoarding to stabilize supply.",
    "Sugar prices rallied to 3-week highs amid tighter supplies from India; exports limited to 1.5 MMT.",
    "Latest price: Cotton in Karnataka is averaging ₹10470/Quintal, but with high local variation (Nov 13).",
    "PM Kusum Scheme 2025: Farmers get big subsidy for solar pumps, apply online to reduce irrigation costs.",
    "IMD advises North Interior Karnataka farmers to irrigate banana, sugarcane, and pomegranate due to no expected rainfall in the next five days (Nov 14-20).",
    "Maize futures price on NCDEX drops slightly to ₹1,878.00/quintal (Nov 14)."
];
// ---------------------------------------------------


const AiNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAI_News = async () => {
            // Check for API Key presence and validity
            if (!GEMINI_API_KEY || GEMINI_API_KEY.includes('YOUR_GEMINI_API_KEY_HERE')) {
                setError("🚨 API Key Error: Please set your GEMINI_API_KEY in the .env file and restart your server.");
                setLoading(false);
                return;
            }

            // --- FINAL SYSTEM PROMPT ---
            const prompt = `
You are a specialist agricultural news curator and personal advisory service for farmers. Your goal is to filter and summarize real-time news to provide maximum value and urgency to a specific user.

**FARMER PROFILE:**
- Location: ${farmerProfile.location}
- Primary Crops: ${farmerProfile.crops.join(', ')}

**TASK:**
1. **Analyze** the raw headlines provided below.
2. **Select** the 3 to 5 most urgent, relevant, and actionable news items for the farmer's profile (focus on North Karnataka, Sugarcane, Cotton, and Maize).
3. **Generate** new, clear, and action-oriented titles and summaries.
4. **Strictly** return the result as a single JSON array conforming exactly to the provided JSON schema.

**RAW, REAL-TIME HEADLINES TO ANALYZE (JSON format):**
${JSON.stringify(realTimeRawNews, null, 2)}
`;
            // -----------------------------

            try {
                setLoading(true);
                const response = await ai.models.generateContent({
                    model: "gemini-2.5-flash",
                    contents: prompt,
                    config: {
                        responseMimeType: "application/json",
                        responseSchema: newsSchema,
                    }
                });

                const fetchedNews = JSON.parse(response.text);
                setNews(fetchedNews);
            } catch (err) {
                console.error("Error fetching AI news:", err);
                setError(`Failed to process news. Gemini API Error: ${err.message}. Check your network connection.`);
            } finally {
                setLoading(false);
            }
        };

        fetchAI_News();
    }, []); 

    const handleNewsClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-gray-50 shadow-xl rounded-lg min-h-screen">
            <h2 className="text-3xl font-bold text-green-700 mb-6 border-b-2 border-green-200 pb-2">
                📰 Personalized Agri-News Dashboard
            </h2>

            {/* Profile Info Card */}
            <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 rounded-md text-sm text-gray-700">
                <p>
                    <span className="font-semibold text-green-800">Targeting News for:</span> 
                    Location: <strong className="text-green-900">{farmerProfile.location}</strong> | 
                    Main Crops: <strong className="text-green-900">{farmerProfile.crops.join(', ')}</strong>
                </p>
            </div>

            {/* Loading/Error States */}
            {loading && (
                <div className="text-center p-6 bg-blue-50 text-blue-700 rounded-md">
                    Loading personalized news... (Powered by Gemini AI)
                </div>
            )}
            {error && (
                <div className="text-center p-6 bg-red-100 text-red-700 font-medium border border-red-300 rounded-md">
                    {error}
                </div>
            )}

            {/* News List */}
            <div className="grid gap-6 md:grid-cols-2">
                {!loading && news.length === 0 && !error && (
                    <div className="text-center col-span-full p-6 text-gray-500 bg-white rounded-md shadow">
                        No urgent news found for your profile at this moment.
                    </div>
                )}

                {news.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-white p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-green-500"
                        onClick={() => handleNewsClick(item.link)}
                        role="button"
                        tabIndex="0"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                            {item.summary}
                        </p>
                        <span className="text-sm font-medium text-green-600 hover:text-green-700">
                            Click to read full article →
                        </span>
                    </div>
                ))}
            </div>

            {/* Disclaimer */}
            <div className="text-center mt-8 text-xs text-gray-400">
                <p>*News summaries and links are filtered and generated by Gemini AI for personalized relevance.</p>
            </div>
        </div>
    );
};

export default AiNews;