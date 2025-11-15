import React from "react";

export default function FeatureCard({ icon: Icon, title, desc, link }) {
  const CardContent = (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-xl h-full transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-500 hover:scale-[1.03]">
      <div className="p-4 mb-4 rounded-full bg-emerald-50 text-emerald-600 shadow-md">
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
        {title}
      </h3>

      <p className="text-gray-600 text-center text-sm sm:text-base">{desc}</p>
    </div>
  );

  return (
    <div className="h-full">
      {link ? (
        <a
          href={link}
          target={link.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="block h-full"
        >
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </div>
  );
}
