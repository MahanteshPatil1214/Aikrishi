// import { motion } from "framer-motion";
// import farmer from "../assets/farmer.png";
// import TranslatorText from "../components/TranslatorText";
// import ChatBot from "../components/ChatBot";

// export default function Home() {
//   const features = [
//     {
//       title: "AI Farming Diary",
//       desc: "Get daily personalized farming insights and reminders powered by machine learning.",
//       icon: "🤖",
//     },
//     {
//       title: "Live Market Rates",
//       desc: "Track real-time mandi prices and sell your crops at the best time.",
//       icon: "📈",
//       link: "/market",
//     },
//     {
//       title: "Weather Forecast",
//       desc: "Check real-time weather updates and plan your farming activities accordingly.",
//       icon: "🌤️",
//       link: "/weather",
//     },
//     {
//       title: "Crop Disease Detection",
//       desc: "Upload crop photos to detect diseases instantly using AI.",
//       icon: "🧠",
//     },
//     {
//       title: "Community Forum",
//       desc: "Connect with other farmers, share experiences, and learn from experts.",
//       icon: "👥",
//     },
//     {
//       title: "Crop Recommendation",
//       desc: "Get AI-based crop suggestions based on soil nutrients, temperature, rainfall, and pH.",
//       icon: "🌾",
//       link: "/crop-prediction",
//     },
//     {
//       title: "Fertilizer Recommendation",
//       desc: "Get AI-based fertilizer suggestions based on soil nutrients and crop type.",
//       icon: "🧪",
//       link: "/fertilizer",
//     },
//     {
//       title: "Warehouse Finder",
//       desc: "Find nearby agricultural warehouses with storage details instantly.",
//       icon: "🏭",
//       link: "/warehouse",
//     },
//     {
//       title: "Government Schemes",
//       desc: "Stay informed about the latest subsidies and agricultural policies.",
//       icon: "🏛️",
//       link: "https://schemes.vikaspedia.in/viewcontent/schemesall/schemes-for-farmers?lgn=en",
//     },
//   ];

//   return (
//     <section className="w-screen min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-lime-100">
//       {/* 🧭 HERO SECTION */}
//       <div className="relative flex flex-col md:flex-row items-center justify-between max-w-[1280px] mx-auto px-6 py-20 md:py-28">
//         {/* Text */}
//         <motion.div
//           className="md:w-1/2 text-center md:text-left space-y-6"
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 leading-tight">
//             🌱 Krishi Astra <br />
//             <span className="text-lime-600">
//               <TranslatorText text="Empowering Farmers with AI & Innovation" />
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-green-700 max-w-md mx-auto md:mx-0">
//             <TranslatorText text="Revolutionizing Indian agriculture through AI-powered insights, smart market analysis, and personalized crop care." />
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="/market"
//               className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 hover:shadow-2xl transition-all duration-300"
//             >
//               🌾 <TranslatorText text="Explore Market" />
//             </a>

//             <a
//               href="/ai-diary"
//               className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-100 transition-all duration-300"
//             >
//               🤖 <TranslatorText text="Try AI Diary" />
//             </a>
//           </div>
//         </motion.div>

//         {/* Image */}
//         <motion.div
//           className="md:w-1/2 flex justify-center mt-10 md:mt-0"
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }}
//         >
//           <motion.img
//             src={farmer}
//             alt="Farmer illustration"
//             className="w-80 md:w-[420px] drop-shadow-2xl"
//             animate={{
//               y: [0, -15, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </motion.div>
//       </div>

