import { Header, Footer, Main, Nav } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  if (state.view === "Trips") {
    const choices = [];
    const beaches = Array.from(document.getElementsByClassName("beach"));
    const uniqueTrips = Array.from(document.getElementsByClassName("unique"));
    const cities = Array.from(document.getElementsByClassName("city"));
    const campingTrips = Array.from(document.getElementsByClassName("camping"));

    document
      .getElementById("beach")
      .addEventListener("click", e => choices.push(e.target.id));
    document
      .getElementById("city")
      .addEventListener("click", e => choices.push(e.target.id));
    document.getElementById("camping").addEventListener("click", e => {
      choices.push(e.target.id);
    });
    document
      .getElementById("unique")
      .addEventListener("click", e => choices.push(e.target.id));

    document.getElementById("submit").addEventListener("click", event => {
      event.preventDefault();
      // const inputList = event.target.elements;
      // console.log("Input Element List", inputList);
      // console.log(beaches);
      const section = document.querySelector("section");
      section.innerHTML = "";

      console.log(choices);
      choices.forEach(choice => {
        if (choice === "beach") {
          beaches.forEach(beach => section.appendChild(beach));
        }

        if (choice === "city") {
          cities.forEach(city => section.appendChild(city));
        }
        if (choice === "camping") {
          campingTrips.forEach(campingTrip => section.appendChild(campingTrip));
        }
        if (choice === "unique") {
          uniqueTrips.forEach(uniqueTrip => section.appendChild(uniqueTrip));
        }
      });
    });
    // document.getElementById("clearSearch").addEventListener("click", () => {
    //   const section = document.querySelector("section");
    //   section.innerHTML = section;
    // });
  }

  if (state.view === "Contact") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);
      const requestData = {
        name: inputList.name.value,
        email: inputList.email.value,
        number: inputList.number.value,
        message: inputList.message.value
      };
      console.log("request Body", requestData);
      axios
        .post(`${process.env.CONTACT_FORM_API_URL}/ContactForms`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          document.getElementById("myForm").reset();
          document.getElementById("contactFormMessage").style.display = "block";
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;

      case "Trips":
        axios
          .get(
            `https://developer.nps.gov/api/v1/parks?api_key=${process.env.NATIONAL_PARK_API_KEY}`
          )
          .then(response => {
            console.log(response.data.data);
            //newyork
            store.Trips.parks.newYorkFullName = response.data.data[4].fullName;
            store.Trips.parks.newYork = response.data.data[4].states;
            store.Trips.parks.newYorkActivities =
              response.data.data[4].activities;
            store.Trips.parks.newYorkUrl = response.data.data[4].url;
            //washingtondcname
            store.Trips.parks.washingtonDC = response.data.data[32].states;
            //washingDC1
            store.Trips.parks.womenEqualityInDCFullName =
              response.data.data[32].fullName;
            store.Trips.parks.womenEqualityInDCActivities =
              response.data.data[32].activities;
            store.Trips.parks.womenEqualityInDCUrl = response.data.data[32].url;

            //washingtonDC2
            store.Trips.parks.anacostiaParkInDCFullName =
              response.data.data[16].fullName;
            store.Trips.parks.anacostiaParkInDCActivities =
              response.data.data[16].activities;
            store.Trips.parks.anacostiaParkInDCUrl = response.data.data[16].url;

            //washingtonDC3
            store.Trips.parks.africanAmericanMemorialInDCFullName =
              response.data.data[3].fullName;
            store.Trips.parks.africanAmericanMemorialInDCActivities =
              response.data.data[3].activities;
            store.Trips.parks.africanAmericanMemorialInDCUrl =
              response.data.data[3].url;

            //2hrs from atlanta
            store.Trips.parks.georgiaFullName = response.data.data[17].fullName;
            store.Trips.parks.georgia = response.data.data[17].states;
            store.Trips.parks.georgiaActivities =
              response.data.data[17].activities;
            store.Trips.parks.georgiaUrl = response.data.data[17].url;
            done();
          })
          .catch(err => console.log(err));
        break;

      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
