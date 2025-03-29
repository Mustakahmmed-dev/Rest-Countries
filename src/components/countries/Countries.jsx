import { use } from "react";
import Country from "../country/Country";

export default function Countries({countriesPromise}){
    const countries = use(countriesPromise);
    // console.log(countries);
 
    return(
        <div className="card-container">
            {
                countries.map(country => <Country key={country.ccn3} country={country}></Country>)
                
            }
        </div>
    )
}