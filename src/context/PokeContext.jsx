import { createContext } from "react";

export const PokeContext = createContext();


export const PokeProvaider=({children})=>{

    return(
        <PokeContext.Provider value=""> 
            {children}
        </PokeContext.Provider>
    )
}