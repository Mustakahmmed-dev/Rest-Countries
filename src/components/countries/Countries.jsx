import { use } from "react";
import Country from "../country/Country";

export default function Countries({countriesPromise}){
    const countries = use(countriesPromise);
    // console.log(countries);
 
    return(
       <div>
        <h1 className='text-title'>Rest Countries: {countries.length} </h1>
         <div className="card-container">
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
                
            }
        </div>
       </div>
    )
}