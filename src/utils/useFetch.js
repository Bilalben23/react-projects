import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState(null)


    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                };

                const result = await res.json()
                setData(result)

            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();

    }, [url])

    return { data, error, isLoading }
}