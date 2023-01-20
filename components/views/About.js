import html from "html-literal";
import twoPassports from "../../assets/img/twoPassports.jpg";
import planeWindow from "../../assets/img/planewindow.avif";
import planeInTrees from "../../assets/img/planeintrees.jpg";
import travelMap from "../../assets/img/travelmap.avif";

export default () => html`
  <section>
    <div class="centerText aboutUs">
      <h2 class="tripsTitle aboutUsTitle">About Us</h2>
      <div class="aboutImgs">
        <img class="aboutUsImg" src="${twoPassports}" />
        <img class="aboutUsImg" src="${planeInTrees}" />
        <img class="aboutUsImg" src="${travelMap}" />
      </div>
    </div>
    <div>
      <p class="tripDesc aboutText">
        Traveling On A Budget was created with those in mind who want to see the
        world but don’t think they can afford it. Seeing and visiting parts of
        the world you have or have not been to can expand your mind and make you
        a more well rounded human. Whether you want to take a break from work
        and everyday life to have fun and go on an adventure but don’t think you
        can afford it. Or you want to get away and relax but never thought it
        possible because of your finances. These things and more inspired this
        site.
      </p>
    </div>
  </section>
`;
