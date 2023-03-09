import React from 'react'
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
  const randomPH = () => {
    const inputs = ["Tell me what Python is", "Tell me the square root of 25", "Tell me what Codesandbox is", "Tell me the date on which Albert Einstein was born", "Tell me the date Steve Jobs was born"];
    const randomfn = inputs[Math.floor(Math.random() * inputs.length)];

    return randomfn;
  }

  return (
    <motion.div 
      className="chat-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
    <ul className="chat-list">
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
    </ul>
    <div className="input-container">
      <input type="text" placeholder={randomPH()} />
    </div>
  </motion.div>  
  )
}

export default Chat;