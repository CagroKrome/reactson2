// Importing React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// Importing components
import Navbar from './navbar.js'
import Card from './card';
// import State from './state';
import cardData from './cardData';
import Stories from './stories';

// Defining the root
const root = document.getElementById('root')

let cards = cardData.map(card => {
    return (
        <Card title={card.title} author={card.author} />
    )
})

function App() {
    return (
        <div>
            <Navbar />
            <Stories />
            <section>
                {cards}
            </section>
        </div>
    )
}

ReactDOM.render(<App />, root)