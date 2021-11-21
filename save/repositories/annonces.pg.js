const Annonce = require('../models').Annonce;
const AnnonceLangage = require('../models').AnnonceLangage;
const AnnonceAndType = require('../models').AnnonceAndType;
const TypeAnnonce = require('../models').TypeAnnonce; 
const TypeAnnonceLangage = require('../models').TypeAnnonceLangage;
const Personne = require('../models').Personne;
const AdresseVehicule = require('../models').AdresseVehicule;
const Vehicule = require('../models').Vehicule;
const ModeleVehicule = require('../models').ModeleVehicule;
const PhotoVehicule = require('../models').PhotoVehicule;
const CvVehicule = require('../models').CvVehicule;
const CategoriesVehicule = require('../models').CategoriesVehicule;
const SousCategoriesVehicule = require('../models').SousCategoriesVehicule;
const MarquesVehicule = require('../models').MarquesVehicule;
const CarburantsVehicule = require('../models').CarburantsVehicule;
const CategoriesVehiculeLangage = require('../models').CategoriesVehiculeLangage; 
const SousCategoriesVehiculeLangage = require('../models').SousCategoriesVehiculeLangage;
const MarquesVehiculeLangage = require('../models').MarquesVehiculeLangage;
const CarburantsVehiculeLangage = require('../models').CarburantsVehiculeLangage;
const VilleVehicule = require('../models').VilleVehicule;
const Pays = require('../models').Pays;
const VilleVehiculeLangage = require('../models').VilleVehiculeLangage;
const PaysLangage = require('../models').PaysLangage;
const Departement = require('../models').Departement;
const DepartementLangage = require('../models').DepartementLangage;
const Region = require('../models').Region;
const RegionLangage = require('../models').RegionLangage;

