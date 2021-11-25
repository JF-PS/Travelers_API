const Spot_Publication = require("../models").Spots_Publications;
const { Sequelize, Op } = require("sequelize");

module.exports = class Spots_PublicationsRepository {
  async getSpotsAround(lat, lng, radius) {
    const point = Sequelize.fn(`POINT(${lat} ${lng})`);

    return new Promise((resolve, reject) => {
      Spot_Publication.findAll({
        attributes: [
          "id",
          "title",
          "description",
          "adresse",
          "user_id",
          "createdAt",
          "updatedAt",
          ["ST_X(location::geometry)", "lat"],
          ["ST_Y(location::geometry)", "lng"],
        ],
        where: {
          [Op.and]: [
            Sequelize.where(
              Sequelize.fn(
                "ST_DWithin",
                Sequelize.col("location"),
                point.fn,
                radius
              ),
              true
            ),
            {
              location: { [Op.ne]: null },
            },
          ],
        },
      })
        .then((spots) => {
          resolve(spots);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async createSpot({ title, description, lat, lng, adresse, user_id }) {
    const location = { type: "Point", coordinates: [lat, lng] };
    return new Promise((resolve, reject) => {
      Spot_Publication.create({
        title,
        description,
        location,
        adresse,
        user_id,
      })
        .then((spot_publication) => {
          resolve(spot_publication);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async updateLocation(id, location) {
    const point = { type: "Point", coordinates: [location.lat, location.lng] };
    return await new Promise((resolve, reject) => {
      this.getOne(id)
        .then((spot) => {
          resolve(spot.update({ location: point }));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async deleteSpot_Publication(id) {
    try {
      const spot_publication = await this.getById(id);
      if (!spot_publication)
        return { message: "Spot publication doesn't exist" };

      return await new Promise((resolve, reject) => {
        this.getOne(id)
          .then((spot_publication) => {
            resolve(spot_publication.destroy());
          })
          .catch((err) => {
            reject(err);
          });
      });
    } catch (err) {
      return { message: "Spot publication not deleted" };
    }
  }

  async getById(id) {
    return await new Promise((resolve, reject) => {
      Spot_Publication.findOne({ where: { id: id } })
        .then((spot_publication) => {
          resolve(spot_publication);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async getOne(id) {
    return await new Promise((resolve, reject) => {
      Spot_Publication.findByPk(id)
        .then((spot_publication) => {
          resolve(spot_publication);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async updateSpot_Publication(id, fieldToUpdate) {
    const spot_publication = await this.getById(id);
    if (!spot_publication) return { message: "Spot publication doesn't exist" };

    return await spot_publication.update(fieldToUpdate);
  }
};
