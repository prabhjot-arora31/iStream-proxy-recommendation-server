const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 9001;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API is working fine....");
});
app.get("/similar/:query/:type", async (req, res) => {
  if (req.body.secret == "nb&%*4#GtyuiEWQA09%@!") {
    if (req.params.query && req.params.query.trim().length > 0) {
      try {
        if (req.params.type.trim() == "movie") {
          const { data } = await axios.get(
            `https://tastedive.com/api/similar?q=${req.params.query.trim()}&type=movie&limit=20&k=1040827-iStreamW-E8459B8B`
          );
          return res.send(data);
        } else {
          const { data } = await axios.get(
            `https://tastedive.com/api/similar?q=${req.params.query.trim()}&type=show&limit=20&k=1040827-iStreamW-E8459B8B`
          );
          return res.send(data);
        }
      } catch (err) {
        console.log("Error occured", err);
        return res.send(JSON.stringify(err.message));
      }
    }
    return res.send("hey");
  }

  res.send(
    "Server is up and running , but the secret either doesn't exist or doesn't match!"
  );
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
