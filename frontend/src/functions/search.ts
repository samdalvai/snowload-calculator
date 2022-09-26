import {City} from "./types";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

export const searchCityOld = (keyword: string, cities: City[]) => {
    const results : City[] = cities.filter(city => (city.zip + ' ' + city.name + ' ' + city.province).toLowerCase()
        .includes(keyword.toLowerCase()))

    return results.filter((value, index) => index < 10)
}

export const searchCity = (keyword: string, cities: City[]) => {
    const results : City[] = cities.filter(city => (city.zip + ' ' + city.name + ' ' + city.province).toLowerCase().indexOf(keyword.toLowerCase()) > -1)

    results.forEach(city => console.log('keyword: ' + keyword + ' in \'' + (city.zip + ' ' + city.name + ' ' + city.province) + '\': ' + (city.zip + ' ' + city.name + ' ' + city.province).toLowerCase().indexOf(keyword.toLowerCase())))

    return results.filter((value, index) => index < 10)
}


export const includesString = (keyword: string, word: string): boolean => {
    return word.toLowerCase().includes(keyword.toLowerCase());
}

export const startsWithString = (keyword: string, word: string): boolean => {
    return word.toLowerCase().startsWith(keyword.toLowerCase());
}
