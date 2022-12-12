import html from "html-literal";
import globeImage from "../../assets/img/nasa-vhSz50AaFAs-unsplash.jpg";

export default state => html`
  <section>
    <img src="${globeImage}" />
    <ul>
      <li>SOLO</li>
      <li>COUPLES</li>
      <li>GROUPS</li>
    </ul>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </section>
`;
