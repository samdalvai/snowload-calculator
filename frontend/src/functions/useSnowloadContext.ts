import {useState} from "react";
import {City} from "./types";

export const useSnowloadContext = () => {
    const [city, setCity] = useState<City | null>(null)
    const [steepness, setSteepness] = useState<string>('')
    const [roofLength, setRoofLength] = useState<string>('')
    const [roofWidth, setRoofWidth] = useState<string>('')

    return { city, setCity, steepness, setSteepness, roofLength, setRoofLength, roofWidth, setRoofWidth }
}