import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Tabs({ tabs = [] }) {
    const queryParams = new URLSearchParams(useLocation().search);
    const initialTab = queryParams.get('tab') || tabs[0]?.id || 'tab1'; // Fallback to the first tab
    const [currentTab, setCurrentTab] = useState(initialTab);

    useEffect(() => {
        if (!queryParams.has('tab')) {
            queryParams.set('tab', initialTab);
        }
    }, [initialTab, queryParams]);

    return (
        <div>
            <div className="flex items-center justify-center mx-auto border-2 divide-x-2 shadow divide-emerald-500 bg-slate-200 w-fit border-emerald-500">
                {tabs.map(tab => (
                    <Link
                        key={tab.id}
                        to={`?tab=${tab.to}`}
                        onClick={() => setCurrentTab(tab.id)}
                        className={`px-6 py-2 text-sm font-semibold transition-colors duration-300 ${queryParams.get('tab') === tab.to ? 'bg-orange-600 text-white' : 'bg-slate-100 text-black'
                            }`}>
                        {tab.label}
                    </Link>
                ))}
            </div>
            <div className="bg-slate-300 md:w-1/2 mx-auto min-h-[300px] mt-4 rounded text-center shadow flex items-center justify-center">
                <h1 className="text-xl font-bold tracking-wider">
                    {tabs.find(tab => tab.id === currentTab)?.text || 'Select a tab'} {/* Fallback text */}
                </h1>
            </div>
        </div>
    );
}
