import React from 'react'
import useLocalStorage from '../utils/useLocalStorage'

export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#ffffff';
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
        }
    }

    console.log(theme);
    return (
        <div data-theme={theme} className='flex items-center justify-center flex-col space-y-5 mt-6 tracking-wider'>
            <h1 className='text-2xl'>Hello World</h1>
            <button onClick={handleToggleTheme} className={`px-3 py-2 rounded-md shadow hover:opacity-90 transition hover:shadow-none ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>Change Theme</button>
        </div>
    )
}
