import { useEffect, useRef, useState } from 'react';
import { accordions } from '../components/data';


export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    const accordionContainer = useRef(null)

    function handleSingleSelected(id) {
        setSelected(selected === id ? null : id)
    }

    function handleMultiSelected(id) {
        if (multiple.includes(id)) {
            const newMultiple = multiple.filter(selected => selected !== id)
            setMultiple(newMultiple)
        } else {
            setMultiple(prevMultiple => [...prevMultiple, id])
        }

    }

    function toggleMultiSelection() {
        enableMultiSelection && setSelected(null)
        enableMultiSelection && setMultiple([])
        setEnableMultiSelection(!enableMultiSelection)
    }

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (accordionContainer.current && !accordionContainer.current.contains(e.target)) {
                setSelected(null)
                setMultiple([])
            }
        })
    }, [])

    return (
        <div className='w-[480px] mx-auto text-white my-6'>
            <button type='button' className={`${enableMultiSelection ? 'bg-red-600' : 'bg-teal-600'} px-4 font-black text-sm py-2 mb-5 cursor-pointer shadow-lg block mx-auto hover:opacity-85 transition-opacity`} onClick={toggleMultiSelection}>{enableMultiSelection ? "Disable" : "Enable"} Multi Selection</button>

            <div className='flex flex-col space-y-3 text-sm p-2' ref={accordionContainer}>
                {
                    accordions && accordions.length > 0 && accordions.map(accordion => {
                        return <div key={accordion.id} className='bg-teal-600 p-1 shadow-lg border-2 border-transparent hover:border-black'>
                            <div className='cursor-pointer font-bold text-sm flex justify-between w-full items-center hover:opacity-85 transition-opacity px-2 py-2' onClick={enableMultiSelection
                                ? () => handleMultiSelected(accordion.id)
                                : () => handleSingleSelected(accordion.id)
                            }>
                                <span className='text-sm font-semibold select-none'>{accordion.question}</span>
                                <span className={`text-xs transition-transform ${(accordion.id === selected || multiple.includes(accordion.id)) && 'rotate-180'}`}><i className="fa-solid fa-chevron-up"></i></span>
                            </div>
                            {
                                (accordion.id === selected || multiple.includes(accordion.id))
                                && <div className='p-2'>
                                    <p className='text-xs'>{accordion.answer}</p>
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        </div >

    )
}


