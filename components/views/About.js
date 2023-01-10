import html from "html-literal";
import twoPassports from "../../assets/img/twoPassports.jpg";

export default () => html`
  <section>
    <div class="centerText aboutUs">
      <h2 class="tripsTitle aboutUsTitle">About Us</h2>
      <img class="aboutUsImg" src="${twoPassports}" />
      <p class="tripDesc floatText">
        Traveling On A Budget application was built with those in mind who want
        to see the world but don’t think they can afford it. Seeing and visiting
        parts of the world you have or have not been to can expand your mind and
        make you a more well rounded human. Some people want to take a break
        from work and everyday life to have fun and go on an adventure but don’t
        think they can afford. Some need to get away and relax but never thought
        it possible because of their finances. And some just want to spend time
        with loved ones in a different setting but don’t want to break the bank.
        These things and more inspired this capstone.
      </p>
    </div>
  </section>
`;
