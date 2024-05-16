import React, { useEffect, useState } from 'react'


export default function GithubProfileFinder() {
    const [username, setUsername] = useState('BilalBen23')
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function fetchGithubUserData() {
        try {
            setIsLoading(true)
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json()
            console.log(data)
            if (data) {
                setUserData(data)
            }
        } catch (err) {

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])


    function handleSubmit() {
        fetchGithubUserData()
    }


    return (
        <div>
            <div className='flex justify-center space-x-3 w-[500px] mx-auto'>
                <input
                    type="search"
                    name='search-by-username'
                    value={username}
                    placeholder='Search Github Username...'
                    className='px-2 py-1.5 border-2 border-slate-500 rounded w-full'
                    onChange={(e) => setUsername(e.target.value.trimStart())}
                />
                <button type="button" className='px-3 text-white py-1.5 bg-blue-500 shadow transition rounded hover:opacity-90 hover:shadow-none focus:ring-2 text-xs font-semibold' onClick={handleSubmit}>Search</button>
            </div>

            <div className='my-4'>
                {
                    isLoading && <div className='w-[500px] mx-auto p-3 rounded border-2 border-slate-500'>
                        <div className='w-[95px] mx-auto h-[95px] rounded-full border-2 shadow bg-slate-200 animate-pulse'></div>
                        <p className='mt-3 w-1/2 mx-auto h-[20px] rounded bg-slate-200 animate-pulse'></p>
                        <p className='mt-4 w-[90%] mx-auto h-[20px] rounded bg-slate-200 animate-pulse'></p>
                        <p className='mt-3 w-3/4 mx-auto h-[20px] rounded bg-slate-200 animate-pulse'></p>
                        <p className='mt-3 w-1/2 mx-auto h-[20px] rounded bg-slate-200 animate-pulse'></p>
                        <p className='mt-3 w-1/2 mx-auto h-[20px] rounded bg-slate-200 animate-pulse'></p>
                    </div>
                }
                {
                    (!isLoading && userData) && <UserCard userData={userData} />
                }

            </div>
        </div>
    )
}


function UserCard({ userData }) {
    const createdDate = new Date(userData?.created_at)
    return (
        <div className='text-center w-[500px] mx-auto p-3 rounded border-2 border-slate-500'>
            <a href={userData.avatar_url} target='_blank' rel="noreferrer" className='mb-2 w-fit mx-auto block'>
                <img src={userData.avatar_url} alt={userData.username} className='w-[110px] h-[110px] rounded-full border-2' />
            </a>
            <p className='mb-2'>
                <a target='_blank' rel="noreferrer" href={userData.html_url} className='font-bold underline text-purple-900 hover:opacity-90 transition'>{userData.login}</a>
            </p>
            <p className='mb-1 font-semibold text-sm'>{userData.username} {userData.type} Joined on: {`${createdDate.getDate()} ${createdDate.toLocaleDateString('en-us', {
                month: 'short'
            })} ${createdDate.getFullYear()}`}</p>
            <p className='mb-1 font-semibold text-sm'>Public Repos: {userData.public_repos}</p>
            <p className='mb-1 font-semibold text-sm'>Followers: {userData.followers}</p>
            <p className='text-sm font-semibold'>Following: {userData.following}</p>
        </div>
    )
}