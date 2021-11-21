const Geolocalisation = require('../models').Geolocalisations;

module.exports = class GeolocalisationsRepository {
    async allowLoc(object) {
        return new Promise((resolve, reject) => {
          Geolocalisation.findOne({ where: {user_id: object.user_id} }).then((geoSetting) => {
            if(geoSetting) {
                geoSetting.update(object).then((geolocalisation) => {
                    resolve(geolocalisation);
                }) 
            } else {
                Geolocalisation.create(object).then((geolocalisation) => 
                {
                    resolve(geolocalisation);
                })
            }
          })
          .catch((err) => {
            reject(err);
          });
        });
    }
}

