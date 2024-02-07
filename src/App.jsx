import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const quotesData = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" },
  { text: "The only person you should try to be better than is the person you were yesterday.", author: "Unknown" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
  { text: "The harder I work, the luckier I get.", author: "Gary Player" }
];

function App() {
  const [index, setIndex] = useState(Math.floor(Math.random()*quotesData.length));
  const [opacity,setOpacity] = useState(1);
  const [color, setColor] = useState('#' + Math.floor(Math.random()*16777215).toString(16));

  const quoteText = () => {
    return (
      <div id="text" className='pb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16" style={{ opacity, transition: 'opacity 0.5s'}}>
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
        </svg>
        <span id="text" style={{ opacity, transition: 'opacity 0.5s', fontSize: '24px', fontWeight: 'bold'}}>{quotesData[index].text}</span>
      </div>
    );
  };
  const authorText = () => {
    return (
      <div id="author" className="text-end pb-4">
        <span id="text" style={{ opacity, transition: 'opacity 0.5s' }}>- {quotesData[index].author}</span>
      </div>
    );
  };

  const tweetButton = () =>
  {
    return (
      <button id="tweet-quote" type="button" className="btn btn-primary btn-outline-none" style={{ backgroundColor: color}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
        </svg>
      </button>
    );
  };
  const redditButton = () =>
  {
    return (
      <button id="reddit-quote" type="button" className="btn btn-primary btn-outline-none" style={{ backgroundColor: color}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
          <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"/>
        </svg>
      </button>
    );
  };
  const newQuoteButton = () => {
    const handleClick = () => {
      setOpacity(0);
    
      setTimeout(() => {
        setIndex(Math.floor(Math.random()*quotesData.length));
        setColor('#' + Math.floor(Math.random()*16777215).toString(16));
        
        setTimeout(() => {
          setOpacity(1);
        }, 500);

      }, 500);
    }
    return (
      <button id='new-quote' onClick={handleClick} type="button" className="btn btn-primary btn-outline-none" style={{ backgroundColor: color}}>New Quote</button>
    );
  };

  return (
    <div id="warpper" className='container d-flex justify-content-center align-items-center vh-100' style={{ color }}>
      <div id="quote-box">
        {quoteText()}
        {authorText()}
        <div id="buttons" className="row">
          <div className='col d-flex gap-1'>
            {tweetButton()}
            {redditButton()}
          </div>
          <div className='col d-flex justify-content-end'>
            {newQuoteButton()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
