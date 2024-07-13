import { createContext, useState, useEffect } from "react";

export const PokeContext = createContext();

    
export const PokeProvaider=({children})=>{

    const [dataPoke, setDataPoke] = useState([]);
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data=>{
            setDataPoke(data.results)
            
        }
        )
    }, [])

    

    return(
        <PokeContext.Provider value={{dataPoke}}> 
            {children}
        </PokeContext.Provider>
    )
}