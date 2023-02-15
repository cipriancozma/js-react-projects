import { useEffect, useState } from "react";
import QuoteContainer from "./components/QuoteContainer/QuoteContainer";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://cipriancozma.github.io/quotes-api/quotes.json"
      );
      const data = await response.json();
      setQuotes(data[Math.floor(Math.random() * data.length)]);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  if (error) return <div>Error...Please try again later</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <QuoteContainer quotes={quotes} getQuotes={getQuotes} />
    </div>
  );
}

export default App;
