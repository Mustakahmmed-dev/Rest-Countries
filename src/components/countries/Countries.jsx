import { use, useState } from "react";
import Country from "../country/Country";

export default function Countries({countriesPromise}){

    const countries = use(countriesPromise);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) =>{
        
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        
    }
 
    return(
       <div>
        <h1 className='text-title'>Visiting Countries: {countries.length} </h1>
        <h3>Total Travelled Countries: {visitedCountries.length} </h3>
        <div>
            <ul>
               {visitedCountries.map(country => <li key={Math.random()}> { country.name.common } </li>)}
            </ul>
        </div>
         <div className="card-container">
            {
                countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
                
            }
        </div>
       </div>
    )
}