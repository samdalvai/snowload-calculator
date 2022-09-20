import {City} from "./types";

export const searchCity = (keyword: string, cities: City[]) => {
    return cities.filter(city => (city.zip + ' ' + city.name + ' ' + city.province).toLowerCase()
        .includes(keyword.toLowerCase()))
}