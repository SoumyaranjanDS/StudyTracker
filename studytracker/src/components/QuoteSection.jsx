import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";

const QuoteSection = () => {
  const { theme } = useContext(AppContext);
  const isDark = theme === "dark";

  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      // Using CORS proxy
      const response = await fetch(
        "https://api.allorigins.win/get?url=" +
          encodeURIComponent("https://zenquotes.io/api/quotes")
      );
      const result = await response.json();
      const data = JSON.parse(result.contents);

      if (Array.isArray(data) && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].q);
      } else {
        setQuote("No quote available");
      }
    } catch (error) {
      console.error(error);
      setQuote("Failed to fetch quote");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className={`flex justify-between items-center rounded-2xl p-6 shadow-md transition-all duration-500 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex-1">
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <p className="text-lg italic truncate">{`"${quote}"`}</p>
        )}
      </div>

      <button
        onClick={fetchQuote}
        className="ml-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl transition duration-300 whitespace-nowrap"
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteSection;