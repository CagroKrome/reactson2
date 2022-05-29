import React from 'react'
import './card.css'

export default function Card({title, author}) {
  return (
      <div className='card'>
          <div className='content'>
            <h1>{title}</h1>
            <h1>•</h1>
            <h3>{author}</h3>
          </div>
      </div>
  )
}