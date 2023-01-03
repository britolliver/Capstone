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

      <input id="submit" type="submit" value="See Results" />
    </form>
    <section>
      <div class="myOverlay beach" onclick="openNav()">
        <h4>Saint Louis, MO</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <img src="${planeInTrees}" />
        <h2>Saint Louis</h2>
        <p>
          Saint Louis is major city in Missouri known for iconic Gateway Arch.
          It's a good place to visit with lots of different things to do for the
          solo traveler that is on a budget. While it definitely has a vibrant
          city life, it also has beautiful parks and different attractions
          around it that you can do for free or for a small fee. Keep reading
          for different activities and ideas for traveling here on a budget.
        </p>
        <h4>Lodging Ideas</h4>
        <p>
          Most of cost for a solo traveler will probably go towards lodging.
          <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is a good
          place to start looking.
        </p>
        <ul>
          <li>Six Flags: Tickets from $25</li>
          <li>
            Night on the Town
            <ul>
              <li>
                <a href="https://www.westportstl.com/" target="_blank"
                  >WestPort Plaza:</a> Entertainment and Restaurants
              </li>
              <li>
                <a href="https://www.armorystl.com/" target="_blank"
                  >The Armory:</a
                >The Biggest Bar in St. Louis
              </li>
              <li>
                <a href="https://www.clubvivastl.com/" target="_blank"
                  >Club Viva:
                </a>Night Club that teaches lessons for Reggae, Latin
                and African dancing
              </li>
              <li>
                Walk around or ride a bird or lime scooter to explore downtown
                Saint Louis.
              </li>
            </ul>
            <li>
                <a href="https://www.stlballparkvillage.com/" target="_blank"
                  >BallPark Village:
                </a>Sports-anchored entertainment district in the heart of downtown St.Louis
              </li>
              <li>
              <a href="https://www.thegrovestl.com/" target="_blank"
                >The Grove:
              </a>Bars, nightclubs, restaurants and shops
            </li>
          </li>
          <li><a href="https://www.stlouisunionstation.com/" target="_blank">Union Station</a>
          <ul>
          <li>Aquarium: $25</li>
          <li>Ferris Wheel: $15</li>
          <li>Mirror Maze: $8</li>
          <li>Rope Course: $15-$20</li>
          <li>Mini Golf: $10</li>
          </ul>
          </li>
          <li>Other Activities: Forest Park, Science Center, Art Museum, History Museum, Botanical Gardens, City Museum($20), <a href="https://cahokiamounds.org/" target-"_blank>Cahokia Mounds</a>
          </li>
        </ul>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      <div class="myOverlay beach" onclick="openNav()">
        <h4>New York</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <img src="${planeWindow}" />
        <h2>New York</h2>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay mountains" onclick="openNav()">
        <h4>Grand Canyon</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay beach" onclick="openNav()">
        <h4>Atlanta,Georgia</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay" onclick="openNav()">
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay" onclick="openNav()">
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay" onclick="openNav()">
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay" onclick="openNav()">
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay" onclick="openNav()">
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay" onclick="openNav()">
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay" onclick="openNav()">
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>

      //Location name
      <div class="myOverlay" onclick="openNav()">
        <h4>Location</h4>
        <img src="${planeWindow}" />
      </div>
      <div id="myOverlay" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;
        </a>
        <p>
          If you are visiting ${state.parks.states} and are interested in
          ${state.parks.activity}, you should visit the
          <a href="/${state.parks.url}">${state.parks.fullName}.</a>
        </p>
      </div>
    </section>
  </div>
`;
