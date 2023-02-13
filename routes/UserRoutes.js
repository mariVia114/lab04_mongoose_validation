const express = require("express");
const userModel = require("../model/user.js");
const app = express();

//http://localhost:8081/users
app.post("/users", async (req, res) => {
  console.log(req.body);
  const restaurant = new userModel(req.body);

  try {
    await restaurant.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(restaurant);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = app;
