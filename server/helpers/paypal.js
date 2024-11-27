const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: Process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;

