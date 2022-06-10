import { createContext, useCallback, useContext, useState } from "react";
import { LoadingContext } from "./loading.context";


const StarWarsProvider = ({children}: {children: any}) => {
    const [starWarsData, setStarWarsData] = useState<any[]>([]);
    // eslint-disable-next-line
    const [_isLoading, setIsLoading] = useContext(LoadingContext);

    const search = useCallback((searchText: string): Promise<any[]> => {
        return new Promise((resolve, reject) => {
            if(!searchText) {
                resolve([]);
                return;
            }
            setIsLoading(true);
            fetch(`https://swapi.dev/api/people/?search=${searchText}&format=json`)
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false);
                    resolve(data.results)
                })
                .catch(error => reject(error))
        });
    }, [setIsLoading]);

    const searchStarWarsData = useCallback(async (text: string) => {
        const result = await search(text);
        setStarWarsData(result);
    }, [search]);

    return (
        <StarWarsContext.Provider value={[starWarsData, searchStarWarsData]}>
            {children}
        </StarWarsContext.Provider>
    );
};

export const StarWarsContext = createContext<any[]>([]);

export default StarWarsProvider; 