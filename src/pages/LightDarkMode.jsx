import React, { useEffect, useState } from 'react'
// import useLocalStorage from '../utils/useLocalStorage'

export default function LightDarkMode() {



    return (
        <div className='flex items-center justify-center flex-col space-y-5 mt-6 tracking-wider'>
            <h1 className='text-2xl'>Hello World</h1>
            <button type='button' className={`px-3 py-2 rounded-md shadow hover:opacity-90 transition hover:shadow-none bg-black text-white`}>Change Theme</button>
        </div>
    )
}
