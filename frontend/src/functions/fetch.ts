// Custom hook for data fetching
import {useEffect, useState} from "react";
import { City } from "./types";

export const getCityFromUrl = async (url: string): Promise<City> => {
    console.log("Query info: ")
    console.log(url)

    const response = await fetch(url)
    const wordData = await response.json()

    return wordData as City
}

export const defaultCity = () : City => {
    return {
        zip: "",
        name: "",
        province: "",
        altitude: -1
    }
}

export const undefinedCity = (): City => {
    return {
        zip: "undefined",
        name: "undefined",
        province: "undefined",
        altitude: -1
    }
}

export const useCitiesApi = (endpoint: string) => {
    const [cityData, setCityData] = useState<City>(defaultCity());
    const [url, setUrl] = useState<string>(endpoint);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        let subscribed = true;

        const fetchData = async () => {
            console.log("Fetching data...")
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await getCityFromUrl(url);
                if (result === undefined)
                    setCityData(undefinedCity())
                else
                    setCityData(result)
            } catch (error) {
                console.log("Error loading data...")
                setIsError(true);
                setCityData(undefinedCity())
            }

            setIsLoading(false);
        };

        if (subscribed) {
            fetchData();
        }

        return () => {
            // Cleanup function to remove subscription
            subscribed = false
        }

    }, [url]);

    return { cityData, url, setUrl, isLoading, isError }
}