//       {/* 🌿 FEATURES SECTION */}
//       <div className="bg-white py-20 px-6 md:px-16 rounded-t-3xl shadow-inner">
//         <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
//           <TranslatorText text="Our Key Features" />
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               {f.link ? (
//                 <a
//                   href={f.link}
//                   target={f.link.startsWith("http") ? "_blank" : "_self"}
//                   rel="noopener noreferrer"
//                   className="block bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 text-center hover:bg-green-100"
//                 >
//                   <div className="text-5xl mb-4">{f.icon}</div>
//                   <h3 className="text-2xl font-bold text-green-800 mb-2">
//                     <TranslatorText text={f.title} />
//                   </h3>
//                   <p className="text-green-700">
//                     <TranslatorText text={f.desc} />
//                   </p>
//                 </a>
//               ) : (
//                 <div className="bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 text-center">
//                   <div className="text-5xl mb-4">{f.icon}</div>
//                   <h3 className="text-2xl font-bold text-green-800 mb-2">
//                     <TranslatorText text={f.title} />
//                   </h3>
//                   <p className="text-green-700">
//                     <TranslatorText text={f.desc} />
//                   </p>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* 🌾 MISSION SECTION */}
//       <motion.div
//         className="py-24 bg-gradient-to-r from-green-100 to-lime-100 text-center px-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-extrabold text-green-800 mb-6">
//           <TranslatorText text="Why Choose Krishi Astra?" />
//         </h2>
//         <p className="text-lg text-green-700 max-w-3xl mx-auto">
//           <TranslatorText text="We combine the power of artificial intelligence with agricultural expertise to make farming smarter, sustainable, and more profitable for every Indian farmer." />
//         </p>
//       </motion.div>

//       {/* 🌟 CTA SECTION */}
//       <motion.div
//         className="bg-green-700 text-white text-center py-20"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-3xl font-bold mb-4">
//           <TranslatorText text="Join the Future of Smart Farming" />
//         </h2>
//         <p className="text-lg mb-8">
//           <TranslatorText text="Sign up today and be part of India’s Agri-Tech Revolution." />
//         </p>
//         <a
//           href="/"
//           className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-lime-100 transition-all"
//         >
//           🚀 <TranslatorText text="Get Started" />
//         </a>
//       </motion.div>

//       {/* 💬 ChatBot */}
//       <ChatBot />
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import farmer from "../assets/farmer.png";
// import TranslatorText from "../components/TranslatorText";
// import ChatBot from "../components/ChatBot";

// export default function Home() {
//   return (
//     <div className="bg-[#0B150F] text-gray-300 min-h-screen font-display antialiased">
//       {/* ========================= NAVBAR ========================= */}
//       <header className="w-full sticky top-0 z-50 bg-[#0B150F]/80 backdrop-blur-lg border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-3 text-white">
//             <div className="size-8 text-[#34D399]">
//               <svg
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M21.57,8.23a1,1,0,0,0-1,0L18,9.45V4.33A1.33,1.33,0,0,0,16.67,3H7.33A1.33,1.33,0,0,0,6,4.33V9.45L3.43,8.23a1,1,0,0,0-1.37.36,1,1,0,0,0,.36,1.37l3.24,2.37-2.3,4.92A1,1,0,0,0,4,18.67a1,1,0,0,0,.54.16,1,1,0,0,0,.79-.39l3-4.14.73,5.63a1,1,0,0,0,1,.87h4a1,1,0,0,0,1-.87l.73-5.63,3,4.14a1,1,0,0,0,.79.39,1,1,0,0,0,.54-.16,1,1,0,0,0,.55-1.38l-2.3-4.92,3.24-2.37A1,1,0,0,0,21.57,8.23ZM8,6a1,1,0,1,1,1,1A1,1,0,0,1,8,6Zm8,0a1,1,0,1,1,1,1A1,1,0,0,1,16,6Z"></path>
//               </svg>
//             </div>
//             <h2 className="text-white text-2xl font-bold tracking-tight">
//               Krishi Astra
//             </h2>
//           </div>

//           {/* Nav (do not add new items) */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a className="text-gray-300 hover:text-white transition" href="/">
//               Home
//             </a>
//             <a
//               className="text-gray-300 hover:text-white transition"
//               href="/market"
//             >
//               Market
//             </a>
//             <a
//               className="text-gray-300 hover:text-white transition"
//               href="/weather"
//             >
//               Weather
//             </a>
//             <a
//               className="text-gray-300 hover:text-white transition"
//               href="/dashboard"
//             >
//               Dashboard
//             </a>
//           </nav>

//           {/* Button */}
//           <a
//             href="/ai-diary"
//             className="px-5 h-10 flex items-center rounded-md bg-[#34D399] text-[#0B150F] font-semibold hover:bg-[#10B981] transition shadow-sm"
//           >
//             Try AI Diary
//           </a>
//         </div>
//       </header>

//       {/* ========================= HERO SECTION ========================= */}
//       <section className="relative w-full py-24 md:py-36 lg:py-48 overflow-hidden">
//         {/* Background overlays */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0B150F] via-[#0B150F] to-transparent"></div>
//         <div className="absolute inset-0 bg-[#0B150F]/30"></div>

//         <div className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
//           <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
//             Empowering Farmers with <br /> AI & Innovation
//           </h1>

//           <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
//             Revolutionizing Indian agriculture through AI-powered insights,
//             smart market analysis, and personalized crop care.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
//             <a
//               href="/market"
//               className="w-full sm:w-auto px-8 h-12 rounded-lg flex items-center justify-center bg-[#34D399] text-[#0B150F] text-base font-semibold hover:bg-[#10B981] shadow-lg transition"
//             >
//               Explore Market
//             </a>

//             <a
//               href="/crop-prediction"
//               className="w-full sm:w-auto px-8 h-12 rounded-lg flex items-center justify-center bg-[#112A18] text-white border border-white/20 text-base font-semibold hover:bg-white/10 transition"
//             >
//               Crop Recommendations →
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ========================= HERO IMAGE ========================= */}
//       <section className="-mt-24 md:-mt-32 pb-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
//             <img
//               src={farmer}
//               className="w-full h-full object-cover scale-110"
//               alt="Farmer"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ========================= FEATURES GRID ========================= */}
//       <section className="w-full pb-32">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-gray-200 text-3xl md:text-4xl font-bold text-center mb-14">
//             Our Key Features
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: "🤖", title: "AI Farming Diary", link: "/ai-diary" },
//               { icon: "📈", title: "Live Market Rates", link: "/market" },
//               { icon: "🌤️", title: "Weather Forecast", link: "/weather" },
//               {
//                 icon: "🌾",
//                 title: "Crop Recommendation",
//                 link: "/crop-prediction",
//               },
//               {
//                 icon: "🧪",
//                 title: "Fertilizer Recommendation",
//                 link: "/fertilizer",
//               },
//               { icon: "🏭", title: "Warehouse Finder", link: "/warehouse" },
//             ].map((f, i) => (
//               <a
//                 key={i}
//                 href={f.link}
//                 className="bg-[#112A18] border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition shadow-xl"
//               >
//                 <div className="text-5xl mb-4">{f.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   <TranslatorText text={f.title} />
//                 </h3>
//                 <p className="text-gray-400">
//                   Explore advanced farming solutions powered by AI.
//                 </p>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========================= FOOTER ========================= */}
//       <footer className="border-t border-white/10 bg-[#0B150F]">
//         <div className="max-w-7xl mx-auto px-6 py-10 text-center text-gray-400 text-sm">
//           © 2024 Krishi Astra. All rights reserved.
//         </div>
//       </footer>

