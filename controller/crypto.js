const axios = require("axios");
const { cryptos } = require("../model/crypto.model");

const getApi = (req, res) => {
  axios
    .get("https://crypto-explorer.herokuapp.com/crypto-list/")
    .then((crypto) => res.send(crypto.data));
};

const addFav = (req, res) => {
  const { title, description, image_url, toUSD, email } = req.body;
  const newCrypto = new cryptos({
    title: title,
    description: description,
    image_url: image_url,
    toUSD: toUSD,
    email: email,
  });
  console.log(newCrypto);
  newCrypto.save();
};

const getFav = (req, res) => {
  const { email } = req.query;
  cryptos.find({ email: email }, (error, data) => {
    error ? res.send(error) : res.send(data);
  });
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  cryptos.deleteOne({ _id: id }, (error, data) => {});
  cryptos.find({}, (error, data) => res.send(data));
};

const updateFav = (req, res) => {
  const { id } = req.params;
  const { title, description, image_url, toUSD } = req.body;
  cryptos.findByIdAndUpdate(
    { _id: id },
    {
      title: title,
      description: description,
      image_url: image_url,
      toUSD: toUSD,
    },
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
};

module.exports = { getApi, addFav, getFav, deleteFav, updateFav };
