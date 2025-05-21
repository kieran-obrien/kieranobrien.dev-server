const axios = require("axios");

exports.getBooks = async (req, res, next) => {
  const base = process.env.GOOGLE_API_BASE;
  const userId = process.env.GOOGLE_USER_ID;
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `${base}/users/${userId}/bookshelves/1001/volumes?key=${apiKey}`;
  const { data } = await axios.get(url);
  res.status(200).send({ books: data });
};
