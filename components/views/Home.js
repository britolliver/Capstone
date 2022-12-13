import html from "html-literal";
import globeImage from "../../assets/img/nasa-vhSz50AaFAs-unsplash.jpg";

export default state => html`
  <section>
    <img src="${globeImage}" />
    <div class="homepage-buttons">
      <button type="button">SOLO</button>
      <button type="button">COUPLES</button>
      <button type="button">GROUPS</button>
    </div>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </section>
`;
