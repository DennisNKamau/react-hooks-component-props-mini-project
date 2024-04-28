import React from 'react'

function makeEmojiList(minutes) {
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";
  
    let emojis = "";
    for (let i = 0; i < minutes; i += interval) {
      emojis += emoji;
    }
  
    return emojis;
  } 


export default function Article({title, date="January 1 1970",}){
    const emojis = makeEmojiList(minutes);
  return (
    <Article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </Article>
  )
}
