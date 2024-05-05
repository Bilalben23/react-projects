import React, { useEffect, useState } from 'react'

export default function Accordion() {
    const [multiSelected, setMultiSelected] = useState(false)
    const [selection, setSelection] = useState([]);


    function handleExpandClick(question) {
        if (multiSelected) {
            if (selection.includes(question)) {
                const newSelection = selection.filter(item => item !== question);
                setSelection(newSelection);
            } else {
                setSelection(prevStatus => Array.isArray(prevStatus) ? [...prevStatus, question] : [question])
            }
        } else {
            setSelection(selection === question ? [] : question)
        }
    }

    function toggleMultiSelection() {
        setMultiSelected(prevStatus => !prevStatus)
        setSelection([])
    }

  

    return (
        <div className='w-[460px] mx-auto text-white my-6'>
            <button type='button' className={`${multiSelected ? 'bg-red-600' : 'bg-teal-600'} px-4 font-black text-sm py-2 mb-5 cursor-pointer shadow-lg block mx-auto hover:opacity-85 transition-opacity`} onClick={toggleMultiSelection}>{multiSelected ? "Disable" : "Enable"} Multi Selection</button>

            <div className='flex flex-col space-y-3 text-sm'>

                <div className='bg-teal-600 p-2 shadow-lg border-2 border-transparent hover:border-black'>
                    <button type='button' className='cursor-pointer font-bold text-sm flex justify-between w-full items-center hover:opacity-85 transition-opacity' onClick={() => handleExpandClick('q1')}>
                        <span className='text-sm font-semibold'>What are accordion components?</span>
                        <span className='font-bold text-lg'>+</span>
                    </button>
                    <p className={`text-xs mt-2 ${!(selection === 'q1' || (Array.isArray(selection) && selection.includes('q1'))) && 'hidden'}`} >Accordion components are UI elements that let users expand and collapse sections of content to manage visibility and focus on relevant information.</p>
                </div>

                <div className='bg-teal-600 p-2 shadow-lg border-2 border-transparent hover:border-black'>
                    <button type='button' className='cursor-pointer text-sm flex justify-between w-full items-center hover:opacity-85 transition-opacity' onClick={() => handleExpandClick('q2')}>
                        <span className='text-sm font-semibold'>What are they used for?</span>
                        <span className='font-bold text-lg'>+</span>
                    </button>
                    <p className={`text-xs mt-2 ${!(selection === 'q2' || (Array.isArray(selection) && selection.includes('q2'))) && 'hidden'}`} >Accordion components are used to organize and display content in a collapsible and expandable format, allowing users to manage visibility and focus on specific information.</p>
                </div>

                <div className='bg-teal-600 p-2 shadow-lg border-2 border-transparent hover:border-black'>
                    <button type='button' className='cursor-pointer flex font-bold justify-between w-full items-center hover:opacity-85 transition-opacity' onClick={() => handleExpandClick('q3')}>
                        <span className='text-sm font-semibold'>Accordion as a musical Instrument</span>
                        <span className='font-bold text-lg'>+</span>
                    </button>
                    <p className={`text-xs mt-2 ${!(selection === 'q3' || (Array.isArray(selection) && selection.includes('q3'))) && 'hidden'}`}>An accordion is a musical instrument that creates sound through the vibration of reeds as air passes over them, typically played by compressing and expanding the bellows while pressing keys or buttons to produce different notes and chords.</p>
                </div>

                <div className='bg-teal-600 p-2 shadow-lg border-2 border-transparent hover:border-black'>
                    <button type='button' className='cursor-pointer flex font-bold justify-between w-full items-center hover:opacity-85 transition-opacity' onClick={() => handleExpandClick('q4')}>
                        <span className='text-sm font-semibold'>Can I create an accordion component with a different framework?</span>
                        <span className='font-bold text-lg'>+</span>
                    </button>
                    <p className={`text-xs mt-2 ${!(selection === 'q4' || (Array.isArray(selection) && selection.includes('q4'))) && 'hidden'}`}>Yes, you can create an accordion component with different frameworks or libraries such as React, Vue.js, Angular, or even plain HTML, CSS, and JavaScript.</p>
                </div>
            </div>
        </div >

    )
}
