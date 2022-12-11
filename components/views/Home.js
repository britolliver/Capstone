import html from "html-literal";
import globeImage from "../../assets/img/nasa-vhSz50AaFAs-unsplash.jpg";

export default () => html`
  <section>
    <h1>Travel On A Budget</h1>
    <img src="${globeImage}" />
    <ul>
      <li>SOLO</li>
      <li>COUPLES</li>
      <li>GROUPS</li>
    </ul>
  </section>
`;
