import {City} from "./types";

export interface cityWithMatchIndex {
    city: City;
    matchIndex: number;
}


export const searchCity = (keyword: string, cities: City[], suggestionLimit: number) => {
    const results : cityWithMatchIndex[] = cities.filter(city => {
        return getCityString(city).indexOf(keyword.toLowerCase()) > -1;
    }).map(city => {
        return {city: city, matchIndex: getCityString(city).indexOf(keyword.toLowerCase())};
    });

    const sorted: cityWithMatchIndex[] = results.sort(compareMatchIndex);
    console.log(sorted)

    return sorted.filter((element, index) => index < suggestionLimit)
                .map(element => element.city)
}

export const getCityString = (city: City): string => {
    return (city.zip + ' ' + city.name + ' ' + city.province).toLowerCase();
}

export const compareMatchIndex = ( a: cityWithMatchIndex, b: cityWithMatchIndex ): number => {
    if ( a.matchIndex < b.matchIndex ){
        return -1;
    }
    if ( a.matchIndex > b.matchIndex ){
        return 1;
    }
    return 0;
}