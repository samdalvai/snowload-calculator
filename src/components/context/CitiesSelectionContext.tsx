import {createContext} from "react";

export const CitiesSelectionContext = createContext<ICitiesSelectionContext>({
    citiesSelectionActive: false
});

export interface ICitiesSelectionContext {
    citiesSelectionActive?: boolean,
    setCitiesSelectionActive?: (arg: boolean) => void
}