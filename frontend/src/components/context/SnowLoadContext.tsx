import {createContext} from "react";

export const SnowLoadContext = createContext<ISnowLoadContext>({
    citiesSelectionActive: false
});

export interface ISnowLoadContext {
    citiesSelectionActive?: boolean,
    setCitiesSelectionActive?: (arg: boolean) => void
}