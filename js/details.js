const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");

const key = {
    headers: {
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    "x-rapidapi-key": "ff7ee95059msheae31e3f4f69ebep17642fjsn65d0d944dd5d"
    }
};

const url = "https://restcountries-v1.p.rapidapi.com/name/" + name; 

async function getCountryDetails() {
    const countryName = document.querySelector("h1");
    const borders = document.querySelector(".borders");
    const region = document.querySelector(".region");
    

    try {
        const response = await fetch(url, key);
        const det = await response.json();
        
        countryName.innerHTML = det.name;
        borders.innerHTML = det.borders;
        region.innerHTML = det.region;

        console.log(det);
        

    } catch (error) {
        countryName.innerHTML = "An error occured";
        console.log(error);
    } 

}
getCountryDetails();






