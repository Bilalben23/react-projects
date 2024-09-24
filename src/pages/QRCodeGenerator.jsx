import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('')
    const [text, setText] = useState('')

    function handleGenerateQrCode() {
        setQrCode(text)
        setText('')
    }

    return (
        <div className='w-3/4 mx-auto'>
            <div className='flex mx-auto items-center justify-center space-x-3 mb-6 bg-slate-200 p-3 w-fit rounded shadow'>
                <input
                    className='px-2 py-1.5'
                    type="text"
                    value={text}
                    name='qr-code' placeholder='Enter your text...'
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className='px-3 py-1.5 bg-blue-500 text-white rounded-md shadow transition hover:opacity-90 hover:shadow-none'
                    disabled={text && text.trim() === ''}
                    type='button'
                    onClick={handleGenerateQrCode}>
                    Generate
                </button>
            </div>
            <div className='w-fit mx-auto border shadow-lg'>
                <QRCode
                    className='w-full'
                    id='qr-code-value'
                    value={qrCode}
                    size={300}
                    bgColor='#f5f5f5'
                />
            </div>
        </div>
    )
}
