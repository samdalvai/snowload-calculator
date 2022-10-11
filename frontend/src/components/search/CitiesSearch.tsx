import {useCities} from "../../functions/hooks/useCities";
import {SearchField} from "./SearchField";
import {CitiesSuggestionList} from "../selection/CitiesSuggestion";
import React, {useContext, useState} from "react";
import {City} from "../../functions/types";
import {searchCity} from "../../functions/search/searchCity";
import {CityCallBack} from "../../functions/callbacks";
import {ErrorInput} from "../input/ErrorInput";
import {AddCityModal} from "../modal/AddCityModal";
import {DisabledInput} from "../input/DisabledInput";
import {LanguageContext} from "../language/LanguageContext";

export const CitiesSearch = ({onSelectCity, valid}: { onSelectCity: CityCallBack, valid: boolean }) => {
    const {translation} = useContext(LanguageContext);

    const {cities, loading, error} = useCities();
    const [keyword, setKeyword] = useState<string>('');
    const [filteredCities, setFilteredCities] = useState<City[]>([]);

    const [showNewCityForm, setShowNewCityForm] = useState<boolean>(false)

    const filterCities = (keyword: string) => {
        if (keyword === "") {
            setFilteredCities([])
        } else {
            setFilteredCities(searchCity(keyword, cities, 15));
            setKeyword(keyword);
        }
    }

    return (
        <div>
            <AddCityModal show={showNewCityForm} onHide={() => setShowNewCityForm(false)}/>
            {
                error ? <ErrorInput message={translation.error.cities}/> :
                    loading ?
                        <DisabledInput placeHolder={translation.loading.cities}/> :
                        <div>
                            <SearchField onSearch={filterCities}
                                         placeHolder={translation.inputs.placeholders.roofData.searchCity}
                                         valid={valid}
                                         onAdd={() => setShowNewCityForm(true)}/>
                            <CitiesSuggestionList cities={filteredCities}
                                                  keyword={keyword}
                                                  onSelectCity={onSelectCity}/>
                        </div>
            }
        </div>
    );
}