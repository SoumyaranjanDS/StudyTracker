import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";

const QuoteSection = () => {
  const { theme } = useContext(AppContext);
  const isDark = theme === "dark";

  const [quote, setQuote] = useState("Loading...");

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://api.allorigins.win/get?url=" +
          encodeURIComponent("https://zenquotes.io/api/quotes")
      );
      const result = await response.json();
      const data = JSON.parse(result.contents);

      const randomIndex = Math.floor(
        Math.random() * data.length
      );

      setQuote(data[randomIndex].q);
    } catch {
      setQuote("Failed to fetch quote");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className={`w-full rounded-xl shadow p-6 transition-all duration-500 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        
        {/* Quote */}
        <p className="italic text-base sm:text-lg leading-relaxed wrap-break-word flex-1">
          "{quote}"
        </p>

        {/* Button */}
        <button
          onClick={fetchQuote}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl transition duration-300 whitespace-nowrap self-start sm:self-auto"
        >
          New Quote
        </button>

      </div>
    </div>
  );
};

export default QuoteSection;