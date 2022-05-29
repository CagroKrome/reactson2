import React from 'react'
import './stories.css'
import Story from './story'

export default function Stories() {
    return (
        <div>
            <div className='story-container'>
                <Story />
                <Story />
                <Story />
            </div>
        </div>
    )
}