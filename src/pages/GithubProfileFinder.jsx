import React, { useEffect, useState } from 'react';

export default function GithubProfileFinder() {
    const [username, setUsername] = useState('BilalBen23');
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchGithubUserData = async () => {
        setIsLoading(true);
        setError(null); // Reset error state on new fetch

        try {
            const res = await fetch(`https://api.github.com/users/${username}`);

            // Handle HTTP errors
            if (!res.ok) {
                throw new Error(`Error: ${res.statusText}`);
            }

            const data = await res.json();
            setUserData(data);
        } catch (err) {
            setError(err.message); // Set error message
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    const handleSubmit = () => {
        if (username) {
            fetchGithubUserData();
        }
    };

    return (
        <div className="max-w-lg p-4 mx-auto">
            <div className="flex justify-center space-x-3">
                <input
                    type="search"
                    name="search-by-username"
                    value={username}
                    placeholder="Search Github Username..."
                    className="px-2 py-1.5 border-2 border-slate-500 rounded w-full"
                    onChange={(e) => setUsername(e.target.value.trim())}
                />
                <button
                    type="button"
                    className="px-3 text-white py-1.5 bg-blue-500 shadow transition rounded hover:opacity-90 hover:shadow-none focus:ring-2 text-xs font-semibold"
                    onClick={handleSubmit}>
                    Search
                </button>
            </div>

            <div className="my-4">
                {isLoading && (
                    <LoadingPlaceholder />
                )}

                {error && (
                    <ErrorMessage message={error} />
                )}

                {!isLoading && userData && (
                    <UserCard userData={userData} />
                )}
            </div>
        </div>
    );
}

function LoadingPlaceholder() {
    return (
        <div className="w-full p-3 mx-auto border-2 rounded border-slate-500">
            <div className="w-[95px] mx-auto h-[95px] rounded-full border-2 shadow bg-slate-200 animate-pulse"></div>
            <p className="mt-3 w-1/2 mx-auto h-[20px] rounded bg-slate-200 animate-pulse"></p>
            <p className="mt-4 w-[90%] mx-auto h-[20px] rounded bg-slate-200 animate-pulse"></p>
            <p className="mt-3 w-3/4 mx-auto h-[20px] rounded bg-slate-200 animate-pulse"></p>
            <p className="mt-3 w-1/2 mx-auto h-[20px] rounded bg-slate-200 animate-pulse"></p>
            <p className="mt-3 w-1/2 mx-auto h-[20px] rounded bg-slate-200 animate-pulse"></p>
        </div>
    );
}

function ErrorMessage({ message }) {
    return (
        <div className="w-full p-3 mx-auto text-red-700 bg-red-100 border-2 border-red-500 rounded">
            <p>{message}</p>
        </div>
    );
}

function UserCard({ userData }) {
    const createdDate = new Date(userData.created_at);

    return (
        <div className="w-full p-3 mx-auto text-center border-2 rounded border-slate-500">
            <a href={userData.avatar_url} target="_blank" rel="noreferrer" className="block mx-auto mb-2 w-fit">
                <img src={userData.avatar_url} alt={userData.login} className="w-[110px] h-[110px] rounded-full border-2" />
            </a>
            <p className="mb-2">
                <a target="_blank" rel="noreferrer" href={userData.html_url} className="font-bold text-purple-900 underline transition hover:opacity-90">
                    {userData.login}
                </a>
            </p>
            <p className="mb-1 text-sm font-semibold">
                {userData.type} | Joined on: {`${createdDate.getDate()} ${createdDate.toLocaleString('en-US', { month: 'short' })} ${createdDate.getFullYear()}`}
            </p>
            <p className="mb-1 text-sm font-semibold">Public Repos: {userData.public_repos}</p>
            <p className="mb-1 text-sm font-semibold">Followers: {userData.followers}</p>
            <p className="text-sm font-semibold">Following: {userData.following}</p>
        </div>
    );
}
