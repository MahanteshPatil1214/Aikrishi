// import { useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "👋 Namaste! I'm Krishi Astra AI. How can I help you today?",
//     },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     try {
//       const res = await axios.post(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           model: "gpt-3.5-turbo",
//           messages: [
//             {
//               role: "system",
//               content:
//                 "You are Krishi Astra AI assistant helping Indian farmers.",
//             },
//             ...messages.map((m) => ({
//               role: m.sender === "user" ? "user" : "assistant",
//               content: m.text,
//             })),
//             { role: "user", content: input },
//           ],
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//           },
//         }
//       );

//       const botReply = res.data.choices[0].message.content;
//       setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           text: "⚠️ Sorry, I’m having trouble connecting right now.",
//         },
//       ]);
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       console.log(import.meta.env.VITE_OPENAI_API_KEY);
//       {/* Floating Button */}
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         💬
//       </motion.button>
//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-24 right-6 w-80 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-green-200 z-50"
//           >
//             <div className="bg-green-600 text-white p-3 font-semibold">
//               🌿 Krishi Astra Chat
//             </div>

//             <div className="flex-1 p-3 overflow-y-auto space-y-3 h-64">
//               {messages.map((msg, i) => (
//                 <div
//                   key={i}
//                   className={`p-2 rounded-xl text-sm max-w-[80%] ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-r from-green-500 to-green-700 text-white self-end ml-auto text-right shadow-md"
//                       : i === 0
//                       ? "bg-emerald-100 text-emerald-800 font-semibold shadow-sm"
//                       : "bg-gray-100 text-gray-800 shadow-sm"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>

//             {/* Input Section */}
//             <div className="p-3 flex gap-2 border-t bg-white/60 backdrop-blur-md">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your question..."
//                 className="flex-1 border border-green-300 rounded-full px-3 py-2 text-sm bg-green-50 focus:bg-black focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all duration-200 outline-none"
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-200"
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
//========================================================

// import { useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "👋 Namaste! I'm Krishi Astra AI. How can I help you today?",
//     },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     // 🕒 Add delay to prevent rate limit (429)
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     try {
//       const res = await axios.post(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           model: "gpt-3.5-turbo",
//           messages: [
//             {
//               role: "system",
//               content:
//                 "You are Krishi Astra AI assistant helping Indian farmers with information about crops, weather, markets, and modern techniques.",
//             },
//             ...messages.map((m) => ({
//               role: m.sender === "user" ? "user" : "assistant",
//               content: m.text,
//             })),
//             { role: "user", content: input },
//           ],
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//           },
//         }
//       );

//       const botReply = res.data.choices[0].message.content;
//       setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
//     } catch (err) {
//       console.error("ChatBot Error:", err);
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           text: "⚠️ Sorry, I’m having trouble connecting right now. Please try again in a few seconds.",
//         },
//       ]);
//     }
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         💬
//       </motion.button>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-24 right-6 w-80 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-green-200 z-50"
//           >
//             {/* Header */}
//             <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-3 font-semibold text-center">
//               🌿 Krishi Astra Chat
//             </div>

//             {/* Messages */}
//             <div className="flex-1 p-3 overflow-y-auto space-y-3 h-64 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
//               {messages.map((msg, i) => (
//                 <div
//                   key={i}
//                   className={`p-2 rounded-xl text-sm max-w-[80%] transition-all duration-200 ${
//                     msg.sender === "user"
//                       ? "bg-gradient-to-r from-green-500 to-green-700 text-white self-end ml-auto text-right shadow-md"
//                       : i === 0
//                       ? "bg-emerald-100 text-emerald-800 font-semibold shadow-sm"
//                       : "bg-gray-100 text-gray-800 shadow-sm"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>

//             {/* Input Section */}
//             <div className="p-3 flex gap-2 border-t bg-white/70 backdrop-blur-md">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your question..."
//                 className="flex-1 border border-green-300 rounded-full px-3 py-2 text-sm bg-green-50 focus:bg-black focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all duration-200 outline-none"
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-4 py-2 rounded-full text-sm hover:from-green-700 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all duration-200"
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
//=============================================================================================
// ... (imports and component setup above)
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import TranslatorText from './TranslatorText'; 
// 🚨 Ensure this path is correct for your Language Context
import { useLanguage } from "../context/LanguageContext"; 

// Gemini Setup (Primary Chat)
const API_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";
const GEMINI_MODEL = "gemini-2.5-flash"; 

// Framer Variants for Message Animation
const messageVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
};

