import html from "html-literal";

export default () => html`
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

      <label for="adventure">Adventure</label>
      <input id="adventure" type="checkbox" name="refine" value="adventure" />

      <label for="budget">Budget</label>
      <input id="budget" type="checkbox" name="refine" value="budget" />
      <input type="submit" value="See Results" />
    </form>
  </div>
  <div>Each trip "box"</div>
`;
