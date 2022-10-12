import {City} from "../../functions/types";
import {Callback, CityCallBack} from "../../functions/callbacks";
import {getCityString} from "../../functions/search/searchCity";
import React, {useState} from "react";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";

export const CitiesSuggestionList = ({cities, keyword, onSelectCity}: { cities: City[], keyword: string, onSelectCity: CityCallBack }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(-1)

    React.useEffect(() => {
        setSelectedIndex(-1)
    }, [cities])

    useKeyBoardPress(["ArrowUp"], () => {
        if (selectedIndex > 0)
            setSelectedIndex(selectedIndex - 1)
    })

    useKeyBoardPress(["ArrowDown"], () => {
        if (selectedIndex < cities.length - 1)
            setSelectedIndex(selectedIndex + 1)
    })

    useKeyBoardPress(["Enter"], () => {
        console.log("Enter!! ")
    })

    return (
        <div className="list-group shadow-sm rounded">
            {
                cities.length > 0 ?
                    cities.map((city: City, index) => <CitySuggestion
                        city={city}
                        keyword={keyword}
                        onSelectCity={onSelectCity}
                        key={city.zip+city.name}
                        selected={index === selectedIndex}
                        onMouseEnter={() => setSelectedIndex(-1)}/>) : ""
            }
        </div>
    )
}

export const CitySuggestion = ({city, keyword, selected, onMouseEnter, onSelectCity}:
                                   { city: City, keyword: string, selected: boolean, onMouseEnter: Callback, onSelectCity: CityCallBack }) => {
    const selectedBackground = "#e9ecef"
    const nonSelectedBackGround = "white"

    const [backGround, setBackGround] = useState<string>(selected ? selectedBackground : nonSelectedBackGround)

    React.useEffect(() => {
        if (selected)
            setBackGround(selectedBackground)
        else
            setBackGround(nonSelectedBackGround)

    }, [selected])

    return (
        <button type="button"
                className={"list-group-item list-group-item-action list-group-item-light"}
                style={{backgroundColor: backGround}}
                key={city.zip + city.name}
                onClick={() => onSelectCity(city)}
                onMouseEnter={() => {
                    onMouseEnter()
                    setBackGround(selectedBackground)
                }}
                onMouseLeave={() => setBackGround(nonSelectedBackGround)}
        >
            <CityData city={city} keyword={keyword}/>
        </button>
    )
}

export const CityData = ({city, keyword}: {city: City,keyword: string}) => {
    const suggestionIndex: number = getCityString(city).toLowerCase().indexOf(keyword.toLowerCase());
    const suggestionLength: number = keyword.length;

    return (
        <div>
            {getCityString(city).substring(0,suggestionIndex)}
            <strong>{getCityString(city).substring(suggestionIndex,suggestionIndex + suggestionLength)}</strong>
            {getCityString(city).substring(suggestionLength + suggestionIndex)}
        </div>
    )
}
