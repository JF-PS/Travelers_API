const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Spot_Publication = require('../models').Spots_Publications;
const secret = 'test';
const Sequelize = require('sequelize');

module.exports = class Spots_PublicationsRepository {

    async createSpot(object) {
        const { title, description, adresse, user_id } = object;
  
        try {
            // const oldGeolocalisation = await this.getByAuthorization(authorization);

            // if (oldGeolocalisation) return { message: "Geolocalisation already exists" };
                
            const result = await this.createSpot_Publication({ title, description, adresse, user_id });
            

            return { result };
        } 
        catch (err) 
        {
            return { message: "Something went wrong" };
        }
    }

    // async getByAuthorization(authorization) {
    //     return await new Promise((resolve, reject) => {
    //         Geolocalisation.findOne({ where: {authorization = false} }).then((geolocalisation) => 
    //         {
    //           resolve(geolocalisation);
    //         })
    //         .catch((err) => 
    //         { 
    //           reject(err);
    //         });
    //     });
    // }

    async createSpot_Publication(object) {
        return await new Promise((resolve, reject) => {
            Spot_Publication.create(object).then((spot_publication) => 
            {
              resolve(spot_publication);
            })
            .catch((err) => 
            { 
              reject(err);
            });
        });
    }

    async updateLocation(id, location) {
        const point = { type: 'Point', coordinates: [location.lat, location.lng]};
        return await new Promise((resolve, reject) => {
            this.getOne(id).then((spot_publication) => 
            {
              console.log(spot_publication);
              resolve(
                user.update({ location: point })
              );
            })
            .catch((err) => 
            { 
              console.log(err);
              reject(err);
            });
        });
      }

      async deleteSpot_Publication(id) {
        try{
          console.log(id);
          const spot_publication = await this.getById(id);
          if (!spot_publication) return { message: "Spot publication doesn't exist" };
    
          return await new Promise((resolve, reject) => {
            this.getOne(id).then((spot_publication) => 
            {
              resolve(
                  spot_publication.destroy()
              );
              console.log("Spot publication with id %d deleted", spot_publication.id);
            })
            .catch((err) => 
            { 
              reject(err);
            });
          });
        } 
        catch(err)
        {
          return {message: "Spot publication not deleted"};
        }
      }    

      async getById(id) {
        console.log(id);
        return await new Promise((resolve, reject) => {
          Spot_Publication.findOne({ where: {id: id} }).then((spot_publication) => 
          {
            resolve(spot_publication);
          })
          .catch((err) => 
          {
            reject(err);
          });
        });
      }

      async getOne(id) {
        return await new Promise((resolve, reject) => {
            Spot_Publication.findByPk(id).then((spot_publication) => 
            {
              resolve(spot_publication);
            })
            .catch((err) => 
            { 
              reject(err);
            });
        });
      }

      async updateSpot_Publication(id, fieldToUpdate) {
        const spot_publication = await this.getById(id);
        if (!spot_publication) return { message: "Spot publication doesn't exist" };
  
        return await spot_publication.update(fieldToUpdate);
      }
}
