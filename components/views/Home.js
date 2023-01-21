import html from "html-literal";
import soloDriverInsideView from "../../assets/img/soloDriverInsideView.jpg";
import groupLookingAtMap from "../../assets/img/groupLookingAtMap.jpg";
import planeInTrees from "../../assets/img/planeintrees.jpg";

export default state => html`
  <section id="homeSection">
    <div class="logoContainer"></div>

    <div class="firstContainer">
      <div class="soloText">
        <h2>Find your next affordable adventure.</h2>
      </div>
      <div class="soloImg">
        <img class="roundBorder homeImg" src="${soloDriverInsideView}" />
      </div>
    </div>

    <div class="secondContainer">
      <div class="soloText">
        <h2>
          Don't let finances stop you from exploring the world! Check out our
          list of affordable trips.
        </h2>
      </div>
      <div class="soloImg">
        <img class="roundBorder homeImg" src="${groupLookingAtMap}" />
      </div>
    </div>
  </section>
`;
