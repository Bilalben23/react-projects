import React, { useEffect, useState } from 'react'

export default function GenerateColors() {
    const [colorType, setColorType] = useState('hex')
    const [randomColor, setRandomColor] = useState('#3b82f6')

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    function generateHexColor() {
        const hexRed = red.toString(16).padStart(2, '0')
        const hexGreen = green.toString(16).padStart(2, '0')
        const hexBlue = blue.toString(16).padStart(2, '0')
        const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

        setRandomColor(hexColor)
    }

    function generateRGBColor() {
        const alpha = Math.floor(Math.random() * 11)
        const rgbaColor = `rgba(${red} ${green}, ${blue}, ${alpha})`
        setRandomColor(rgbaColor)
    }

    useEffect(() => {
        if (colorType === 'hex') generateHexColor()
        else generateRGBColor()
    }, [colorType])


    return (
        <div className='flex flex-col w-full items-center justify-around h-my-screen -mt-4' style={{
            backgroundColor: randomColor
        }}>
            <div className='flex justify-center items-center space-x-4'>
                <button type='button' className="shadow-lg px-3 py-2 rounded-md bg-white border-2 transition-opacity hover:opacity-90 hover:border-black font-bold text-sm" onClick={() => { setColorType("hex") }}>Create HEX Color</button>
                <button type='button' className="shadow-lg px-3 py-2 rounded-md bg-white border-2 transition-opacity hover:opacity-90 hover:border-black font-bold text-sm" onClick={() => setColorType("rgb")} >Create RGB Color</button>
                <button type='button' className="shadow-lg px-3 py-2 rounded-md bg-white border-2 transition-opacity hover:opacity-90 hover:border-black font-bold text-sm" onClick={colorType === "hex"
                    ? generateHexColor
                    : generateRGBColor
                }>Generate random Color</button>
            </div>
            <div>
                <p className='bg-white py-2 px-3 font-bold shadow rounded'>{colorType === "hex" ? "HEX" : "RGB"} Color</p>
            </div>
            <div>
                <p className='bg-white py-2 px-3 font-bold text-4xl shadow rounded'>{randomColor}</p>
            </div>
        </div>
    )
}
