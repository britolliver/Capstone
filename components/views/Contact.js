import html from "html-literal";

export default () => html`
  <div>
    <form action="" id="myForm">
      <h4>GET IN TOUCH</h4>
      <h2>Contact Form</h2>
      <input id="name" type="text" name="name" placeholder="Full name*" />

      <input id="email" type="email" name="email" placeholder="Email*" />

      <input
        id="number"
        type="number"
        name="number"
        placeholder="Phone Number*"
      />

      <textarea
        name="message"
        placeholder="Type your message here*"
        minlength="10"
        maxlength="200"
      ></textarea>

      <input id="submit" type="submit" value="Submit" />
    </form>
  </div>
`;
