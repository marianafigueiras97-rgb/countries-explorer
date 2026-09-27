const getCountryDetail = async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        
        const response = await fetch(
            `https://api.restcountries.com/countries/v5/codes.alpha_2/${code}`,{
                
                headers: {
                    Authorization:"Bearer rc_live_ae4073cca92641959be0ec259869fe66"
                }
            }
        );
        
        const data = await response.json();
        const country = data.data.objects[0];
        renderCountryDetail(country);

    } catch (error) {
        console.error(error);
    }
};


const renderCountryDetail = (country) => {
    const container = document.querySelector("#countryDetail");
    
    container.innerHTML = "";

    const capitals = country.capitals.map(capital => capital.name).join(", ");
    const languages = country.languages.map(language => language.name).join(", ");
    const borders = country.borders.join(", ");
    const timeZones = country.timezones.join(", ");
    const continents = country.continents.join(", ");
    const currencies = country.currencies.map(currency =>currency.name).join(", ");
    const countryData = {
        name: country.names.common,
        officialName: country.names.official,
        flag: country.flag.url_png,
        capitals: capitals,
        population: country.population,
        languages: languages,
        borders: borders,
        currency: currencies,
        area: country.area.kilometers ,
        continents: continents,
        subregion:country.subregion ,
        drivingSide: country.cars.driving_side,
        timeZones: timeZones,
        measurementSystem: country.units.measurement_system,
        temperatureScale: country.units.temperature_scale,
    };
    container.insertAdjacentHTML("beforeend", `
        <article class="countryDetail"> 
            <div class="countryDetailHeader">
                <img class="countryFlag" src="${countryData.flag}" alt="flag of ${countryData.name}" />
                <div>
                    <h1 class="countryName">${countryData.name}</h1>
                    <p class="officialName">${countryData.officialName}</p>
                </div>
            </div>

            <section class="countryDetailSection">
                <h2>General Information</h2>

                <dl>
                    <div>
                        <dt>Capitals</dt>
                        <dd class="capital">${countryData.capitals}</dd>
                    </div>
                    
                    <div>
                        <dt>Population</dt>
                        <dd class="population">${countryData.population}</dd>
                    </div>

                    <div>
                        <dt>Languages</dt>
                        <dd class="languages">${countryData.languages}</dd>
                    </div>

                    <div>
                        <dt>Currency</dt>
                        <dd class="currency">${countryData.currency}</dd>
                    </div>
                </dl>
            </section>

            <section class="countryDetailSection">
                <h2>Geography</h2>

                <dl>
                    <div>
                        <dt>Area</dt>
                        <dd class="area">${countryData.area}</dd>
                    </div>

                    <div>
                        <dt>Borders</dt>
                        <dd class="borders">${countryData.borders}</dd>
                    </div>

                    <div>
                        <dt>Continent</dt>
                        <dd class="continent">${countryData.continents}</dd>
                    </div>

                    <div>
                        <dt>Subregion</dt>
                        <dd class="subregion">${countryData.subregion}</dd>
                    </div>
                </dl>
            </section>

            <section class="countryDetailSection">
                <h2>Additional Information</h2>

                <dl>
                    <div>
                        <dt>Driving Side</dt>
                        <dd class="drivingSide">${countryData.drivingSide}</dd>
                    </div>

                    <div>
                        <dt>Timezone</dt>
                        <dd class="timezone">${countryData.timeZones}</dd>
                    </div>

                    <div>
                        <dt>Measurement System</dt>
                        <dd class="measurementSystem">${countryData.measurementSystem}</dd>
                    </div>

                    <div>
                        <dt>Temperature Scale</dt>
                        <dd class="temperatureScale">${countryData.temperatureScale}</dd>
                    </div>
                </dl>
            </section>
        </article>
        `);
}
getCountryDetail();