//       {/* ========================= CHATBOT ========================= */}
//       <ChatBot />
//     </div>
//   );
// }

// import React from "react";
// import TranslatorText from "../components/TranslatorText";
// // --- Icon Components (Replacing lucide-react imports for single-file use) ---

// const Bot = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-bot"
//   >
//     <path d="M12 8V4" />
//     <path d="M10 2h4" />
//     <path d="M12 18h.01" />
//     <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//   </svg>
// );
// const LineChart = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-line-chart"
//   >
//     <path d="M3 3v18h18" />
//     <path d="m18 8-4-4-6 6-4-4" />
//   </svg>
// );
// const CloudSun = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-cloud-sun"
//   >
//     <path d="M12 2v2" />
//     <path d="m4.93 4.93 1.41 1.41" />
//     <path d="M20 12h2" />
//     <path d="m19.07 4.93-1.41 1.41" />
//     <path d="M15.947 12.879a4 4 0 0 0-4.965-2.73 5.105 5.105 0 0 0-3.398-3.003c-2.883-.787-5.836 1.77-4.14 4.757-.146.035-.297.054-.45.054a4.01 4.01 0 0 0-3.79-2.613c-2.43 0-4.407 2.05-4.407 4.568S.61 17.5 3.04 17.5H19.5a4.5 4.5 0 0 0 .5-9z" />
//   </svg>
// );
// const Scan = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-scan"
//   >
//     <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" />
//     <path d="M9 11h6v6H9z" />
//   </svg>
// );
// const Users = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-users"
//   >
//     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );
// const WheatOff = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-wheat-off"
//   >
//     <path d="M2 2l20 20" />
//     <path d="M12 2v2" />
//     <path d="M17.5 22h-11" />
//     <path d="M6 10c0 4 0 8 0 8" />
//     <path d="M15 13c0 1-1.8 2-3 2-1.2 0-3-1-3-2 0-1 1.8-2 3-2 1.2 0 3 1 3 2z" />
//     <path d="M9 13.78v4.22" />
//     <path d="M9.3 9.4A5 5 0 1 1 12 18H9" />
//   </svg>
// );
// const FlaskConical = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-flask-conical"
//   >
//     <path d="M14.4 2v2.868A4.04 4.04 0 0 1 18 8v7a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6V8c0-2.316 1.66-4.25 3.868-4.965L9.6 2h4.8Z" />
//     <path d="M8.5 2h7" />
//   </svg>
// );
// const Building = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-building"
//   >
//     <path d="M2 20V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
//     <path d="M7 10h10" />
//     <path d="M7 14h10" />
//     <path d="M7 18h10" />
//   </svg>
// );
// const ScrollText = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-scroll-text"
//   >
//     <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h18" />
//     <path d="M17 6h-6" />
//     <path d="M15 10h-4" />
//   </svg>
// );
// // --- End Icon Components ---

