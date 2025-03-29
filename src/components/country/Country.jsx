export default function Country({ country }) {
    // console.log(country)
    const { name, flags, independent, languages, capital } = country;
    // console.log(languages)
    return (
        <div className="card">
            <img className="flag-img" src={flags.png} alt={flags.alt} />
            <h2> {name.common} </h2>
            <div className="country-bio">
                <p> Language: {languages && Object.values(languages)[0]} </p>
                <p> Capital: {capital} </p>
                <p> Independent: {independent ? "Independent Country" : "Not independent"}  </p>
            </div>
        </div>
    )
}