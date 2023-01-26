import html from "html-literal";
import newYork from "../../assets/img/newyork.jpg";
import cityViewNY from "../../assets/img/Nnewyorkwater.jpg";
import hollywoodSign from "../../assets/img/hollywoodsign.jpg";
import GrandCanyon from "../../assets/img/grandcanyon.jpg";
import WashingtonDc from "../../assets/img/washingtondc.jpg";
import LincolnMemorial from "../../assets/img/lincolnmemorial.jpg";
import TheArch from "../../assets/img/thearch.jpg";
import DowntownSTL from "../../assets/img/downtownstl.jpg";
import Tulum from "../../assets/img/tulum.jpg";
import TulumBeach from "../../assets/img/tulumbeach.jpg";
import NewOrleans from "../../assets/img/neworleans.jpg";
import FrenchQuarter from "../../assets/img/frenchquarter.jpg";
import Portland from "../../assets/img/portlandcity.jpg";
import MamaDut from "../../assets/img/mamadut.jpg";
import Atlanta from "../../assets/img/atlanta.jpg";
import NightAtlanta from "../../assets/img/nightatlanta.jpg";

export default state => html`

<div class="tripsNavBar">
<button class="filter">Filter</button>
</div>

  <form class="form smallScreenForm" action="">
  <a class="closebtn">&times</a>
  <p class="sideSearchTitle">
    Looking for something specific?
  </p>

<div class="checkboxForm">
<label for="beach" class="checkboxLabel">Beach</label>
<input id="beach" class="checkbox" type="checkbox" name="refine" value="beach" />
</div>

<div class="checkboxForm">
<label for="unique" class="checkboxLabel">Unique</label>
<input id="unique" type="checkbox" name="refine" value="unique" />
</div>

<div class="checkboxForm">
<label for="city" class="checkboxLabel">City Life</label>
<input id="city" type="checkbox" name="refine" value="city" />
</div>

<div class="checkboxForm">
<label for="camping" class="checkboxLabel">Camping</label>
  <input id="camping" type="checkbox" name="refine" value="camping" />
  </div>


  <input class="btn" id="submit" type="submit" value="See Results" />
<button
    onClick="window.location.reload();"
    class="clearbtn"
  >
    Clear
  </button>

</form>

<div class="soloPage main">

<div class="centerText">
<h1 class="tripsTitle">All Trips</h1>
<p class="tripDesc">Browse this curated list of trips for your next budget trip</p>
</div>

<section class="soloTripLayout">
<div class="myOverlay city " onclick="openNav()">

<div class="container">
<img class="tripImage" src="${TheArch}" />
<div class="middle">
<div class="text">Saint Louis, MO</div>
</div>
</div>

</div>

<div id="myOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
    >&times;
  </a>

  <img class="overlayImg" src="${DowntownSTL}" />
<div class="overlayText">
<h2 class="overlayTitle">Saint Louis</h2>
  <p>
    Saint Louis is major city in Missouri known for iconic Gateway Arch.
    It's a good place to visit with lots of different things to do for the
    solo traveler that is on a budget. While it definitely has a vibrant
    city life, it also has beautiful parks and different attractions
    around it that you can do for free or for a small fee. Keep reading
    for different activities and ideas for traveling here on a budget.
  </p>
  <h4 class="subheadings">Lodging Ideas</h4>
  <p>
    Most of cost for a solo traveler will probably go towards lodging.
    <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is a good
    place to start looking.
  </p>
  <h4 class="subheadings">Activities</h4>
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
      </ul>
      <li>
          <a href="https://www.stlballparkvillage.com/" target="_blank"
            >BallPark Village:
          </a>Sports-anchored entertainment district in the heart of downtown St.Louis
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
    <li>Forest Park, Science Center,Botanical Gardens, City Museum($20), etc
    </li>
  </ul>

</div>

</div>

<div class="myOverlay city" onclick="openNY()">

<div class="container">
<img class="tripImage nyImg" src="${cityViewNY}" />
<div class="middle">
<div class="text">New York, NY</div>
</div>
</div>

</div>

<div id="newYorkOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNY()"
    >&times;
  </a>
  <img class="overlayImg" src="${newYork}" />
  <div class="overlayText">
  <h2 class="overlayTitle">New York</h2>
  <p>Comprised of 5 boroughs and home to Times Square, the Empire State Building, the Statue of Liberty and so much is  New York City. We've all heard of it and a lot of hearts desire to visit it. New York is known for it's night life, exquisite buildings, culture and so much more. While it is very expensive to be, I'm sure with a little finesse, a solo traveler on a budget can make it work. Keep reading for more information on things you can do.</p>
  <h4 class="subheadings">Lodging Ideas</h4>
  <p>
    Most of cost for a solo traveler will probably go towards lodging.
    <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is a good
    place to start looking.
  </p>
  <h4 class="subheadings">Activities</h4>
  <ul>
  <li><a href="https://www.siferry.com/" target="_blank">Staten Island Ferry:</a>Free</li>
  <li><a href="https://www.thehighline.org/" target="_blank">The High Line:</a> public park</li>
  <li>Visit Times Square</li>
  <li>Visit a museum on a free museum day</li>
  <li>Visit art galleries</li>
  <li>Walk around Central Park</li>
  <li>Watch a show on Broadway</li>
  </ul>

  <h3 class="subheadings">National Parks</h3>
  <p>
    If you are visiting ${
      state.parks.newYork
    } and are interested in visiting the oldest and largest known excavated burial ground in North America for free and enslaved AFricans, you should visit the
    <a target="_blank" href="${state.parks.newYorkUrl}">${
  state.parks.newYorkFullName
}.</a> Here is a list of activities they have <ul>
${state.parks.newYorkActivities.map(
  activity => `<li>${activity.name}</li>`
)}</ul>
  </p>
  </div>

</div>


<div class="myOverlay beach" onclick="openTulum()">

<div class="container">
<img class="tripImage" src="${Tulum}" />
<div class="middle">
<div class="text">Tulum, Mexico</div>
</div>
</div>

</div>

<div id="tulumOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeTulum()"
    >&times;
  </a>
  <img class="overlayImg" src="${TulumBeach}" />

  <div class="overlayText">
  <h2 class="overlayTitle">Tulum Mexico</h2>
  <p>Tulum is a town on the Caribbean coastline of Mexico's Yucatan Peninsula. It's known for its beaches and well-preserved ruins of an ancient Mayan port city. Lots of people take trips here.It's beautiful, fun and can definitely be done on a budget.</p>
  <h4 class="subheadings">Lodging Ideas</h4>
  <p>
  Most of cost for a solo traveler will probably go towards lodging.
  <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is a good
  place to start looking, but Joy Tulum is a good beach front hotel you can stay at on a budget.
</p>

<h4 class="subheadings">Activities</h4>
<p><a href="https://luxetribes.com/" target="_blank">LuxeTribes</a> is the first place I recommend to look for this trip. It's a planning agency that has pre=planned trips with costs for solo and group travelers.They have a really nice package for a trip to <a href="tps://luxetribes.com/trips/tulum-mexico-low-budget-getaway/" target="_blank">Tulum</a></p>
  <ul>
  <li>Snorkeling</li>
  <li>Go to the beach</li>
  <li>Go on a tour- maybe of those Mayan ruins</li>
  <li>Sailing</li>
  <li>Check out night life</li>
  <li>This is more of a pricey idea but it sounds cool: jungle tour</li>
  </ul>
  </div>

</div>

<div class="myOverlay city" onclick="openNO()">

<div class="container">
<img class="tripImage" src="${NewOrleans}" />
<div class="middle">
<div class="text">New Orleans, LA</div>
</div>
</div>

</div>

<div id="newOrleansOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNO()"
    >&times;
  </a>
  <img class="overlayImg" src="${FrenchQuarter}" />

  <div class="overlayText">
  <h2 class="overlayTitle">New Orleans, LA</h2>
  <p>New Orleans is a Louisiana city near the Gulf of Mexico. It's know for it's nightlife, vibrant music, and especially the cuisine. It definitely has something for everybody.If you go in February, you could catch it's Mardi Gras festivities.</p>
  <h4 class="subheadings">Lodging Ideas</h4>
  <p>
  Most of cost for a solo traveler will probably go towards lodging.
  <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is a good
  place to start looking.
</p>

<ul>
<li><a href="https://noma.org/" target="_blank">New Orleans Museum of Art:</a> $15</li>
<li><a href="https://noma.org/besthoff-sculpture-garden/"> Besthoff Sculpture Garden:</a></li>
<li>New Orleans City Park</li>
<li>Try different restaurants and food native to N.O.: gumbo, beignets, etoufee,and any seafood.</li>
<li>Visit the French Quarter</li>
</ul>
</div>

</div>

<div class="myOverlay city" onclick="openWashDC()">
<div class="container">
<img class="tripImage" src="${WashingtonDc}" />
<div class="middle">
<div class="text">Washington DC</div>
</div>
</div>
</div>
<div id="washDCOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeWashDC()"
    >&times;
  </a>
  <img class="overlayImg" src="${LincolnMemorial}" />
  <div class="overlayText">
  <h2 class="overlayTitle">Washington DC</h2>
  <p>US Capitol. Neoclassical monuments and buildings. Iconic museums. Eclectic Neighborhoods. You won't regret a trip to Washington DC. </p>
  <h4 class="subheadings">Lodging Ideas</h4>
  <p>
  Most of cost for a solo traveler will probably go towards lodging.
  <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is a good
  place to start looking.
</p>
<h4 class="subheadings">Activities</h4>
<ul>
<li>Explore Creek Park</li>
<li>Visit the <a href="https://www.nga.gov/" target="_blank">Natural Gallery of Art</a></li>
<li>Visit Roosevelt Island</li>
<li>Visit <a href="https://www.nps.gov/grfa/index.htm" target="_blank">Great Falls Park: </a>$10</li>
<li>Go ot the <a href="https://thewashingtonharbour.com/" target="_blank">Washing Harbour: </a>$20</li>
</ul>

<h3 class="subheadings">National Parks</h3>
<p>
  If you are visiting ${
    state.parks.washingtonDC
  } and are interested in visiting the historical home of the National Women's Party you should visit the <a target="_blank" href="/${
  state.parks.womenEqualityInDCUrl
}">${state.parks.womenEqualityInDCFullName}.</a>
If you have time you could also visit <a target="_blank" href="/${
  state.parks.africanAmericanMemorialInDCUrl
}">${state.parks.africanAmericanMemorialInDCFullName}</a> or the
<a target="_blank" href="/${state.parks.anacostiaParkInDCUrl}">${
  state.parks.anacostiaParkInDCFullName
}.</a>
</p>
  </div>

</div>

<div class="myOverlay beach city" onclick="openLA()">
<div class="container">
<img class="tripImage" src="${hollywoodSign}" />
<div class="middle">
<div class="text">Los Angeles, CA</div>
</div>
</div>
</div>
<div id="laOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeLA()"
    >&times;
  </a>
  <img class="overlayImg" src="${hollywoodSign}" />

  <div class="overlayText">
  <h2 class="overlayTitle">Los Angeles, CA</h2>
  <p>Los Angeles, or LA, is a well known city in Southern California that is also the center of America's film and television industry.There are countless reasons why people love to visit this place. Hopefully you can find a few in the activities list below. </p>
  <h4 class="subheadings">Lodging Ideas</h4>
  <p>
  Most of cost for a solo traveler will probably go towards lodging.
  <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is a good
  place to start looking.
</p>
<h4 class="subheadings">Activities</h4>
<ul>
<li>Go the beach of course!</li>
<li>Visit some of the unique and well known food trucks.</li>
<li>Visit the Walk of Fame</li>
<li>Visit Santa Monica Pier and Beach any time of day</li>
<li>Visit the Getty Center</li>
<li>Explore Runyon Canyon Park</li>
<li>Walk around Sunset Boulevard or Rodeo Drive</li>
</ul>
  </div>
</div>

<div class="myOverlay camping" onclick="openGrandCanyon()">
<div class="container">
<img class="tripImage" src="${GrandCanyon}" />
<div class="middle">
<div class="text">The Grand Canyon</div>
</div>
</div>
</div>
<div id="grandCanyonOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeGrandCanyon()"
    >&times;
  </a>
  <img class="overlayImg" src="${GrandCanyon}" />

  <div class="overlayText">
  <h2 class="overlayTitle">The Grand Canyon</h2>
  <p>The Grand Canyon National Park is located in Arizona and is absolutely stunning. It's layered with red rock and cannot be crossed by car. You must drive all the way around it. It's 277 river miles long and up to 18 miles wide so you can imagine it might take several trips to explore the whole canyon. </p>

  <h4 class="subheadings">Lodging Ideas</h4>
  <p>I suggest renting a live-in van or just getting a tent to save money! There is definitely lodging there if those routes aren't appealing to you.</p>

  <h4 class="subheadings">Activities</h4>
  <ul>
  <li>Walk the <a href="https://tot.unm.edu/" target="_blank">Trail of Time</a></li>
  <li>Watch the sunset at <a href="https://www.nps.gov/grca/planyourvisit/desert-view-drive.htm" target="_blank">Desert View</a></li>
  <li>Hike the Canyon</li>
  <li>Go on a guided tour</li>
  <li>Bicycle the Grand Canyon</li>
  </ul>
</div>

</div>

<div class="myOverlay city" onclick="openPortland()">
<div class="container portland">
<img class="tripImage portlandImg" src="${Portland}" />
<div class="middle">
<div class="text">Portland, Oregon</div>
</div>
</div>
</div>
<div id="portlandOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closePortland()"
    >&times;
  </a>
  <img class="overlayImg" src="${MamaDut}" />

  <div class="overlayText">
  <h2 class="overlayTitle">Portland, OR</h2>
  <p>You might have heard of Portland from different documentaries whether highlighting it's unique culture, food, or houses.Known as the Rose City, it's the largest city in Oregon and is also know for its parks, bridges, art scenes, bicycle paths, etc. </p>
  <h4 class="subheadings">Lodging Ideas</h4>
  <p>
  Most of cost for a solo traveler will probably go towards lodging.
  <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is a good
  place to start looking.
</p>
<h4 class="subheadings">Activities</h4>
<ul>
<li>Explore Forest Park</li>
<li>Explore Washington Park which includes a zoo, two museums and a Japanese garden</li>
<li>Eat at <a href="https://www.mamadut.com/" target="_blank">Mama Dut</a>-the vegan Vietnamese restaurant that was featured on Netflix's Street Food</li>
<li>Stroll down Mississippi Avenue and find great food</li>
<li>Visit <a href="https://www.powells.com/" target="_blank">Powell's</a>- the world's largest independent bookstore</li>
</ul>
  </div>

</div>


<div class="myOverlay unique" onclick="openAtlanta()">
<div class="container">
<img class="tripImage" src="${Atlanta}" />
<div class="middle">
<div class="text">Atlanta, Georgia</div>
</div>
</div>
</div>
<div id="atlantaOverlay" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onclick="closeAtlanta()"
    >&times;
  </a>
  <img class="overlayImg" src="${NightAtlanta}" />

  <div class="overlayText">
  <h2 class="overlayTitle">Atlanta, GA</h2>
  <p>Not only is Atlanta the most populous city in Georgia with about almost 500 thousand people, it has gotten global recognition as a place for different movies and tv shows.It has many popular attractions and is a good place to visit even if just for a weekend.</p>
  <h4 class="subheadings">Lodging Ideas</h4>
  <p>
  Most of cost for a solo traveler will probably go towards lodging. Atlanta has really cool treehouses.I suggest finding one <a href="https://www.thewanderlustwithin.com/atlanta-treehouse-rentals/" target="_blank">here</a>.
  <a href="https://www.airbnb.com/" target="_blank">AirBNB</a> is another good
  place to start looking.
</p>
<h4 class="subheadings">Activities</h4>
<ul>
<li>Explore the city through the Atlanta Beltline</li>
<li>Visit the Atlanta Botanical Gardens</li>
<li>Get the story behind the CDC's pioneering work at the <a href="https://www.cdc.gov/museum/" target="_blank">David Sencer CDC Museum</a></li>
<li>Watch a show at the Fox Theatre</li>
<li>Visit the Georgia Aquarium</li>
<li>Visit the Museum of Design Atlanta</li>
</ul>
<h3 class="subheadings">National Parks</h3>
<p>
  If you are visiting ${
    state.parks.georgia
  } and are interested in visiting the deadliest ground of the American Civil War, you should visit the
  <a target="_blank" href="/${state.parks.georgiaUrl}">${
  state.parks.georgiaFullName
}.</a> Here is a list of activities they have <ul>
${state.parks.georgiaActivities.map(
  activity => `<li>${activity.name}</li>`
)}</ul>
</div>
</div>
</section>

  </div>
`;
