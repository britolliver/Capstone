import html from "html-literal";
import soloDriverInsideView from "../../assets/img/soloDriverInsideView.jpg";
import groupLookingAtMap from "../../assets/img/groupLookingAtMap.jpg";
import planeInTrees from "../../assets/img/planeintrees.jpg";

export default state => html`
  <section>
    <div class="logoContainer"></div>

    <div class="firstContainer">
      <div class="soloImg">
        <img class="roundBorder" src="${soloDriverInsideView}" />
      </div>
      <div class="soloText">
        <h2>This is a beautiful picture.</h2>
      </div>
    </div>

    <div class="secondContainer">
      <div class="soloText">
        <h2>This is a beautiful picture.</h2>
      </div>
      <div class="soloImg">
        <img class="roundBorder" src="${groupLookingAtMap}" />
      </div>
    </div>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </section>
`;
