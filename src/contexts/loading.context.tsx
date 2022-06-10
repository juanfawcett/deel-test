import { createContext, useState } from "react";


const LoadingProvider = ({children}: {children: any}) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={[isLoading, setIsLoading]}>
            {children}
        </LoadingContext.Provider>
    );
};

export const LoadingContext = createContext<any[]>([]);

export default LoadingProvider; 