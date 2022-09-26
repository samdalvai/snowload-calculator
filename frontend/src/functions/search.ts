import {City} from "./types";

export const searchCity = (keyword: string, cities: City[], suggestionLimit: number) => {
    const results : City[] = cities.filter(city => (city.zip + ' ' + city.name + ' ' + city.province).toLowerCase().indexOf(keyword.toLowerCase()) > -1)

    return results.filter((value, index) => index < suggestionLimit)
}
