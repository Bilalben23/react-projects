import React from 'react'

export default function Home() {
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-center font-semibold mb-2 text-xl'>19 React projects</h1>
            <p className='mb-2'>I have learn a lot of things in my way to complete these projects:</p>
            <ul className="ml-5 text-sm space-y-1">
                <li>
                    How to use the state hook <mark>useState</mark> to manage the React component state and trigger rerendering to update the UI.
                </li>
                <li>
                    How to use <mark>useEffect</mark> to fetch data from an API and render the response data in the UI.
                </li>
                <li>
                    How to build custom hooks by applying DRY principles, such as <mark>useFetch</mark>, <mark>useLocalStorage</mark> and <mark>useOutsideClick</mark>.
                </li>
                <li>
                    How to use the <mark>React-icons</mark> library to include necessary icons in the app.
                </li>
                <li>
                    How to use the <mark>react-loader-spinner</mark> library to incorporate prebuilt loader components.
                </li>
                <li>
                    How to utilize <mark>react-router-dom</mark> library for handling routing and navigation in a single-page application.
                </li>
                <li>
                    How to integrate global state management solutions like <mark>Redux</mark> for more complex state management needs.
                </li>
            </ul>
        </div>
    )
}