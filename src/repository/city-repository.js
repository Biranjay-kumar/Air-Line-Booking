const {City} = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.error(error.message);
      throw new Error("Error creating city");
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await City.destroy({
        where: {
          id: cityId,
        },
      });
      if (result === 0) {
        throw new Error("City not found");
      }
      return { success: true };
    } catch (error) {
      console.error(`Error deleting city: ${error.message}`);
      throw new Error("Error deleting city");
    }
  }
}

module.exports = CityRepository;
