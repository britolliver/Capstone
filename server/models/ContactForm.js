const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z ]{1,64}$/
  },
  number: {
    type: Number,
    required: true,
    validate: /^[0-9]*$/
  },
  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

module.exports = ContactForm;
