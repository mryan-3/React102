import Quote from "./components/Quote";
import React, {useEffect, useState} from 'react';
import "./styles.css";


export default function App() {

  const [quote, setQuote] = useState({
    anime : null, 
    character : null,
    quote : null
  });

  const fetchQuote = async () => {
    return await fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
  }

  const getNewQuote = async () => {
    const newQuote = await fetchQuote();
    setQuote(newQuote);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  const generate = async () => {
    setQuote (await fetchQuote())
  }
  return (
    <div className="App">
      <Quote quote={quote}/>
      <button onClick={generate}>Generate New Quote</button>
    </div>
  );
}
