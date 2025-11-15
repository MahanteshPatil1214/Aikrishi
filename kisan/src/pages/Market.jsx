// src/pages/Market.jsx (Connected to Flask Backend)
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import TranslatorText from "../components/TranslatorText"; // Assuming this component exists

// Define the base URL for the Flask backend
// Ensure your Flask server is running on this address!
const FLASK_API_BASE_URL = "http://127.0.0.1:5000/api";

export default function Market() {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [commodities, setCommodities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCommodity, setSelectedCommodity] = useState("");

  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState(null);
  const [error, setError] = useState("");

  // --- Initial State Fetch (New useEffect) ---
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await axios.get(`${FLASK_API_BASE_URL}/get_states`);
        setStates(res.data.states || []);
      } catch (err) {
        console.error("Error fetching initial states:", err);
        setError(
          "Failed to load initial states. Check Flask server connection."
        );
      }
    };
    fetchStates();
  }, []);

  // --- Handlers Connected to Flask API ---

  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
    setSelectedCommodity("");
    setDistricts([]);
    setCommodities([]);
    setPrices(null);
    setError("");

    if (!state) return;

    setLoading(true);
    try {
      const res = await axios.post(`${FLASK_API_BASE_URL}/get_districts`, {
        state,
      });
      setDistricts(res.data.districts || []);
    } catch (err) {
      console.error("Error fetching districts:", err);
      setError("Failed to load districts.");
    } finally {
      setLoading(false);
    }
  };

  const handleDistrictChange = async (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedCommodity("");
    setCommodities([]);
    setPrices(null);
    setError("");

    if (!district) return;

    setLoading(true);
    try {
      const res = await axios.post(`${FLASK_API_BASE_URL}/get_commodities`, {
        state: selectedState,
        district: district,
      });
      setCommodities(res.data.commodities || []);
    } catch (err) {
      console.error("Error fetching commodities:", err);
      setError("Failed to load commodities.");
    } finally {
      setLoading(false);
    }
  };

  const handleCommodityChange = (e) => setSelectedCommodity(e.target.value);

  const getPrices = async () => {
    if (!selectedState || !selectedDistrict || !selectedCommodity) return;

    setLoading(true);
    setError("");
    setPrices(null);

    try {
      // *** THIS IS THE LIVE API CALL ***
      const res = await axios.post(`${FLASK_API_BASE_URL}/get_prices`, {
        state: selectedState,
        district: selectedDistrict,
        commodity: selectedCommodity,
      });

      if (res.data.error) {
        setError(res.data.error);
        setPrices(null);
      } else {
        setPrices(res.data);
      }
    } catch (err) {
      console.error("Error fetching prices:", err);
      setError(
        "API Request failed. Ensure your Flask server is running and accessible."
      );
    } finally {
      setLoading(false);
    }
  };

  // --- Formatting and Trend Logic ---

  const formatPrice = (price) =>
    price ? `₹ ${price.toLocaleString("en-IN")}` : "--";

  const calculateTrend = (change) => {
    if (!change || change.status === "N/A" || change.amount === 0) return null;

    const percentage = Math.abs(change.percent).toFixed(2);

    if (change.status === "UP")
      return { text: `▲ ${percentage}%`, color: "text-green-600" };
    if (change.status === "DOWN")
      return { text: `▼ ${percentage}%`, color: "text-red-600" };
    return { text: "▬ No Change", color: "text-gray-600" };
  };

  // --- Render UI ---
  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Title and Subtitle */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-green-800 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🌾 <TranslatorText text="Real-Time Mandi Price Tracker" />
        </motion.h1>

        <p className="text-center text-green-700 text-lg mb-10">
          <TranslatorText text="Get current and historical market prices instantly." />
        </p>

        {/* Market Selection */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-green-100 mb-10">
          <h2 className="text-2xl font-bold text-green-700 border-b pb-3 mb-6 text-center">
            <TranslatorText text="Market Selection" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* State */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <TranslatorText text="Select State" />
              </label>
              <select
                value={selectedState}
                onChange={handleStateChange}
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-white"
              >
                {/* Fixed option nesting issue: TranslatorText wraps the whole option label */}
                <option value="">
                  -- <TranslatorText text="Select State" /> --
                </option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s} {/* Only plain text inside <option> */}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <TranslatorText text="Select District / Market" />
              </label>
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                disabled={!selectedState || loading}
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-white"
              >
                <option value="">
                  -- <TranslatorText text="Select District" /> --
                </option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Commodity */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <TranslatorText text="Select Commodity" />
              </label>
              <select
                value={selectedCommodity}
                onChange={handleCommodityChange}
                disabled={!selectedDistrict || loading}
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-white"
              >
                <option value="">
                  -- <TranslatorText text="Select Commodity" /> --
                </option>
                {commodities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={getPrices}
              disabled={!selectedCommodity || loading}
              className="px-10 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 disabled:opacity-50 transition-all"
            >
              <TranslatorText text="Get Mandi Prices" />
            </button>
          </div>
        </div>

        {/* Results Section */}
        {loading && (
          <div className="text-center mt-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-3 text-green-700">
              <TranslatorText text="Fetching latest prices..." />
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 text-center p-4 rounded-lg mt-10 max-w-4xl mx-auto">
            {error}
          </div>
        )}

        {prices && !loading && (
          <div className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-green-100 mt-10">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
              <TranslatorText
                text={`${prices.commodity} Price in ${prices.district}`}
              />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Current Price (Modal) */}
              <div className="border border-green-300 p-6 rounded-2xl bg-green-50">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  🟢 <TranslatorText text="Modal Price" /> (
                  {prices.current?.date || "N/A"})
                </h3>
                <p className="text-4xl font-extrabold text-green-600">
                  {formatPrice(prices.current?.modal)}
                </p>
                {prices.change && calculateTrend(prices.change) && (
                  <p
                    className={`text-lg font-bold mt-2 ${
                      calculateTrend(prices.change)?.color
                    }`}
                  >
                    {calculateTrend(prices.change).text}
                    <span className="text-sm text-gray-600 ml-2">
                      {" "}
                      vs previous day
                    </span>
                  </p>
                )}
                <p className="text-sm text-gray-600 mt-4">
                  <TranslatorText text="Min" />:{" "}
                  {formatPrice(prices.current?.min)} |{" "}
                  <TranslatorText text="Max" />:{" "}
                  {formatPrice(prices.current?.max)}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  <TranslatorText text="Unit" />:{" "}
                  {prices.current?.unit || "Quintal"}
                </p>
              </div>

              {/* District Price Range */}
              <div className="border border-blue-300 p-6 rounded-2xl bg-blue-50">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  📊 <TranslatorText text="District Price Range" />
                </h3>
                <p className="text-2xl font-extrabold text-blue-600">
                  {formatPrice(prices.range?.min_district)}
                  <span className="text-xl font-normal text-gray-600">
                    {" "}
                    to{" "}
                  </span>
                  {formatPrice(prices.range?.max_district)}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <TranslatorText text="Highest price recorded in" />{" "}
                  {prices.district}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  <TranslatorText text="Data collected across different markets and dates." />
                </p>
              </div>
            </div>

            {/* Competitive Markets */}
            {prices.competitive_markets &&
              prices.competitive_markets.length > 0 && (
                <div className="mt-10 pt-6 border-t border-green-100">
                  <h3 className="text-2xl font-bold text-green-700 mb-5 text-center">
                    💰 <TranslatorText text="Competitive Markets in" />{" "}
                    {prices.state}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {prices.competitive_markets.map((market, index) => (
                      <div
                        key={index}
                        className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-md text-center"
                      >
                        <p className="text-lg font-semibold text-yellow-800">
                          {formatPrice(market.modal)}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                          {market.market}
                        </p>
                        <p className="text-xs text-gray-500">
                          ({market.district})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        )}
      </div>
    </section>
  );
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import { useState, useEffect, createElement as h } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import {
//   SquareTerminal,
//   ChevronDown,
//   Loader2,
//   TrendingUp,
//   TrendingDown,
//   Scale,
// } from "lucide-react"; // Using Lucide icons for a cleaner look

// // Define the base URL for the Flask backend
// // NOTE: This URL is local (127.0.0.1) and will cause a Network Error if the Flask server isn't running
// // and accessible. We are adding mock data below to prevent the UI from breaking.
// const FLASK_API_BASE_URL = "http://127.0.0.1:5000/api";

// // Placeholder for TranslatorText to resolve the compilation error.
// const TranslatorText = ({ text }) => text;

// // --- MOCK DATA FOR DEMONSTRATION/DEBUGGING ---
// const MOCK_STATES = ["Maharashtra", "Gujarat", "Karnataka", "Punjab"];
// const MOCK_DISTRICTS = {
//   Maharashtra: ["Pune", "Mumbai", "Nagpur"],
//   Gujarat: ["Ahmedabad", "Surat", "Rajkot"],
//   Karnataka: ["Bengaluru", "Mysore", "Hubli"],
//   Punjab: ["Amritsar", "Ludhiana", "Patiala"],
// };
// const MOCK_COMMODITIES = ["Wheat", "Rice", "Onion", "Potato"];

// const MOCK_PRICES = {
//   current: {
//     modal: 2200,
//     min: 2000,
//     max: 2350,
//     date: "2025-10-27",
//     unit: "Quintal",
//   },
//   change: {
//     status: "UP",
//     amount: 10,
//     percent: 0.45,
//   },
//   range: {
//     min_district: 1950,
//     max_district: 2400,
//   },
//   competitive_markets: [
//     { market: "Latur", district: "Latur", modal: 2250 },
//     { market: "Nashik", district: "Nashik", modal: 2300 },
//     { market: "Aurangabad", district: "Aurangabad", modal: 2150 },
//   ],
//   commodity: "Wheat",
//   district: "Pune",
//   state: "Maharashtra",
// };
// // ------------------------------------------

// // Helper component for select inputs
// const SelectInput = ({
//   label,
//   value,
//   onChange,
//   disabled,
//   options,
//   placeholder,
// }) => (
//   <div className="relative">
//     <label className="block text-sm font-medium text-gray-700 mb-2">
//       <TranslatorText text={label} />
//     </label>
//     <select
//       value={value}
//       onChange={onChange}
//       disabled={disabled}
//       className={`
//         w-full p-3 pr-10 border border-gray-300 rounded-xl bg-white text-gray-800 appearance-none
//         focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition duration-150 ease-in-out
//         ${
//           disabled
//             ? "bg-gray-100 cursor-not-allowed"
//             : "hover:border-emerald-400"
//         }
//       `}
//     >
//       <option value="">
//         -- <TranslatorText text={placeholder} /> --
//       </option>
//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//     <ChevronDown className="absolute right-3 top-[50%] translate-y-[-10%] h-5 w-5 text-gray-400 pointer-events-none" />
//   </div>
// );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import { useState, useEffect, createElement as h } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import {
//   SquareTerminal,
//   ChevronDown,
//   Loader2,
//   TrendingUp,
//   TrendingDown,
//   Scale,
// } from "lucide-react"; // Using Lucide icons for a cleaner look

// // Define the base URL for the Flask backend
// // NOTE: This URL is local (127.0.0.1) and will cause a Network Error if the Flask server isn't running
// // and accessible. We are adding mock data below to prevent the UI from breaking.
// const FLASK_API_BASE_URL = "http://127.0.0.1:5000/api";

// // Placeholder for TranslatorText to resolve the compilation error.
// const TranslatorText = ({ text }) => text;

// // --- MOCK DATA FOR DEMONSTRATION/DEBUGGING ---
// const MOCK_STATES = ["Maharashtra", "Gujarat", "Karnataka", "Punjab"];
// const MOCK_DISTRICTS = {
//   Maharashtra: ["Pune", "Mumbai", "Nagpur"],
//   Gujarat: ["Ahmedabad", "Surat", "Rajkot"],
//   Karnataka: ["Bengaluru", "Mysore", "Hubli"],
//   Punjab: ["Amritsar", "Ludhiana", "Patiala"],
// };
// const MOCK_COMMODITIES = ["Wheat", "Rice", "Onion", "Potato"];

// const MOCK_PRICES = {
//   current: {
//     modal: 2200,
//     min: 2000,
//     max: 2350,
//     date: "2025-10-27",
//     unit: "Quintal",
//   },
//   change: {
//     status: "UP",
//     amount: 10,
//     percent: 0.45,
//   },
//   range: {
//     min_district: 1950,
//     max_district: 2400,
//   },
//   competitive_markets: [
//     { market: "Latur", district: "Latur", modal: 2250 },
//     { market: "Nashik", district: "Nashik", modal: 2300 },
//     { market: "Aurangabad", district: "Aurangabad", modal: 2150 },
//   ],
//   commodity: "Wheat",
//   district: "Pune",
//   state: "Maharashtra",
// };
// // ------------------------------------------

// // Helper component for select inputs
// const SelectInput = ({
//   label,
//   value,
//   onChange,
//   disabled,
//   options,
//   placeholder,
// }) => (
//   <div className="relative">
//     <label className="block text-sm font-medium text-gray-700 mb-2">
//       <TranslatorText text={label} />
//     </label>
//     <select
//       value={value}
//       onChange={onChange}
//       disabled={disabled}
//       className={`
//         w-full p-3 pr-10 border border-gray-300 rounded-xl bg-white text-gray-800 appearance-none
//         focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition duration-150 ease-in-out
//         ${
//           disabled
//             ? "bg-gray-100 cursor-not-allowed"
//             : "hover:border-emerald-400"
//         }
//       `}
//     >
//       <option value="">
//         -- <TranslatorText text={placeholder} /> --
//       </option>
//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//     <ChevronDown className="absolute right-3 top-[50%] translate-y-[-10%] h-5 w-5 text-gray-400 pointer-events-none" />
//   </div>
// );

// export default function Market() {
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [commodities, setCommodities] = useState([]);

//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedCommodity, setSelectedCommodity] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [prices, setPrices] = useState(null);
//   const [error, setError] = useState("");

//   // --- Initial State Fetch (Now uses Mock Data) ---
//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         // Attempt to fetch, but use mock data if connection fails
//         const res = await axios.get(`${FLASK_API_BASE_URL}/get_states`);
//         setStates(res.data.states || MOCK_STATES);
//       } catch (err) {
//         console.error("Error fetching initial states (Using mock data):", err);
//         setError("Failed to load initial states. Using mock state list.");
//         setStates(MOCK_STATES);
//       }
//     };
//     fetchStates();
//   }, []);

//   // --- Handlers Connected to Flask API (Now uses Mock Data Fallback) ---

//   const handleStateChange = async (e) => {
//     const state = e.target.value;
//     setSelectedState(state);
//     setSelectedDistrict("");
//     setSelectedCommodity("");
//     setDistricts([]);
//     setCommodities([]);
//     setPrices(null);
//     setError("");

//     if (!state) return;

//     setLoading(true);
//     try {
//       const res = await axios.post(`${FLASK_API_BASE_URL}/get_districts`, {
//         state,
//       });
//       setDistricts(res.data.districts || MOCK_DISTRICTS[state] || []);
//     } catch (err) {
//       console.error("Error fetching districts (Using mock data):", err);
//       // Fallback to mock data for the selected state
//       setDistricts(MOCK_DISTRICTS[state] || []);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDistrictChange = async (e) => {
//     const district = e.target.value;
//     setSelectedDistrict(district);
//     setSelectedCommodity("");
//     setCommodities([]);
//     setPrices(null);
//     setError("");

//     if (!district) return;

//     setLoading(true);
//     try {
//       const res = await axios.post(`${FLASK_API_BASE_URL}/get_commodities`, {
//         state: selectedState,
//         district: district,
//       });
//       setCommodities(res.data.commodities || MOCK_COMMODITIES);
//     } catch (err) {
//       console.error("Error fetching commodities (Using mock data):", err);
//       // Fallback to mock commodity data
//       setCommodities(MOCK_COMMODITIES);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCommodityChange = (e) => setSelectedCommodity(e.target.value);

//   const getPrices = async () => {
//     if (!selectedState || !selectedDistrict || !selectedCommodity) return;

//     setLoading(true);
//     setError("");
//     setPrices(null);

//     try {
//       // *** THIS IS THE LIVE API CALL ***
//       const res = await axios.post(`${FLASK_API_BASE_URL}/get_prices`, {
//         state: selectedState,
//         district: selectedDistrict,
//         commodity: selectedCommodity,
//       });

//       if (res.data.error) {
//         setError(res.data.error);
//         setPrices(null);
//       } else {
//         setPrices(res.data);
//       }
//     } catch (err) {
//       console.error("Error fetching prices (Using mock data):", err);
//       // Fallback to mock price data on network error
//       setPrices({
//         ...MOCK_PRICES,
//         commodity: selectedCommodity,
//         district: selectedDistrict,
//         state: selectedState,
//       });
//       setError("API Request failed. Showing mock data for UI testing.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- Formatting and Trend Logic ---

//   const formatPrice = (price) =>
//     price ? `₹ ${price.toLocaleString("en-IN")}` : "--";

//   const calculateTrend = (change) => {
//     if (!change || change.status === "N/A" || change.amount === 0) return null;

//     const percentage = Math.abs(change.percent).toFixed(2);

//     if (change.status === "UP")
//       return {
//         text: `+${percentage}%`,
//         color: "text-emerald-600", // Changed from green-600
//         icon: TrendingUp,
//       };
//     if (change.status === "DOWN")
//       return {
//         text: `-${percentage}%`,
//         color: "text-red-600",
//         icon: TrendingDown,
//       };
//     return { text: "No Change", color: "text-gray-600", icon: Scale };
//   };

//   // --- Render UI ---
//   return (
//     // Base changed to gray-100 to match home page
//     // src/pages/Market.jsx (Line ~323)
//     <section className="relative w-full h-full overflow-y-auto bg-gray-100 flex flex-col items-center pt-8 pb-12 font-inter">
//       {" "}
//       {/* Subtle background texture/pattern updated for soft light theme */}
//       <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white opacity-90"></div>
//       {/* Container width adjusted to 7xl to match home page */}
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//         {/* Title and Subtitle */}
//         <motion.header
//           className="text-center mb-10"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Text color updated to match home page strong headings */}
//           {/* Adjusted mobile font size to text-4xl for better fit on small screens */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             <span className="inline-block mr-3 transform -translate-y-1">
//               {/* Icon color updated to emerald-500 */}
//               <SquareTerminal className="w-10 h-10 md:w-12 md:h-12 text-emerald-500" />
//             </span>
//             Real-Time Mandi Price Tracker
//           </h1>

//           <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
//             Access current and historical market prices across India instantly.
//           </p>
//         </motion.header>

//         {/* Market Selection Card */}
//         <motion.div
//           className="bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-2xl ring-1 ring-emerald-100/50 mb-10"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           {/* Header color updated to emerald-700 */}
//           <h2 className="text-2xl font-bold text-emerald-700 border-b border-emerald-100 pb-4 mb-6 text-center">
//             Select Market Parameters
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <SelectInput
//               label="Select State"
//               value={selectedState}
//               onChange={handleStateChange}
//               options={states}
//               placeholder="Select State"
//             />
//             <SelectInput
//               label="Select District / Market"
//               value={selectedDistrict}
//               onChange={handleDistrictChange}
//               options={districts}
//               disabled={!selectedState || loading}
//               placeholder="Select District"
//             />
//             <SelectInput
//               label="Select Commodity"
//               value={selectedCommodity}
//               onChange={handleCommodityChange}
//               options={commodities}
//               disabled={!selectedDistrict || loading}
//               placeholder="Select Commodity"
//             />
//           </div>

//           <div className="text-center mt-8">
//             <motion.button
//               onClick={getPrices}
//               disabled={!selectedCommodity || loading}
//               className={`
//                 px-12 py-3.5 text-lg font-bold rounded-full shadow-lg transition-all transform
//                 ${
//                   !selectedCommodity || loading
//                     ? "bg-emerald-300 text-emerald-800 cursor-not-allowed" // Updated disabled state
//                     : "bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-[1.01] active:scale-95 shadow-emerald-400/50" // Updated active state
//                 }
//               `}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Mandi Prices
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Results Section */}
//         {loading && (
//           <div className="text-center py-8">
//             {/* Loader color updated */}
//             <Loader2 className="animate-spin h-10 w-10 text-emerald-600 mx-auto" />
//             <p className="mt-4 text-emerald-700 font-medium">
//               Fetching latest prices...
//             </p>
//           </div>
//         )}

//         {error && (
//           <div className="bg-red-50 text-red-700 text-center p-5 rounded-xl border border-red-300 max-w-4xl mx-auto font-medium shadow-md">
//             {error}
//           </div>
//         )}

//         {prices && !loading && (
//           <motion.div
//             className="bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-2xl ring-1 ring-emerald-100/50 mt-10"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             {/* Header color updated */}
//             <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800 mb-8 text-center">
//               <TranslatorText
//                 text={`${prices.commodity} Price in ${prices.district}`}
//               />
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Current Price (Modal) Card */}
//               <div className="border-t-4 border-emerald-500 p-6 rounded-2xl bg-emerald-50 shadow-lg hover:shadow-xl transition-shadow">
//                 {/* Text colors updated */}
//                 <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center">
//                   <span className="text-2xl mr-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="w-6 h-6"
//                     >
//                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
//                     </svg>
//                   </span>
//                   Modal Price Today
//                 </h3>
//                 {/* Large price text color updated */}
//                 <p className="text-5xl font-black text-emerald-600 tracking-tight mb-2">
//                   {formatPrice(prices.current?.modal)}
//                 </p>
//                 <p className="text-sm font-medium text-gray-500">
//                   Date: {prices.current?.date || "N/A"}
//                 </p>

//                 {/* Trend Indicator: Green/Red colors handled in calculateTrend */}
//                 {prices.change && calculateTrend(prices.change) && (
//                   <p
//                     className={`text-lg font-bold mt-4 flex items-center ${
//                       calculateTrend(prices.change)?.color
//                     }`}
//                   >
//                     {h(calculateTrend(prices.change).icon, {
//                       className: "w-5 h-5 mr-1",
//                     })}
//                     {calculateTrend(prices.change).text}
//                     <span className="text-sm text-gray-500 font-normal ml-3">
//                       vs previous day
//                     </span>
//                   </p>
//                 )}

//                 <p className="text-base text-gray-700 mt-4 border-t pt-4">
//                   Min:{" "}
//                   <span className="font-semibold text-gray-800">
//                     {formatPrice(prices.current?.min)}
//                   </span>{" "}
//                   | Max:{" "}
//                   <span className="font-semibold text-gray-800">
//                     {formatPrice(prices.current?.max)}
//                   </span>
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   Unit: {prices.current?.unit || "Quintal"}
//                 </p>
//               </div>

//               {/* District Price Range Card (Using Indigo for contrast, which is fine) */}
//               <div className="border-t-4 border-indigo-500 p-6 rounded-2xl bg-indigo-50 shadow-lg hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
//                   <span className="text-2xl mr-2">
//                     <Scale className="w-6 h-6" />
//                   </span>
//                   District Price Range
//                 </h3>
//                 <p className="text-3xl font-black text-indigo-600 tracking-tight mb-2">
//                   {formatPrice(prices.range?.min_district)}
//                   <span className="text-2xl font-normal text-gray-500 mx-2">
//                     to
//                   </span>
//                   {formatPrice(prices.range?.max_district)}
//                 </p>
//                 <p className="text-base text-gray-700 mt-6">
//                   This represents the minimum and maximum Modal Prices recorded
//                   across all markets in{" "}
//                   <span className="font-semibold text-indigo-700">
//                     {prices.district}
//                   </span>
//                   .
//                 </p>
//                 <p className="text-xs text-gray-500 mt-2">
//                   Data collected across different markets and dates.
//                 </p>
//               </div>
//             </div>

//             {/* Competitive Markets */}
//             {prices.competitive_markets &&
//               prices.competitive_markets.length > 0 && (
//                 <div className="mt-10 pt-8 border-t border-gray-100">
//                   {/* Header color updated */}
//                   <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
//                     💰 Top Competitive Markets in {prices.state}
//                   </h3>
//                   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//                     {prices.competitive_markets.map((market, index) => (
//                       <div
//                         key={index}
//                         // Adjusted padding and font sizes for better fit on small screens
//                         className="bg-white p-3 sm:p-4 rounded-xl border border-yellow-200 shadow-md hover:shadow-lg transition-shadow text-center transform hover:scale-[1.02]"
//                       >
//                         <p className="text-xl sm:text-2xl font-bold text-yellow-800">
//                           {formatPrice(market.modal)}
//                         </p>
//                         <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-1 truncate">
//                           {market.market}
//                         </p>
//                         <p className="text-[10px] sm:text-xs text-gray-500 truncate">
//                           ({market.district})
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