// // Data for Krishi Astra features
// const features = [
//   {
//     title: "AI Farming Diary",
//     desc: "Get daily personalized farming insights and reminders powered by machine learning.",
//     icon: Bot,
//   },
//   {
//     title: "Live Market Rates",
//     desc: "Track real-time mandi prices and sell your crops at the best time.",
//     icon: LineChart,
//     link: "/market",
//   },
//   {
//     title: "Weather Forecast",
//     desc: "Check real-time weather updates and plan your farming activities accordingly.",
//     icon: CloudSun,
//     link: "/weather",
//   },
//   {
//     title: "Crop Disease Detection",
//     desc: "Upload crop photos to detect diseases instantly using AI.",
//     icon: Scan,
//     // FIX APPLIED HERE: Added the link property to make the card clickable
//     link: "/detect-disease",
//   },
//   {
//     title: "Community Forum",
//     desc: "Connect with other farmers, share experiences, and learn from experts.",
//     icon: Users,
//   },
//   {
//     title: "Crop Recommendation",
//     desc: "Get AI-based crop suggestions based on soil nutrients, temperature, rainfall, and pH.",
//     icon: WheatOff,
//     link: "/crop-prediction",
//   },
//   {
//     title: "Fertilizer Recommendation",
//     desc: "Get AI-based fertilizer suggestions based on soil nutrients and crop type.",
//     icon: FlaskConical,
//     link: "/fertilizer",
//   },
//   {
//     title: "Warehouse Finder",
//     desc: "Find nearby agricultural warehouses with storage details instantly.",
//     icon: Building,
//     link: "/warehouse",
//   },
//   {
//     title: "Government Schemes",
//     desc: "Stay informed about the latest subsidies and agricultural policies.",
//     icon: ScrollText,
//     link: "https://schemes.vikaspedia.in/viewcontent/schemesall/schemes-for-farmers",
//   },
// ];

// // Feature Card Component (Updated for Soft Light Theme)
// const FeatureCard = ({ icon: Icon, title, desc, link }) => {
//   const CardContent = (
//     // SOFT LIGHT STYLING: Pure white card background for contrast against gray-100 page background
//     <div className="flex flex-col items-center p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-xl h-full transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-500 hover:scale-[1.03]">
//       <div className="p-4 mb-4 rounded-full bg-emerald-50 text-emerald-600 shadow-md">
//         <Icon className="w-8 h-8" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
//         {title}
//       </h3>
//       <p className="text-gray-600 text-center text-sm sm:text-base">{desc}</p>
//     </div>
//   );

//   return (
//     <div className="h-full">
//       {link ? (
//         <a
//           href={link}
//           target={link.startsWith("http") ? "_blank" : "_self"}
//           rel="noopener noreferrer"
//           className="block h-full"
//         >
//           {CardContent}
//         </a>
//       ) : (
//         CardContent
//       )}
//     </div>
//   );
// };

// // Placeholder for external components/logic

// const ChatBot = () => (
//   <div className="fixed bottom-4 right-4 z-50 p-4 bg-emerald-600 text-white rounded-full shadow-2xl cursor-pointer hover:bg-emerald-500 transition">
//     <span className="text-xl">💬 AI Chat</span>
//   </div>
// );

