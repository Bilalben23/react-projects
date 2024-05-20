import React, { useRef } from 'react'


const sections = [
    {
        id: 1,
        label: "Section 1",
        text: "section 1 goes here..."
    },
    {
        id: 2,
        label: "Section 2",
        text: "section 2 goes here..."
    },
    {
        id: 3,
        label: "Section 3",
        text: "section 3 goes here..."
    },
    {
        id: 4,
        label: "Section 4",
        text: "section 4 goes here..."
    }
]

export default function ScrollToSection() {
    const ref = useRef(null);

    function handleScrollToSection() {
        const pos = ref.current.getBoundingClientRect().top
        window.scrollTo(0, pos)

    }

    return (
        <div className='space-y-1 m-3'>
            <button type='button'
                onClick={handleScrollToSection}
                className='px-3 py-1.5 rounded-lg bg-slate-300 mx-auto block transition hover:opacity-80'>
                Scroll to section 3
            </button>

            {
                sections.map(section => {
                    return <section key={section.id} className='w-full h-[500px] text-ce bg-slate-200' ref={section.id === 3 ? ref : null}>
                        <h1 className='text-center font-bold text-xl'>{section.text}</h1>
                    </section>
                })
            }
        </div >
    )
}
