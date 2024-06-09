import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  let text1 = "GPT-3-powered chatbots excel in generating human-like responses, enhancing user interaction with advanced natural language understanding.";
  let text2 = "GPT-3 transforms knowledge bases by generating accurate responses, automating updates, enhancing search, and improving user engagement.";
  let text3 = "GPT-3 enhances education by providing personalized tutoring, automated grading, content generation, and interactive learning experiences.";
  return (
    <div className="gpt3__whatgpt3 section__margin" id = "wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title = "What is GPT3" text = "GPT-3, developed by OpenAI, is a state-of-the-art language model that uses machine learning to generate human-like text. It is based on the Transformer architecture and has 175 billion parameters, making it one of the most powerful models available."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title = "Chatbots" text = {text1}/>
        <Feature title = "Knowledgebase" text = {text2}/>
        <Feature title = "Education" text = {text3}/>
      </div>
    </div>
  )
}

export default WhatGPT3