import React from 'react'
import  { useState } from 'react'

function WordCounter() {
  const [text, setText] = useState("");
  const [characterCount, setCharactersCount] = useState(0);
  const [sentenceCount, setSentencesCount] = useState(0);

  const handleChange  = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const characters = inputText.replace(/\s+/g, ' ');
    setCharactersCount(characters.length);

    const sentences = inputText.trim().split(/[.!?](\s|$)/).filter(sentence => sentence.trim().length > 0);
    setSentencesCount(sentences.length);
  }
  return (

    <div className='parent-container'>
        <h1>Word Counter</h1>
        <div className="child-container">
            <div className="left">
                <textarea placeholder="Type or paste your text here" value={text} rows={10} onChange={handleChange}/>
            </div>
            <div className="right">
                <h1>Results</h1>
                <p>Characters: {characterCount}</p>
                <p>Sentences: {sentenceCount}</p>
            </div>
        </div>
    </div>
  )
}

export default WordCounter
