import { useState, useEffect } from "react";
import Quotes from "./Quote";

function App() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  async function fetchQuote() {
    try {
      const response = await fetch(
        "https://cheerful-druid-73acab.netlify.app/.netlify/functions/zenquotes-proxy"
      );
      const data = await response.json();
      console.log(data);
      return {
        text: data[0].q,
        author: data[0].a,
      };
    } catch (error) {
      console.error("Using fallback quote");
      return {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      };
    }
  }
  async function updateQuotes() {
   setIsLoading(true); // Set loading to true when starting to fetch
    try {
      const quote = await fetchQuote();
      setQuotes(quote.text);
      setAuthor(quote.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setIsLoading(false); // Set loading to false when done (success or error)
    }
  }

  // Fetch initial quote on component mount
  useEffect(() => {
    updateQuotes();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="wrapper">
          <div className="container">
            <p style={{color: 'white'}}>Loading...</p>
          </div>
        </div>
      ) : (
        <Quotes
          Quotes={quotes}
          Author={`— ${author}`}
          updatequotes={updateQuotes}
        />
      )}
    </>
  );
}

export default App;
