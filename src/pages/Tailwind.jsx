import React, { useState } from 'react'

export default function Tailwind() {


    return (
        <div>
            <h1>Tailwind css</h1>
            <div className='w-full text-center bg-brand-gradient' id='app'>
                <h1>This is a title</h1>
                <h2>This is a subtitle</h2>
                <p>This is a paragraph</p>
                <a href="#">This is an anchor</a>
                <div>
                    <button>This is a button</button>
                </div>
                <div>
                    <input type="text" placeholder='This is an input...' />
                </div>
                <div>
                    <input type="checkbox" id='checkbox' />
                    <label htmlFor="checkbox">Checkbox</label>
                </div>
                <div>
                    <select >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

// Design System

// Configuration
// Tailwind has been designed from the ground up with customization in mind.
// `npx tailwindcss init`: to generate a tailwind config file for your project.
// `npx tailwindcss init tailwindcss-config.js`
// `npx tailwindcss init --full`