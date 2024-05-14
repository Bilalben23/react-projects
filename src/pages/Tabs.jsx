import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'



export default function Tabs({ tabs = [] }) {

    const [currentTab, setCurrentTab] = useState(tabs[0].id)
    const queryParams = new URLSearchParams(useLocation().search);


    useEffect(() => {
        if (!queryParams.has('tab')) {
            queryParams.set('tab', 'tab1')
        }
    }, [])

    return (
        <div>
            <div className='flex items-center justify-center mx-auto border-2 divide-x-2 shadow divide-emerald-500 bg-slate-200 w-fit border-emerald-500'>
                {
                    (tabs && tabs.length > 0) && tabs.map(tab => {
                        return (
                            <Link
                                key={tab.id}
                                to={`?tab=${tab.to}`}
                                onClick={() => setCurrentTab(tab.id)}
                                className={`px-6 py-2 text-sm font-semibold ${queryParams.get("tab") === tab.to ? 'bg-orange-600' : 'bg-slate-100'}`}>
                                {tab.label}
                            </Link>
                        )
                    })
                }
            </div>
            <div className='bg-slate-300 md:w-1/2 mx-auto min-h-[300px] mt-4 rounded text-center shadow flex items-center justify-center'>
                <h1 className='font-bold tracking-wider font-xl'>{tabs[currentTab].text}</h1>
            </div>
        </div>
    )
}


// Query string.
// users can share the url on chat and social media and instantly get the same UI.
// users can bookmark the URL and get the same UI.
// users can sue the the back button to get the previous UI.
// users can refresh the page and get the same UI.
// tech-savvy users will be able to manipulate the URL to get the UI they want.
// Search Engine Optimization (SEO) - URLs with structured state data can improve search engine ranking.
// users can save the URL for themselves. e.g. in note taking app, to come back to same UI later.
// suer can send the URL to a new device and get the same UI.
// can even stay a server component.(Next.js)