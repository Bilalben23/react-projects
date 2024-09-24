import React from 'react'
// import useLocalStorage from '../utils/useLocalStorage'

export default function LightDarkMode() {



    return (
        <div className='flex flex-col items-center justify-center mt-6 space-y-5 tracking-wider'>
            <h1 className='text-2xl'>Hello World</h1>
            <button type='button' className={`px-3 py-2 rounded-md shadow hover:opacity-90 transition hover:shadow-none bg-black text-white`}>Change Theme</button>
        </div>
    )
}
