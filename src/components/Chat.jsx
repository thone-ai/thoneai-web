import React, { useState } from 'react'
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Chat = () => {
  const [defaultChat, setDefaultChat] = useState(true);
  const randomPH = () => {
    const inputs = ["Tell me what Python is", "Tell me the square root of 25", "Tell me what Codesandbox is", "Tell me the date on which Albert Einstein was born", "Tell me the date Steve Jobs was born"];
    const randomfn = inputs[Math.floor(Math.random() * inputs.length)];

    return randomfn;
  }

  async function handleChat(e) {
    e.preventDefault();
    const data = await 
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => { 
        return response.json().then((data) => {
            console.log(data);
            return data;
        }).catch((err) => {
            console.log(err);
        }) 
    });
  }

  return (
    <motion.div 
      className="chat-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
    <ul className="chat-list">
      {defaultChat ? (
        <>
          <motion.li 
            className="message sent"
            variants={item}
          >
            <p className="content">Hi!</p>
          </motion.li>
          <motion.li 
            className="message received"
            variants={item}
          >
            <p className="content">Hi! I'm Thone AI. What do you want?</p>
          </motion.li>
          <motion.li 
            className="message sent"
            variants={item}
          >
            <p className="content">Correct this text: Hi, I are Disam, how you are?</p>
          </motion.li>
          <motion.li className="message received"
            variants={item}
          >
            <p className="content">Text corrected: Hi, I'm Disam, how are you?</p>
          </motion.li>
        </>
      ) : (
        <motion.li className="message received"
        variants={item}
        >
          <p className="content">What do you want? I'm at your dispose!</p>
        </motion.li>
      )}
    </ul>
    {defaultChat && (
      <button onClick={() => setDefaultChat(false)} className="sticky-button">Delete chat</button>
    )}
    <form onSubmit={handleChat}>
      <div className="input-container">
        <input type="text" placeholder={randomPH()} />
      </div>
    </form>
  </motion.div>  
  )
}

export default Chat;