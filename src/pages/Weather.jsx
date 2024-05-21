import { useEffect, useState } from 'react'


const API_KEY = "b3526a880a6c500b792a5999596c9eec"

export default function Weather() {
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [weatherData, setWeatherData] = useState({})


    async function fetchWeatherData(city) {
        try {
            setIsLoading(true)
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            const data = await res.json();
            if (data) {
                setWeatherData(data)
            }
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }


    function handleSearch() {
        if (search !== '') {
            fetchWeatherData(search)
        }
    }

    useEffect(() => {
        fetchWeatherData("Morocco")
    }, [])

    console.log({ ...weatherData })

    return (
        <div>
            <SearchInput
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
                isLoading={isLoading}
            />
            {
                isLoading && <WeatherCardSkeleton />
            }
            {
                (!isLoading && weatherData) && <WeatherCard
                    weatherData={weatherData}
                />
            }

        </div>
    )
}


function WeatherCard({ weatherData }) {

    function getCurrentDate(unixTimestamp) {
        return new Date(unixTimestamp * 1000).toLocaleDateString('en-us', {
            weekday: "long",
            month: "long",
            day: 'numeric',
            year: "numeric",
        })
    }


    return (
        <div className='w-[500px] mx-auto bg-violet-900 p-3 pb-5 rounded my-4 shadow text-white text-center'>
            <div className='w-[65px] aspect-square mx-auto'>
                <img
                    src={`https://openweathermap.org/img/wn/${(weatherData?.weather && weatherData?.weather[0]) ? weatherData?.weather[0]?.icon : "01d"}@2x.png`}
                    alt={(weatherData?.weather && weatherData?.weather[0]) ? weatherData?.weather[0]?.description : "weather description"}
                    className='w-full h-full'
                />
            </div>
            <h1 className='text-center font-semibold text-xl'>{weatherData?.name || "City"}, <span> {weatherData?.sys?.country || "Country"}</span></h1>
            <p className='text-sm mt-1'>{getCurrentDate(weatherData?.dt || "Date")}</p>
            <p className='font-bold mt-2 text-4xl'>{weatherData?.main?.temp || "temp"}</p>
            <p className='text-xs'>{(weatherData?.weather && weatherData?.weather[0]) ? weatherData?.weather[0]?.description : "weather description"}</p>
            <div className='flex items-center justify-around mt-4'>
                <div>
                    <p className='font-bold'>{weatherData?.wind?.speed || "00"}</p>
                    <p className='text-sm font-semibold'>Wind Speed</p>
                </div>
                <div>
                    <p className='font-bold'>{weatherData?.main?.humidity || "00"}%</p>
                    <p className='text-sm font-semibold'>Humidity</p>
                </div>
            </div>
        </div>
    )
}




function WeatherCardSkeleton() {
    return (
        <div className='w-[500px] mx-auto bg-violet-900 px-4 py-6 rounded mt-4 shadow my-4'>
            <p className='w-2/12 h-[35px] bg-slate-200 rounded mx-auto animate-pulse'></p>
            <p className='mt-4 w-2/5 h-[20px] bg-slate-200 rounded mx-auto animate-pulse'></p>
            <p className='mt-4 w-3/4 h-[15px] bg-slate-200 rounded mx-auto animate-pulse'></p>
            <p className='mt-4 w-2/5 h-[30px] bg-slate-200 rounded mx-auto animate-pulse'></p>
            <p className='mt-4 w-2/12 h-[15px] bg-slate-200 rounded mx-auto animate-pulse'></p>
            <div className='grid grid-cols-2 space-x-4 mt-4'>
                <div>
                    <p className='w-2/6 mt-2 h-[15px] bg-slate-200 rounded mx-auto animate-pulse'></p>
                    <p className='w-1/2 mt-2 h-[15px] bg-slate-200 rounded mx-auto animate-pulse'></p>

                </div>
                <div>
                    <p className='w-2/6 mt-2 h-[15px] bg-slate-200 rounded mx-auto animate-pulse'></p>
                    <p className='w-1/2 mt-2 h-[15px] bg-slate-200 rounded mx-auto animate-pulse'></p>
                </div>
            </div>


        </div>
    )
}



function SearchInput({ search, setSearch, handleSearch, isLoading }) {
    return (
        <div className='flex justify-center space-x-3'>
            <input
                className='px-3 py-1.5 border-2 rounded bg-slate-50'
                type="search"
                name="city-name"
                placeholder='City Name...'
                value={search}
                onChange={(e) => setSearch(e.target.value.trimStart())}
                disabled={isLoading}
            />
            <button
                type='button'
                className='px-3 py-1.5 bg-blue-500 text-white rounded shadow-lg transition hover:opacity-80 hover:shadow-none disabled:hover:opacity-100 disabled:shadow-none'
                onClick={handleSearch}
                disabled={isLoading}
            >Search</button>
        </div>
    )
}




// prefers-reduced-motion: no-preference