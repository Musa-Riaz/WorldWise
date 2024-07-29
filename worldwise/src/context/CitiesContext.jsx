import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider ({children}){

    const [cities, setCitites] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      async function fetchCitites() {
        try {
          const response = await fetch("http://localhost:8000/cities");
          const data = await response.json();
          setCitites(data);
        } catch (err) {
          console.log(err);
        }
        finally{
          setLoading(false);
        }
      }
  
      fetchCitites();
    }, []);

    return (
        <CitiesContext.Provider value={{
            cities,
            loading
        }}>
            {children}
        </CitiesContext.Provider>
    )
}

function useCitites (){
    const value = useContext(CitiesContext);
    if(value === undefined){
        throw new Error("useCitites must be used within a CitiesProvider");
    }

    return value;
}

export {CitiesProvider, useCitites}