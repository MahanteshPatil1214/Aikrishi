import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

// Simple in-memory cache: { "text|lang": "translated text" }
const cache = new Map();

export default function TranslatorText({ text }) {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState(text);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // don't translate empty text
    if (!text || typeof text !== "string") {
      setTranslated(text ?? "");
      return;
    }

    // english -> no translation
    if (!language || language === "en") {
      setTranslated(text);
      return;
    }

    const cacheKey = `${text}||${language}`;
    if (cache.has(cacheKey)) {
      setTranslated(cache.get(cacheKey));
      return;
    }

    let cancelled = false;

    const fetchTranslation = async () => {
      try {
        // small optimization: short texts can be fetched quickly
        const res = await axios.get("https://api.mymemory.translated.net/get", {
          params: {
            q: text,
            langpair: `en|${language}`,
          },
          timeout: 7000, // 7s timeout
        });

        const translatedText = res?.data?.responseData?.translatedText;
        const finalText = translatedText || text;

        // cache result for session
        cache.set(cacheKey, finalText);

        if (!cancelled && mountedRef.current) {
          setTranslated(finalText);
        }
      } catch (err) {
        // on error, fallback to original text
        if (!cancelled && mountedRef.current) {
          setTranslated(text);
        }
        // log for debugging only
        // console.error("TranslatorText error:", err);
      }
    };

    fetchTranslation();

    return () => {
      cancelled = true;
    };

  }, [text, language]);

  // Styling: keep same style as before or adapt
  return <span className="font-medium text-green-800">{translated}</span>;
}

// import { useState, useEffect, useRef } from "react";

// export default function TranslatorText({ text, targetLang = "te" }) {
//   const [translated, setTranslated] = useState(text);
//   const cache = useRef({});
//   const timeout = useRef(null);

//   useEffect(() => {
//     if (!text || targetLang === "en") {
//       setTranslated(text);
//       return;
//     }

//     const cacheKey = `${text}-${targetLang}`;

//     // ✔ If already translated, don't hit the API again
//     if (cache.current[cacheKey]) {
//       setTranslated(cache.current[cacheKey]);
//       return;
//     }

//     // ✔ Debounce to avoid multiple calls
//     if (timeout.current) clearTimeout(timeout.current);

//     timeout.current = setTimeout(() => {
//       translateText();
//     }, 600);

//     async function translateText() {
//       try {
//         const res = await fetch(
//           `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//             text
//           )}&langpair=ka|${targetLang}&key=62148f613bb209e7e354`
//         );

//         const data = await res.json();

//         if (data?.responseData?.translatedText) {
//           const output = data.responseData.translatedText;
//           cache.current[cacheKey] = output; // ✔ Save result to cache
//           setTranslated(output);
//         }
//       } catch (err) {
//         console.error("Translation error:", err);
//         setTranslated(text); // fail-safe
//       }
//     }
//   }, [text, targetLang]);

//   return <span>{translated}</span>;
// }
