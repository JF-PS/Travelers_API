# Node.js, Express.js, Sequelize.js and PostgreSQL RESTful API

This source code is part of [Node.js, Express.js, Sequelize.js and PostgreSQL RESTful API](https://www.djamware.com/post/5b56a6cc80aca707dd4f65a9/nodejs-expressjs-sequelizejs-and-postgresql-restful-api) tutorial.

To run locally:

* Make sure you have install and run PostgreSQL server
* Create database with the name same as in config file
* Run `npm install` or `yarn install`
* Run `sequelize db:migrate`
* Run `nodemon` or `npm start`



###### vehicles ######
sequelize model:create --name vehicles --attributes category_id:integer,under_category_id:integer,brand_id:integer,model_id:integer,fuel_id:integer,horses_vehicles_id:integer,picture_id:integer,price:decimal,kilometer:decimal,date_creation:date,date_circulation:date,user_id:integer

###### model_vehicles ######
sequelize model:create --name Model_Vehicles --attributes name:string

###### horses_vehicles ######
sequelize model:create --name Horses_Vehicles --attributes horses_car_number:integer

###### pictures_vehicles ######
sequelize model:create --name Pictures_Vehicles --attributes source:text,vehicles_id:integer

###### categories_vehicles ######
sequelize model:create --name Categories_Vehicles --attributes name:string

###### under_categories_vehicles ######
sequelize model:create --name Under_Categories_Vehicles --attributes name:string

###### brandes_vehicles ######
sequelize model:create --name Brandes_Vehicles --attributes name:string

###### fuels_vehicles ######
sequelize model:create --name Fuels_Vehicles --attributes name:string

###### roles ######
sequelize model:create --name Roles --attributes name:string

###### users ######
sequelize model:create --name Users --attributes first_name:string,last_name:string,email:string,password:string,phone:string,role:string

###### geolocalisations ######
sequelize model:create --name Geolocalisations --attributes authorization:boolean,start_date:date,end_date:date,user_id:integer

###### localisations ######
sequelize model:create --name Localisations --attributes latitude:text,longitude:text,localisation_id:text

###### journey ######
sequelize model:create --name Journeys --attributes user_id:integer,localisation_id:integer

###### reviews ######
sequelize model:create --name Reviews --attributes user_id:integer,spot_publication_id:integer

###### spots_publications ######
sequelize model:create --name Spots_Publications --attributes title:string,description:text,localisation_id:integer,adresse:text,user_id:integer

###### spots_favorites ######
sequelize model:create --name Spots_Favorites --attributes spot_id:integer,user_id:integer

###### adresse_vehicles ######
sequelize model:create --name Adresse_Vehicles --attributes user_id:integer,adresse:text

###### type_ads
sequelize model:create --name TypeAds --attributes name:string

###### ads ######
sequelize model:create --name Ads --attributes vehicles_id:integer,adresse_id:integer,user_id:integer,title:text,description:text,journey_id:integer

###### ads_and_type ######
sequelize model:create --name Ads_And_Type --attributes days_number:integer,ad_id:integer,type_ad_id:integer

###### ads_favorites ######
sequelize model:create --name Ads_Favorites --attributes ad_id:integer,user_id:integer

###### chats ######
sequelize model:create --name Chats --attributes id:integer

###### messages ######
sequelize model:create --name Messages --attributes content:string,user_id:integer,chat_id:integer


###### -----------------------------------------------------------------------------------------------------------------------------------

###### commande relation ######
sequelize-mig migration:make -n migration

sequelize db:migrate

###### -----------------------------------------------------------------------------------------------------------------------------------
















