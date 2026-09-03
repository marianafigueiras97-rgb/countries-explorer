let countries = [];


const getCountries = async () => {
try{
  const response = await fetch(
    'https://api.restcountries.com/countries/v5?limit=25&pretty=1',
    { headers: { 'Authorization': 'Bearer rc_live_ae4073cca92641959be0ec259869fe66' } }
    
    );

    const data = await response.json();
    countries = data.data.objects;
    renderCountries(countries);
} catch(error){
  console.error(error);
}
};
  
const renderCountries = (countriesToRender) =>{
  const container = document.querySelector("#countriesCardsContainer");

  container.innerHTML ="";

  countriesToRender.forEach(country => {
  const capitals = country.capitals.map(capital =>capital.name).join(", ");
  const languages = country.languages.map(language =>language.name).join(", ");
  const borders = country.borders.join(", ");
  const currencies = country.currencies.map(currency =>currency.name).join(", ");
  const population = country.population.toLocaleString('es-ES');

  const countryData = {
    name: country.names.common,
    flag: country.flag.url_svg,
    capital: capitals,
    population: population,
    languages: languages,
    borders: borders,
    currencies: currencies,
  };
  renderCountryCards(countryData);
});
};

const renderCountryCards = (data) => {
  const container = document.querySelector("#countriesCardsContainer")

  container.insertAdjacentHTML("beforeend",`
    <div class="countryCard">
    <img src="${data.flag}" alt="flag of ${data.name}"/>
    <h3>${data.name}</h3>
      <div class="countryInfo">
      <p>Capitals: ${data.capital}</p>
      <p>Population: ${data.population}</p>
      <p>Languages: ${data.languages}</p>
      <p>Borders: ${data.borders}</p>
      <p>Currencies: ${data.currencies}</p>
      </div>
    </div>
    `);
};

// ORDER BY A-Z
const sortFromAZ = () => {
  const sortedCountries = [...countries].sort((a, b) =>
    a.names.common.localeCompare(b.names.common)
  );

  renderCountries(sortedCountries);
};

const sortAZInput = document
.querySelector("#sortFromAZ");

sortAZInput.addEventListener("click",sortFromAZ);

//ORDER BY POPULATION

const sortByPopulation = () =>{
  const sortedCountries = [...countries].sort((a,b) => b.population - a.population);

  renderCountries(sortedCountries);
  }

const sortByPopulationInput = document
.querySelector("#sortByPopulation");

sortByPopulationInput.addEventListener("click", sortByPopulation);

// SEARCH
const searchInput = document
.querySelector("#searchInput");


searchInput.addEventListener("input", (e) =>{
  const text = e.target.value.toLowerCase();

  const filteredCountries = countries.filter(country =>
    country.names.common.toLowerCase().includes(text)
  );

  renderCountries(filteredCountries);
});

// FILTER BY CONTINENTS

const filter = document.querySelector("#filter");

filter.addEventListener("change", (e)=>{
  const selectedContinent = e.target.value;

  const filteredCountries = countries.filter(country =>
    country.continents.includes(selectedContinent)
  );
  renderCountries(filteredCountries);
});
getCountries();