// 💡 Typing Indicator Component
const TypingIndicator = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-100 text-gray-800 shadow-sm p-3 rounded-2xl text-base max-w-[50%] flex space-x-1 items-center"
  >
    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0, ease: "easeInOut" }} className="w-2 h-2 bg-green-500 rounded-full" />
    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2, ease: "easeInOut" }} className="w-2 h-2 bg-green-500 rounded-full" />
    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4, ease: "easeInOut" }} className="w-2 h-2 bg-green-500 rounded-full" />
  </motion.div>
);


export default function ChatBot() {
  const { language } = useLanguage(); 
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `👋 Namaste! I'm Krishi Astra AI. Main aapki kya madad kar sakta hoon? Aap mujhse pooch sakte hain 
Toh bataiye, aaj aapko kis vishay par jaankari chahiye?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); 
  const messagesEndRef = useRef(null); 
  const inputRef = useRef(null); 
  const [speaking, setSpeaking] = useState(false); 
  const [isListening, setIsListening] = useState(false); 

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // Helper to strip Markdown for TTS (Fixes TTS reading "*")
  const stripMarkdown = (text) => text.replace(/\*\*|__|#|\*/g, ''); 

  // --- TTS/Speech Fix: Select Voice based on context language ---
  const speakMessage = (text) => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setSpeaking(false);
      return; 
    }
    setSpeaking(true);
    
    // 1. Strip Markdown before speaking
    const speechText = stripMarkdown(text); 
    const utterance = new SpeechSynthesisUtterance(speechText);
    
    // 2. Select appropriate voice (e.g., 'kn' for Kannada)
    const targetLangCode = language === 'en' ? 'en-IN' : language || 'hi-IN';
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(voice => voice.lang.startsWith(targetLangCode));
    
    if (targetVoice) {
      utterance.voice = targetVoice;
      utterance.lang = targetVoice.lang;
    } else {
      utterance.lang = targetLangCode;
      utterance.rate = 0.9;
    }

    utterance.onend = () => {
      setSpeaking(false);
    };
    speechSynthesis.speak(utterance);
  };

  // --- Voice Input (STT) with Error Fixes ---
  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("⚠️ Voice input is not supported in your browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = false; 
    recognition.lang = 'hi-IN'; 
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript); 
      recognition.stop();
      setIsListening(false);
    };

    recognition.onspeechend = () => {
        if(isListening) {
             recognition.stop();
        }
    };
    
    recognition.onerror = (event) => {
      console.error('Speech Recognition Error:', event.error);
      setIsListening(false);
      const errorText = (event.error === 'no-speech' || event.error === 'network') 
                        ? 'Did not detect clear speech or network error. Please try again.' 
                        : `Voice input error: ${event.error}. Please try again.`;
      alert(errorText);
    };
    
    recognition.onend = () => {
      setIsListening(false);
      if (inputRef.current) inputRef.current.focus();
    };
  };
  // --------------------------

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]); 

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    
    setIsTyping(true); 

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Limit history sent to the API
    const historyLimit = 6; 
    const messagesToUse = messages.slice(-historyLimit);
    
    // 🚨 Gemini Fix: Updated System Prompt to prevent asterisks and request target language
    const systemInstruction = 
        `You are Krishi Astra AI assistant helping Indian farmers with information about crops, weather, markets, and modern techniques. 
        Your tone should be helpful, respectful, and use a mix of Hindi and English terms common in farming (Hinglish). 
        The user has selected a language preference (code: ${language}). Please provide the response primarily in that language (e.g., Kannada if 'kn'). 
        
        DO NOT USE ASTERISKS (*) OR DOUBLE UNDERSCORES (__) FOR FORMATTING. Use plain text only.`; // Explicitly avoid markdown symbols


    try {
      const res = await axios.post(
        API_ENDPOINT,
        {
          model: GEMINI_MODEL,
          messages: [
            {
              role: "system",
              content: systemInstruction,
            },
            ...messagesToUse.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: input },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
          },
        }
      );

      const botReplyText = res.data.choices[0].message.content;

      setIsTyping(false); 
      
      setMessages((prev) => [
          ...prev, 
          { 
              sender: "bot", 
              text: botReplyText, 
          }
      ]);

    } catch (err) {
      console.error("ChatBot Error:", err);
      setIsTyping(false); 
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Sorry, I’m having trouble connecting right now. Please try again in a few seconds.",
        },
      ]);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-xl z-50 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close Chatbot" : "Open Krishi Astra Chatbot"} 
      >
        💬
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-green-300 z-50" 
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-700 to-lime-700 text-white p-4 font-extrabold text-lg text-center shadow-lg">
              🌿 KrishiAi chat
            </div>

            {/* Messages Container (FIXED HEIGHT h-64, SCROLLABLE) */}
            <div 
              className="p-3 overflow-y-auto space-y-4 h-64 flex-none"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} `}
                  >
                    <div
                      className={`p-3 rounded-2xl text-base max-w-[80%] transition-all duration-200 whitespace-pre-wrap ${
                        msg.sender === "user"
                          ? "bg-green-600 text-white shadow-lg" // User message bubble
                          : i === 0 
                            ? "bg-lime-50 text-green-900 font-medium shadow-md border-l-4 border-lime-600" // Welcome message
                            : "bg-gray-100 text-gray-800 shadow-sm flex items-start space-x-2"
                      }`}
                    >
                      
                      {/* 🔊 TTS Icon - visible only on bot replies */}
                      {msg.sender === "bot" && (
                        <motion.button
                          onClick={() => speakMessage(msg.text)} 
                          className={`transition-colors pt-1 ${speaking ? 'text-red-500' : 'text-gray-600 hover:text-green-600'}`}
                          title={speaking ? "Stop Speaking" : "Listen to the message"}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 3.5a1.5 1.5 0 011.859 1.155l1.639 4.373a1.5 1.5 0 01.077.291V14a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1.586a1 1 0 00-.293-.707l-3.953-3.952A1.5 1.5 0 016.5 6h.001c.092 0 .185.016.273.047l4.004 1.335.546-1.458A1.5 1.5 0 0110 3.5z" />
                          </svg>
                        </motion.button>
                      )}
                      
                      {/* 🌐 TEXT DISPLAY: Uses TranslatorText (handles language switch) */}
                      <span className={msg.sender === "bot" ? "flex-1" : ""}>
                        <TranslatorText text={msg.text} />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Display Typing Indicator */}
              <AnimatePresence>
                {isTyping && <TypingIndicator key="typing-indicator" />}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div className="p-3 flex gap-2 border-t border-green-200 bg-white/90 backdrop-blur-md">
              
              {/* 🎤 Mic Button for Voice Input */}
              <motion.button
                onClick={handleVoiceInput}
                className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-600 text-white ring-4 ring-red-300' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                title={isListening ? "Listening..." : "Voice Input"}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 112 0v1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-6.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z" clipRule="evenodd" />
                </svg>
              </motion.button>

              {/* Text Input Field */}
              <input
                ref={inputRef} 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isListening ? "Speak now..." : "Type your question..."}
                className="flex-1 border border-green-400 rounded-full px-4 py-2 text-sm bg-white focus:border-green-600 focus:ring-2 focus:ring-green-300 transition-all duration-200 outline-none"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={isListening} 
              />
              <motion.button
                onClick={sendMessage}
                className="bg-lime-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-lime-700 shadow-xl transition-all duration-200"
                whileTap={{ scale: 0.95 }}
                disabled={isTyping || isListening} 
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}