// export default function App() {
//   return (
//     // Soft Light Base: bg-gray-100 for the entire application
//     <section className="min-h-screen font-sans bg-gray-100 text-gray-800">
//       {/* 🧭 HERO SECTION - Soft background with subtle gradient */}
//       <div className="w-full bg-gradient-to-br from-white to-gray-50 pb-20 pt-24 md:pt-32 shadow-md">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//             {/* Text Content */}
//             <div className="md:w-1/2 text-center md:text-left space-y-6">
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
//                 🌱 Krishi Astra
//                 <br />
//                 {/* Accent gradient text clip for high contrast */}
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
//                   <TranslatorText text="Empowering Farmers with AI & Innovation" />
//                 </span>
//               </h1>

//               <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
//                 <TranslatorText text="Revolutionizing Indian agriculture through AI-powered insights, smart market analysis, and personalized crop care." />
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
//                 {/* Primary Button - Bright emerald accent */}
//                 <a
//                   href="/market"
//                   className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold shadow-xl
//                   bg-emerald-600 text-white
//                   hover:bg-emerald-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//                 >
//                   🌾 <TranslatorText text="Explore Market" />
//                 </a>

//                 {/* Secondary Button - Subtle light border with dark text */}
//                 <a
//                   href="/ai-diary"
//                   className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold
//                   border-2 border-gray-300 text-gray-700
//                   hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
//                 >
//                   🤖 <TranslatorText text="Try AI Diary" />
//                 </a>
//               </div>
//             </div>

//             {/* Image Placeholder */}
//             <div className="md:w-1/2 flex justify-center">
//               <img
//                 // Placeholder image adjusted for the light theme contrast
//                 src="https://placehold.co/420x420/a7f3d0/065f46?text=Krishi+Astra+Farmer"
//                 alt="Farmer illustration placeholder"
//                 className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl shadow-2xl transition-all duration-1000"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🌿 FEATURES SECTION - Main content area is bright white for focus */}
//       <div className="bg-white py-20 px-6 md:px-16 rounded-t-3xl relative -mt-6 shadow-xl">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           <TranslatorText text="Our Key Features" />
//         </h2>

//         {/* Feature Grid - Enhanced responsiveness for all screen sizes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {features.map((f, i) => (
//             <FeatureCard
//               key={i}
//               icon={f.icon}
//               title={f.title}
//               desc={f.desc}
//               link={f.link}
//             />
//           ))}
//         </div>
//       </div>

//       {/* 🌾 MISSION SECTION - Back to the soft gray background */}
//       <div className="py-24 bg-gray-100 text-center px-6 border-t border-gray-200">
//         <h2 className="text-4xl font-extrabold text-emerald-700 mb-6">
//           <TranslatorText text="Why Choose Krishi Astra?" />
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//           <TranslatorText text="We combine the power of artificial intelligence with agricultural expertise to make farming smarter, sustainable, and more profitable for every Indian farmer." />
//         </p>
//       </div>

//       {/* 🌟 CTA SECTION - High-contrast emerald green for the final call */}
//       <div className="bg-emerald-600 text-white text-center py-20">
//         <h2 className="text-3xl font-bold mb-4">
//           <TranslatorText text="Join the Future of Smart Farming" />
//         </h2>
//         <p className="text-lg mb-8 text-emerald-100">
//           <TranslatorText text="Sign up today and be part of India’s Agri-Tech Revolution." />
//         </p>
//         <a
//           href="/"
//           className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
//         >
//           🚀 <TranslatorText text="Get Started" />
//         </a>
//       </div>

//       {/* 💬 ChatBot Placeholder */}
//       <ChatBot />

//       {/* Footer */}
//       <footer className="bg-gray-200 py-6 text-center text-gray-600 border-t border-gray-300">
//         <p>
//           &copy; {new Date().getFullYear()} Krishi Astra. All rights reserved.
//         </p>
//       </footer>
//     </section>
//   );
// }

// import React from "react";
// import TranslatorText from "../components/TranslatorText";
// import ChatBot from "../components/ChatBot";
// import farmer from "../assets/farmer.png";
// import FeatureCard from "../components/FeatureCard";

// //
// // ✅ ICON COMPONENTS — MUST BE ABOVE HOME()
// //

// const Bot = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 8V4" />
//     <path d="M10 2h4" />
//     <path d="M12 18h.01" />
//     <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//   </svg>
// );

// const LineChart = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M3 3v18h18" />
//     <path d="m18 8-4-4-6 6-4-4" />
//   </svg>
// );

