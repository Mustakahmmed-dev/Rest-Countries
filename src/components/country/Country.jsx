import { useState } from "react";

export default function Country({ country, handleVisitedCountries}) {
    const { name, flags, independent, languages, capital } = country;
    
    const [visit, setVisit] = useState(false);

    const handleVisit = () =>{
        // setVisit(true);
        // if(visit === true){
        //     setVisit(false)
        // }
        // else{
        //     setVisit(true)
        // }
        setVisit(!visit);
        handleVisitedCountries(country);
    }
    return (
        <div className={`card ${visit && "country-visited"}`}>
            <img className="flag-img" src={flags.png} alt={flags.alt} />
            <h2> {name.common} </h2>
            <div className="country-bio">
                <p> Language: {languages && Object.values(languages)[0]} </p>
                <p> Capital: {capital} </p>
                <p> Independent: {independent ? "Independent Country" : "Not independent"}  </p>
            </div>
            <button className={visit ? "btn-visited" : "btn-not-visited"} onClick={handleVisit}> {
                visit ? "Visited" : "Visit"
                } </button>
        </div>
    )
}