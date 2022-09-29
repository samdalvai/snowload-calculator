import {useApiGet} from "../hooks/useApi";
import {useProvincesGenericEndpoint} from "../hooks/useProvinces";

export const doesProvinceExist = async (shorthand: string): Promise<boolean> => {
    const url = '/provinces/shorthand/' + shorthand

    console.log('Fetching: ' + url)
    const apiResponse = await fetch(url);
    const json = await apiResponse.json();

    console.log(json)

    if (false)
        throw new Error("Error retrieving data from \"/provinces/shorthand/" + shorthand + "\"")

    return false
}