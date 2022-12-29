import html from "html-literal";
import planeWindow from "../../assets/img/planewindow.avif";
import planeInTrees from "../../assets/img/planeintrees.jpg";
import travelMap from "../../assets/img/travelmap.avif";

export default state => html`
  <div>
    <form action="">
      <p>
        Looking for something specific?
      </p>

      <label for="beach">Beach</label>
      <input id="beach" type="checkbox" name="refine" value="beach" />

      <label for="mountains">Mountains</label>
      <input id="mountains" type="checkbox" name="refine" value="mountains" />

      <label for="unique">Unique</label>
      <input id="unique" type="checkbox" name="refine" value="unique" />

      <label for="adventure location">Adventure</label>
      <input id="adventure" type="checkbox" name="refine" value="adventure" />

      <label for="budget">Budget</label>
      <input id="budget" type="checkbox" name="refine" value="budget" />

      <label for="location">Location</label>
      <input id="location" type="checkbox" name="refine" value="location" />

      <input type="submit" value="See Results" />
    </form>

    <div class="overlayPractice">
      <a>
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </a>
    </div>
    <div id="overlay">
      <p>Hello</p>
    </div>

    <div>
      <a>
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </a>

      <a>
        <h4>Location</h4>
        <img src="${planeInTrees}" />
      </a>

      <a>
        <h4>Location</h4>
        <img src="${travelMap}" />
      </a>
    </div>
  </div>
`;