// const CloudSun = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 2v2" />
//     <path d="m4.93 4.93 1.41 1.41" />
//     <path d="M20 12h2" />
//     <path d="m19.07 4.93-1.41 1.41" />
//     <path d="M15.947 12.879a4 4 0 0 0-4.965-2.73 5.105 5.105 0 0 0-3.398-3.003C4.7 6.3 1.75 8.86 3.45 11.84c-.14.03-.29.05-.45.05A4.01 4.01 0 0 0 .21 9.28C-2.22 9.28-4.2 11.33-4.2 13.85S-2.22 18.5.21 18.5H19.5a4.5 4.5 0 0 0 .5-9z" />
//   </svg>
// );

// const Scan = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" />
//     <path d="M9 11h6v6H9z" />
//   </svg>
// );

// const Users = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );

// const WheatOff = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M2 2l20 20" />
//     <path d="M12 2v2" />
//     <path d="M17.5 22h-11" />
//     <path d="M6 10c0 4 0 8 0 8" />
//     <path d="M15 13c0 1-1.8 2-3 2-1.2 0-3-1-3-2s1.8-2 3-2 3 1 3 2z" />
//     <path d="M9 13.78v4.22" />
//     <path d="M9.3 9.4A5 5 0 1 1 12 18H9" />
//   </svg>
// );

// const FlaskConical = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M14.4 2v2.868A4.04 4.04 0 0 1 18 8v7a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6V8c0-2.316 1.66-4.25 3.868-4.965L9.6 2h4.8Z" />
//     <path d="M8.5 2h7" />
//   </svg>
// );

// const Building = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M2 20V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
//     <path d="M7 10h10" />
//     <path d="M7 14h10" />
//     <path d="M7 18h10" />
//   </svg>
// );

// const ScrollText = (props) => (
//   <svg
//     {...props}
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h18" />
//     <path d="M17 6h-6" />
//     <path d="M15 10h-4" />
//   </svg>
// );

// //
// // 🚀 HOME COMPONENT
// //

// export default function Home() {
//   const features = [
//     {
//       title: <TranslatorText text="AI Farming Diary" />,
//       desc: (
//         <TranslatorText text="Get daily personalized farming insights and reminders powered by machine learning." />
//       ),
//       icon: Bot,
//       link: "/ai-diary",
//     },
//     {
//       title: <TranslatorText text="Live Market Rates" />,
//       desc: (
//         <TranslatorText text="Track real-time mandi prices and sell your crops at the best time." />
//       ),
//       icon: LineChart,
//       link: "/market",
//     },
//     {
//       title: <TranslatorText text="Weather Forecast" />,
//       desc: (
//         <TranslatorText text="Check real-time weather updates and plan your farming activities accordingly." />
//       ),
//       icon: CloudSun,
//       link: "/weather",
//     },
//     {
//       title: <TranslatorText text="Crop Disease Detection" />,
//       desc: (
//         <TranslatorText text="Upload crop photos to detect diseases instantly using AI." />
//       ),
//       icon: Scan,
//       link: "/detect-disease",
//     },
//     {
//       title: <TranslatorText text="Community Forum" />,
//       desc: (
//         <TranslatorText text="Connect with other farmers, share experiences, and learn from experts." />
//       ),
//       icon: Users,
//       link: "/community",
//     },
//     {
//       title: <TranslatorText text="Crop Recommendation" />,
//       desc: (
//         <TranslatorText text="Get AI-based crop suggestions based on soil nutrients, temperature, rainfall, and pH." />
//       ),
//       icon: WheatOff,
//       link: "/crop-prediction",
//     },
//     {
//       title: <TranslatorText text="Fertilizer Recommendation" />,
//       desc: (
//         <TranslatorText text="Get AI-based fertilizer suggestions based on soil nutrients and crop type." />
//       ),
//       icon: FlaskConical,
//       link: "/fertilizer",
//     },
//     {
//       title: <TranslatorText text="Warehouse Finder" />,
//       desc: (
//         <TranslatorText text="Find nearby agricultural warehouses with storage details instantly." />
//       ),
//       icon: Building,
//       link: "/warehouse",
//     },
//     {
//       title: <TranslatorText text="Government Schemes" />,
//       desc: (
//         <TranslatorText text="Stay informed about the latest subsidies and agricultural policies." />
//       ),
//       icon: ScrollText,
//       link: "https://schemes.vikaspedia.in/viewcontent/schemesall/schemes-for-farmers",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gray-100">
//       {/* HERO */}
//       <div className="pt-24 pb-20 bg-gradient-to-br from-white to-gray-50 shadow-md">
//         <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-12">
//           {/* HERO TEXT */}
//           <div className="md:w-1/2 text-center md:text-left space-y-6">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
//               🌱 Krishi Astra
//               <br />
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
//                 <TranslatorText text="Empowering Farmers with AI & Innovation" />
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-700">
//               <TranslatorText text="Revolutionizing Indian agriculture through AI-powered insights, smart market analysis, and personalized crop care." />
//             </p>

