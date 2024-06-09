import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>GPT-3, developed by OpenAI, is a state-of-the-art language model that uses machine learning to generate human-like text. It is based on the Transformer architecture and has 175 billion parameters, making it one of the most powerful models available.</p>
        <h4>Request for early access</h4>
      </div>
    </div>
  )
}

export default Possibility