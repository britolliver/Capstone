import html from "html-literal";

export default () => html`
  <div>
    <div class="centerText">
      <h2 class="tripsTitle contactFormTitle">Contact Form</h2>
      <h4 class="tripDesc">GET IN TOUCH</h4>
      <p id="contactFormMessage">
        Thank you for reaching out! We have received your message and will be in
        touch soon!
      </p>
    </div>
    <div class="formContainer">
      <form id="myForm" class="contactForm" method="POST" action="">
        <div class="centerForm">
          <div class="padding">
            <input
              id="name"
              class="box inputHeight"
              type="text"
              name="name"
              placeholder="Full name*"
            />
          </div>

          <div class="padding">
            <input
              id="email"
              class="box inputHeight"
              type="email"
              name="email"
              placeholder="Email*"
            />
          </div>

          <div class="padding">
            <input
              id="number"
              class="box inputHeight"
              type="number"
              name="number"
              placeholder="Phone Number*"
            />
          </div>

          <div class="padding">
            <textarea
              name="message"
              class="box textAreaHeight"
              placeholder="Type your message here*"
              minlength="10"
              maxlength="200"
            ></textarea>
          </div>

          <div class="padding">
            <input
              id="submit"
              class="btn"
              type="submit"
              name="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
`;
