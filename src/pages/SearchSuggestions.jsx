import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function SearchSuggestions() {
    const [users, setUsers] = useState([])
    const [searchedUser, setSearchedUser] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            try {
                setIsLoading(true)
                const res = await fetch("https://dummyjson.com/users?limit=100");
                const data = await res.json()
                if (data && data.users && data.users.length > 0) {
                    setUsers(data.users)
                    setFilteredUsers(data.users)
                }
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUsers()
    }, [])


    function handleOnChange(e) {
        setSearchedUser(toCapitalize(e.target.value.trimStart()))

        const filtered_users = users?.filter(user => {
            return searchedUser === '' ? user : toCapitalize(user?.username)?.startsWith(searchedUser)
        })
        setFilteredUsers(filtered_users)
    }


    if (error !== '') {
        return <div className='text-center font-bold'>
            <p>Error Occurred: {error}</p>
        </div>
    }

    return (
        <div>
            <div className='w-[500px] mb-2 mx-auto'>
                <input
                    className='w-full bg-slate-50 border-2 border-slate-500 rounded px-2 py-1.5'
                    type="search"
                    placeholder='Search A User...'
                    value={searchedUser}
                    onChange={handleOnChange}
                />
            </div>
            <div className='w-[500px] h-[320px] overflow-y-auto border-2 border-slate-500 rounded mx-auto bg-[#141E46] p-3'>
                {
                    isLoading && <UserSkelton number={100} />
                }

                {
                    (!isLoading && users && users.length > 0) && <div className="w-full h-full flex flex-col space-y-3">
                        {
                            filteredUsers.map(user => {
                                // console.log(user)
                                return <UserCard
                                    key={user.id}
                                    user={user}
                                    searchedUser={searchedUser}
                                />
                            })
                        }
                    </div>
                }
                {
                    (!isLoading && filteredUsers.length === 0) && <div className='text-center text-white'>
                        <p>No Users To Show</p>
                    </div>
                }
            </div>

        </div>
    )
}



function toCapitalize(str) {
    return str.length > 0 ? (str[0].toUpperCase() + str.slice(1).toLowerCase()) : ''
}


function UserCard({ searchedUser, user: { image, username, company: { title } } }) {

    return (
        <Link to={`?username=${username}`} className='flex w-full items-start justify-start space-x-3 border-2 transition hover:border-blue-500 rounded p-2 border-blue-200 text-white hover:opacity-80'>
            <div className='w-[60px] h-[60px] rounded-full shadow border-2'>
                <img src={image} alt={username} className='w-full h-full' />
            </div>
            <div className='flex flex-col h-full justify-around w-3/4'>
                <p className='text-sm font-bold'> <mark>{searchedUser}</mark>{toCapitalize(username).slice(searchedUser.length)}</p>
                <p className='text-xs'>{title}</p>
            </div>
        </Link>
    )
}


function UserSkelton({ number }) {
    return <div className="w-full h-full flex flex-col space-y-3 cursor-wait">
        {
            [...Array(number)].map((_, index) => {
                return <div key={index} className='flex w-full items-start justify-start space-x-3 border-2 transition rounded p-2 border-blue-200'>
                    <div className='w-[60px] animate-pulse h-[60px] rounded-full bg-slate-300 shadow border-2'></div>
                    <div className='flex flex-col h-full justify-around w-3/4'>
                        <p className='w-2/5 h-[15px] rounded bg-slate-300 animate-pulse'></p>
                        <p className='w-[90%] h-[15px] rounded bg-slate-300 animate-pulse'></p>
                    </div>
                </div>
            })
        }
    </div>
}