module.exports = class AnnoncesRepository {

  // TODO: old version, remettre à jours le nom des champs.
    async getAll() {
        return await new Promise((resolve, reject) => {
            Annonce.findAll({
              include: [
                { model: AnnonceLangage, as: 'Adresse_Vehicles'},
                { 
                  model: Vehicles, 
                  as: 'vehicles' ,
                  // include: [
                  //   { 
                  //     model: TypeAnnonce, 
                  //     as: 'type_annonce',
                  //     include: [{ model: TypeAnnonceLangage, as: 'type_annonce_info' }]
                  //   }
                  // ]
                },
            ],
              order: [['createdAt', 'DESC']]
            }).then((annonces) => 
            {
              resolve(annonces);
            })
            .catch((err) => 
            { 
              console.log("========================================================================================================================");
              console.log(err);
              reject(err);
            });
        });
    }

    async getOne(id) {
        return await new Promise((resolve, reject) => {
          Annonce.findByPk(id, {
            include: [
              { model: AnnonceLangage, as: 'annonce_info'},
              { 
                model: AnnonceAndType, 
                as: 'annonce_details' ,
                include: [
                  { 
                    model: TypeAnnonce, 
                    as: 'type_annonce',
                    include: [{ model: TypeAnnonceLangage, as: 'type_annonce_info' }]
                  }
                ]
              },
              { 
                model: Personne, 
                as: 'owner' 
              },
              {
                model: AdresseVehicule,
                as: 'adresse',
                include: [
                  {
                    model: VilleVehicule,
                    as: 'ville',
                    include: [
                      { model: VilleVehiculeLangage, as: 'ville_info' },
                      { 
                        model: Departement, 
                        as: 'departement',
                        include: [
                          { model: DepartementLangage, as: 'departement_info' },
                          { 
                            model: Region, 
                            as: 'region',
                            include: [{ model: RegionLangage, as: 'region_info' }]
                          },
                        ]
                      },
                    ]
                  },
                  {
                    model: Pays,
                    as: 'pays',
                    include: [{ model: PaysLangage, as: 'pays_info' }]
                  }
              ]
              },
              {
                model: Vehicule,
                as: 'vehicule',
                include: [
                  { model: ModeleVehicule, as: 'modele' },
                  { model: CvVehicule, as: 'cv' },
                  { model: PhotoVehicule, as: 'photo' },
                  { 
                    model: CategoriesVehicule, 
                    as: 'categorie',
                    include: [{ model: CategoriesVehiculeLangage, as: 'categorie_info' }]
                  },
                  { 
                    model: SousCategoriesVehicule, 
                    as: 'sous_categorie',
                    include: [{ model: SousCategoriesVehiculeLangage, as: 'sous_categorie_info' }]
                  },
                  { 
                    model: MarquesVehicule, 
                    as: 'marque',
                    include: [{ model: MarquesVehiculeLangage, as: 'marque_info' }]
                  },
                  { 
                    model: CarburantsVehicule, 
                    as: 'carburant',
                    include: [{ model: CarburantsVehiculeLangage, as: 'carburant_info' }]
                  },
                ]
              },
          ]}).then((annonce) => 
          {
            resolve(annonce);
          })
          .catch((err) => 
          { 
            console.log("========================================================================================================================");
            console.log(err);
            reject(err);
          });
      });
    }

    async create(object) {
      return await new Promise((resolve, reject) => {
        Lecturer.create(
          {
            object
            // annonce_info: req.body.truc,
            // annonce_details: req.body.truc,
            // type_annonce: req.body.truc,
            // type_annonce_info: req.body.truc,
            // owner: req.body.truc,
            // adresse: req.body.truc,
            // ville: req.body.truc,
            // ville_info: req.body.truc,
            // departement: req.body.truc,
            // departement_info: req.body.truc,
            // region: req.body.truc,
            // region_info: req.body.truc,
            // pays: req.body.truc,
            // pays_info: req.body.truc,
            // modele: req.body.truc,
            // cv: req.body.truc,
            // photo: req.body.truc,
            // categorie: req.body.truc,
            // categorie_info: req.body.truc,
            // sous_categorie: req.body.truc,
            // sous_categorie_info: req.body.truc,
            // marque: req.body.truc,
            // marque_info: req.body.truc,
            // carburant: req.body.truc,
            // carburant_info: req.body.truc
          }, 
          {
            include: [
              { model: AnnonceLangage, as: 'annonce_info'},
              { 
                model: AnnonceAndType, 
                as: 'annonce_details' ,
                include: [
                  { 
                    model: TypeAnnonce, 
                    as: 'type_annonce',
                    include: [{ model: TypeAnnonceLangage, as: 'type_annonce_info' }]
                  }
                ]
              },
              { 
                model: Personne, 
                as: 'owner' 
              },
              {
                model: AdresseVehicule,
                as: 'adresse',
                include: [
                  {
                    model: VilleVehicule,
                    as: 'ville',
                    include: [
                      { model: VilleVehiculeLangage, as: 'ville_info' },
                      { 
                        model: Departement, 
                        as: 'departement',
                        include: [
                          { model: DepartementLangage, as: 'departement_info' },
                          { 
                            model: Region, 
                            as: 'region',
                            include: [{ model: RegionLangage, as: 'region_info' }]
                          },
                        ]
                      },
                    ]
                  },
                  {
                    model: Pays,
                    as: 'pays',
                    include: [{ model: PaysLangage, as: 'pays_info' }]
                  }
              ]
              },
              {
                model: Vehicule,
                as: 'vehicule',
                include: [
                  { model: ModeleVehicule, as: 'modele' },
                  { model: CvVehicule, as: 'cv' },
                  { model: PhotoVehicule, as: 'photo' },
                  { 
                    model: CategoriesVehicule, 
                    as: 'categorie',
                    include: [{ model: CategoriesVehiculeLangage, as: 'categorie_info' }]
                  },
                  { 
                    model: SousCategoriesVehicule, 
                    as: 'sous_categorie',
                    include: [{ model: SousCategoriesVehiculeLangage, as: 'sous_categorie_info' }]
                  },
                  { 
                    model: MarquesVehicule, 
                    as: 'marque',
                    include: [{ model: MarquesVehiculeLangage, as: 'marque_info' }]
                  },
                  { 
                    model: CarburantsVehicule, 
                    as: 'carburant',
                    include: [{ model: CarburantsVehiculeLangage, as: 'carburant_info' }]
                  },
                ]
              },
          ]})
          .then((post) => 
          {
            resolve(post);
          })
          .catch((err) => 
          { 
            reject(err);
          });
      });
    }

}