//             {/* BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <a
//                 href="/market"
//                 className="px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 hover:scale-105 transition"
//               >
//                 🌾 <TranslatorText text="Explore Market" />
//               </a>

//               <a
//                 href="/ai-diary"
//                 className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-200 hover:scale-105 transition"
//               >
//                 🤖 <TranslatorText text="Try AI Diary" />
//               </a>
//             </div>
//           </div>

//           {/* HERO IMAGE */}
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src={farmer}
//               className="w-full max-w-md rounded-3xl shadow-xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* FEATURES */}
//       <div className="bg-white py-20 px-6 md:px-16 rounded-t-3xl -mt-6 shadow-xl">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           <TranslatorText text="Our Key Features" />
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {features.map((item, i) => (
//             <FeatureCard key={i} {...item} />
//           ))}
//         </div>
//       </div>

//       {/* MISSION */}
//       <div className="py-24 text-center bg-gray-100 border-t border-gray-200">
//         <h2 className="text-4xl font-extrabold text-emerald-700 mb-6">
//           <TranslatorText text="Why Choose Krishi Astra?" />
//         </h2>
//         <p className="text-lg max-w-3xl mx-auto text-gray-600">
//           <TranslatorText text="We combine the power of artificial intelligence with agricultural expertise to make farming smarter, sustainable, and more profitable for every Indian farmer." />
//         </p>
//       </div>

//       {/* CTA */}
//       <div className="bg-emerald-600 text-white text-center py-20">
//         <h2 className="text-3xl font-bold mb-4">
//           <TranslatorText text="Join the Future of Smart Farming" />
//         </h2>
//         <p className="text-lg mb-8 text-emerald-100">
//           <TranslatorText text="Sign up today and be part of India’s Agri-Tech Revolution." />
//         </p>
//         <a
//           href="/"
//           className="px-8 py-4 rounded-full bg-white text-emerald-700 font-semibold hover:bg-gray-200 shadow-lg hover:scale-105 transition"
//         >
//           🚀 <TranslatorText text="Get Started" />
//         </a>
//       </div>

//       <ChatBot />

//       <footer className="py-6 bg-gray-200 text-center text-gray-600 border-t border-gray-300">
//         © {new Date().getFullYear()} Krishi Astra. All rights reserved.
//       </footer>
//     </section>
//   );
// }



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { motion } from "framer-motion";
import farmer from "../assets/farmer.png";
import TranslatorText from "../components/TranslatorText";
import ChatBot from "../components/ChatBot.jsx";

export default function Home() {
  const features = [
    {
      title: "AI Farming Diary",
      desc: "Get daily personalized farming insights and reminders powered by machine learning.",
      icon: "🤖",
    },
    {
      title: "Soil Health Card",
      desc: "Analyze your soil's nutrient levels to make smarter crop choices and invest in the right fertilizers for better results.",
      icon: "👨‍🌾",
      link: "https://soilhealth.dac.gov.in/soilhealthcard", // ✅ CORRECTED: Full external link. Opens in new tab.
    },
    {
      title: "Live Market Rates",
      desc: "Track real-time mandi prices and sell your crops at the best time.",
      icon: "📈",
      link: "/market",
    },
    {
      title: "Weather Forecast",
      desc: "Check real-time weather updates and plan your farming activities accordingly.",
      icon: "🌤️",
      link: "/weather",
    },
    {
      title: "Crop Disease Detection",
      // ⚠️ ADDED THE LINK PROPERTY HERE
      desc: "Upload crop photos to detect diseases instantly using AI.",
      icon: "🧠",
      link: "https://plantdiseasdetect.streamlit.app/", // ✅ External link. Opens in new tab.
    },
    {
      title: "Buying Seeds",
      // ⚠️ ADDED THE LINK PROPERTY HERE
      desc: "Upload crop photos to detect diseases instantly using AI.",
      icon: "🧠",
      link: "https://www.mystore.in/en/collection/nsc", // ✅ External link. Opens in new tab.
    },
    {
      title: "Community Forum",
      desc: "Connect with other farmers, share experiences, and learn from experts.",
      icon: "👥",
    },
    {
      title: "Crop Recommendation",
      desc: "Get AI-based crop suggestions based on soil nutrients, temperature, rainfall, and pH.",
      icon: "🌾",
      link: "/crop-prediction",
    },
    {
      title: "Fertilizer Recommendation",
      desc: "Get AI-based fertilizer suggestions based on soil nutrients and crop type.",
      icon: "🧪",
      link: "/fertilizer",
    },
    {
      title: "Warehouse Finder",
      desc: "Find nearby agricultural warehouses with storage details instantly.",
      icon: "🏭",
      link: "/warehouse",
    },
     {
      title: "Crop prediction ",
      desc: "Find nearby agricultural warehouses with storage details instantly.",
      icon: "🏭",
      link: "https://cropprediction-mdq98a2hnpunwn5iehkty2.streamlit.app/",
    },
    {
      title: "Government Schemes",
      desc: "Stay informed about the latest subsidies and agricultural policies.",
      icon: "🏛️",
      link: "https://schemes.vikaspedia.in/viewcontent/schemesall/schemes-for-farmers?lgn=en", // ✅ External link. Opens in new tab.
    },
  ];

  return (
    <section className="w-screen min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-lime-100">
      {/* 🧭 HERO SECTION */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-[1280px] mx-auto px-6 py-20 md:py-28">
        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 leading-tight">
            🌱 Krishi Astra <br />
            <span className="text-lime-600">
              <TranslatorText text="Empowering Farmers with AI & Innovation" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-green-700 max-w-md mx-auto md:mx-0">
            <TranslatorText text="Revolutionizing Indian agriculture through AI-powered insights, smart market analysis, and personalized crop care." />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/market"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 hover:shadow-2xl transition-all duration-300"
            >
              🌾 <TranslatorText text="Explore Market" />
            </a>

            <a
              href="/ai-diary"
              className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-100 transition-all duration-300"
            >
              🤖 <TranslatorText text="Try AI Diary" />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }}
        >
          <motion.img
            src={farmer}
            alt="Farmer illustration"
            className="w-80 md:w-[420px] drop-shadow-2xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* 🌿 FEATURES SECTION */}
      <div className="bg-white py-20 px-6 md:px-16 rounded-t-3xl shadow-inner">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
          <TranslatorText text="Our Key Features" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {f.link ? (
                <a
                  href={f.link}
                  target={f.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 text-center hover:bg-green-100"
                >
                  <div className="text-5xl mb-4">{f.icon}</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    <TranslatorText text={f.title} />
                  </h3>
                  <p className="text-green-700">
                    <TranslatorText text={f.desc} />
                  </p>
                </a>
              ) : (
                <div className="bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition-all border border-green-100 text-center">
                  <div className="text-5xl mb-4">{f.icon}</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    <TranslatorText text={f.title} />
                  </h3>
                  <p className="text-green-700">
                    <TranslatorText text={f.desc} />
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌾 MISSION SECTION */}
      <motion.div
        className="py-24 bg-gradient-to-r from-green-100 to-lime-100 text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-green-800 mb-6">
          <TranslatorText text="Why Choose Krishi Astra?" />
          
        </h2>
        <p className="text-lg text-green-700 max-w-3xl mx-auto">
          <TranslatorText text="We combine the power of artificial intelligence with agricultural expertise to make farming smarter, sustainable, and more profitable for every Indian farmer." />
        </p>
      </motion.div>

      {/* 🌟 CTA SECTION */}
      <motion.div
        className="bg-green-700 text-white text-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          <TranslatorText text="Join the Future of Smart Farming" />
        </h2>
        <p className="text-lg mb-8">
          <TranslatorText text="Sign up today and be part of India’s Agri-Tech Revolution." />
        </p>
        <a
          href="/"
          className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-lime-100 transition-all"
        >
          🚀 <TranslatorText text="Get Started" />
        </a>
      </motion.div>

      {/* 💬 ChatBot */}
      <ChatBot />
    </section>
 );
}