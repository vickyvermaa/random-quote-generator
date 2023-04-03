import { useState,  useEffect } from 'react'
import '../App.css'

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');

  const handleClick = async() =>{
    try{
      const res = await fetch("https://api.quotable.io/random");
      const result  = await res.json();
      setQuote(result.content);
      setAuthor(result.author.toUpperCase());
      setTags(result.tags[0].toUpperCase());
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    handleClick();
  }, []);

    
  return (
    <div className="quote-box">
        <p className="quote-title">{tags}</p>
        <div className="quote">
            {quote}
        </div>
        <div className="author">- {author}</div>
        <button onClick={handleClick}>New Quote</button>
    </div>
  )
}

export default Quote