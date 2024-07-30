const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
// const db = require("./models/index")
const { City } = require("./models/index");
const CityRepository = require("./repository/city-repository");

const setUpAndStart = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))
  const repo = new CityRepository();

  app.listen(PORT, async () => {
    try {
      console.log(`server is running on port ${PORT}`);

      await repo.createCity({ name: "Ranchi" });
      console.log(City);
    } catch (error) {
      console.error(error);
    }
  });
};

setUpAndStart();
