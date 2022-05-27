const express = require("express");
const axios = require("axios");
const router = express.Router();

// api/movies/
router.get("/", (req, res) => {
  console.log("movies url", req.url);
  axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=a446c81fbf035bca18fe72886ddd1031&language=en-US&page=1"
    )
    .then((movies) => {
      res.status(200).json(movies.data);
    });
});

module.exports = router;
