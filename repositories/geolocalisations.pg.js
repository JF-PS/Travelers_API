const Geolocalisation = require('../models').Geolocalisations;

module.exports = class GeolocalisationsRepository {

    async allowLoc(object) {
        const { authorization, start_date, end_date, user_id } = object;
  
        try {
            // const oldGeolocalisation = await this.getByAuthorization(authorization);

            // if (oldGeolocalisation) return { message: "Geolocalisation already exists" };
                
            const result = await this.createGeolocalisation({ authorization, start_date, end_date, user_id });

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

    async createGeolocalisation(object) {
        return await new Promise((resolve, reject) => {
            Geolocalisation.create(object).then((geolocalisation) => 
            {
              resolve(geolocalisation);
            })
            .catch((err) => 
            { 
              reject(err);
            });
        });
    }
}
