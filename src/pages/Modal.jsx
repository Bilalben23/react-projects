import { useRef, useState } from 'react'
import { FaTimes } from "react-icons/fa"
import useOutsideClick from '../utils/useOutsideClick'

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false)
    const [popupAccepted, setPopupAccepted] = useState(false)
    const modelBox = useRef()
    useOutsideClick(modelBox, () => setIsOpen(false))

    return (
        <div>
            <div className='mx-auto w-fit'>
                <button onClick={() => setIsOpen(true)} type='button' className='px-2 py-1 text-white transition bg-blue-600 rounded-md shadow hover:opacity-80 hover:shadow-none'>Open Modal Popup</button>
            </div>

            <div className='absolute inset-0 flex items-center justify-center bg-slate-100/50 backdrop-blur-sm z-[100] scale-0 transition-transform' style={{
                transform: isOpen ? 'scale(1)' : 'scale(0)',
            }} >
                <div ref={modelBox} className='relative p-5 border-2 border-red-500 bg-slate-50'>
                    <FaTimes
                        size={30}
                        className='absolute transition border-2 border-black cursor-pointer right-1 top-1 hover:opacity-85'
                        title='Close The Popup'
                        onClick={() => setIsOpen(false)}
                    />
                    <div className='px-4 py-2 mt-4 bg-slate-200'>
                        <h1 className='text-2xl font-semibold'>Customized Header</h1>
                    </div>
                    <div className='min-h-[120px] flex flex-col items-center justify-center bg-slate-100 py-3'>
                        <p>Customized body goes here</p>
                    </div>
                    <div className='flex items-center justify-between px-4 py-2 bg-slate-200'>
                        <button type='button' className='px-3 py-1.5 rounded-lg shadow bg-red-500 text-white transition hover:opacity-85 hover:shadow-none' onClick={() => {
                            setIsOpen(false)
                            setPopupAccepted(false)
                        }}>Refuse</button>
                        <button type='button' className='px-3 py-1.5 rounded-lg shadow bg-blue-500 text-white transition hover:opacity-85 hover:shadow-none' onClick={() => {
                            setIsOpen(false)
                            setPopupAccepted(true)
                        }}>Accept</button>
                    </div>
                </div>
            </div>
            {
                popupAccepted && <div className='mx-auto mt-5 w-fit'>
                    <h2 className='text-green-700'>Popup accepted</h2>
                </div>
            }
        </div>
    )
}
