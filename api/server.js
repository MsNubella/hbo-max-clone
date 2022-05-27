const express = require("express");

const app = express();

app.use(express.json());

// Routes
app.use("/api/movies", require("./routes/movies"));

app.listen(3000, () => {
  console.log("Hbo server is running on port: 3000");
});
