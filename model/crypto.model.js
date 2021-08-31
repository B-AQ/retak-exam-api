const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
  title: String,
  description: String,
  image_url: String,
  toUSD: String,
  email: String,
});

const cryptos = mongoose.model("crypto", cryptoSchema);

module.exports = { cryptos };
