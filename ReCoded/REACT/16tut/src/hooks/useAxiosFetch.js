import { useEffect, useState } from "react";
import axios from "axios";
import { fi } from "date-fns/locale";

export default function useAxiosFetch(dataUrl) {
    const controller = new AbortController();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        let isMounted = true;
        async function fetchData(url) {
            setIsLoading(true)
            try {
                const response = await axios.get(url, {
                    signal: controller.signal
                });
                if (isMounted) {
                    setData(response.data)
                    setError(null)
                }

            } catch (error) {
                if (isMounted) {
                    setError(error)
                    setData([])
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 2000)
            }

            return () => {
                isMounted = false;
                controller.abort();
            }
        }
        fetchData(dataUrl)
    }, [dataUrl])
    return { data, isLoading, error }
}