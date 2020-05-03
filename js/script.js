const key = {
    headers: {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "ff7ee95059msheae31e3f4f69ebep17642fjsn65d0d944dd5d"
    }
};

async function callCountries() {
    try {
        const response = await fetch("https://restcountries-v1.p.rapidapi.com/all/", key)
        const countries = await response.json();

        displayCountries(countries);

    } catch (error) {
        console.log(error);
    }
}
callCountries();

function displayCountries(countries) {
    console.log(countries);

    const countryContainer = document.querySelector(".details");

    let html = "";

    for (let i = 0; i < countries.length; i++) {

        html += `<div class="countries">
                    <p><b>Country :</b> ${countries[i].name}</p>
                    <p><b>Capital :</b> ${countries[i].capital}</p>
                    <p><b>Population :</b> ${countries[i].population}</p>
                    <a class="btn btn-primary" href="details.html?name=${countries[i].name}">More details</a>
                </div>`;

    }
    countryContainer.innerHTML = html;
}

