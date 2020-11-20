import React,{useState,useEffect} from "react"
import './App.scss';



const apiUrl = 'https://api.quotable.io/random';
function App() {

  const [response, setQuote] = useState({content:"Loding...",author:"..."})


  useEffect( function handleNextButton1() {
     fetch(apiUrl).then(response =>response.json())
    .then(data => {
      setQuote({content:data.content,
                author: data.author})
    })},

  []);


  const getRandomQuote = () => {
    return fetch(apiUrl).then(response => response.json());
  }
  
  async function handleNextButton() {
    const quoteData = await getRandomQuote();
    setQuote({content: quoteData.content,
              author: quoteData.author})
    
  }
    
  return (
    <div className="app">
      <div className="quote-box-outter">
        <div className="quote-box-inner">
          <p className="quote-content">{response.content}</p>
          <p className="quote-author">-{response.author}</p>
          <div className="quote-button-wrapper">
            <button className="next-button btn" onClick={handleNextButton}>Next</button>
            <a href={`https://twitter.com/intent/tweet?text=${response.content}`}
             target="_blank" rel="noreferrer">
               <button className="tweet-button btn">Tweet</button>
            </a>
         </div>
        </div>
      </div>
      
    </div>
  );
}


export default App;