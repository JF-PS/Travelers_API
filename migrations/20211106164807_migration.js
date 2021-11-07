const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "Brandes_Vehicles", deps: []
 * createTable() => "Categories_Vehicles", deps: []
 * createTable() => "Chats", deps: []
 * createTable() => "Fuels_Vehicles", deps: []
 * createTable() => "Horses_Vehicles", deps: []
 * createTable() => "Model_Vehicles", deps: []
 * createTable() => "Pictures_Vehicles", deps: []
 * createTable() => "Roles", deps: []
 * createTable() => "TypeAds", deps: []
 * createTable() => "Under_Categories_Vehicles", deps: []
 * createTable() => "Users", deps: []
 * createTable() => "Adresse_Vehicles", deps: [Users]
 * createTable() => "Journeys", deps: [Users]
 * createTable() => "Vehicles", deps: [Categories_Vehicles, Under_Categories_Vehicles, Brandes_Vehicles, Model_Vehicles, Fuels_Vehicles, Horses_Vehicles, Pictures_Vehicles]
 * createTable() => "Ads", deps: [Vehicles, Adresse_Vehicles, Users, Journeys]
 * createTable() => "Geolocalisations", deps: [Users]
 * createTable() => "Ads_And_Types", deps: [Ads, TypeAds]
 * createTable() => "Messages", deps: [Users, Chats]
 * createTable() => "Spots_Publications", deps: [Users]
 * createTable() => "Reviews", deps: [Users, Spots_Publications]
 * createTable() => "Spots_Favorites", deps: [Spots_Publications, Users]
 * createTable() => "Ads_Favorites", deps: [Ads, Users]
 *
 */

const info = {
  revision: 1,
  name: "migration",
  created: "2021-11-06T16:48:07.904Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "Brandes_Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Categories_Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Chats",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Fuels_Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Horses_Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        horses_car_number: {
          type: Sequelize.INTEGER,
          field: "horses_car_number",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Model_Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Pictures_Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        source: { type: Sequelize.TEXT, field: "source" },
        vehicle_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          field: "vehicle_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Roles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "TypeAds",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Under_Categories_Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Users",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        first_name: { type: Sequelize.STRING, field: "first_name" },
        last_name: { type: Sequelize.STRING, field: "last_name" },
        email: { type: Sequelize.STRING, field: "email" },
        password: { type: Sequelize.STRING, field: "password" },
        phone: { type: Sequelize.STRING, field: "phone" },
        role: { type: Sequelize.STRING, field: "role" },
        location: { type: Sequelize.GEOGRAPHY, field: "location" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Adresse_Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        adresse: { type: Sequelize.TEXT, field: "adresse" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Journeys",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        location: { type: Sequelize.GEOGRAPHY, field: "location" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Vehicles",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        category_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Categories_Vehicles", key: "id" },
          allowNull: true,
          field: "category_id",
        },
        under_category_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Under_Categories_Vehicles", key: "id" },
          allowNull: true,
          field: "under_category_id",
        },
        brand_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Brandes_Vehicles", key: "id" },
          allowNull: true,
          field: "brand_id",
        },
        model_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Model_Vehicles", key: "id" },
          allowNull: true,
          field: "model_id",
        },
        fuel_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Fuels_Vehicles", key: "id" },
          allowNull: true,
          field: "fuel_id",
        },
        horses_vehicles_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Horses_Vehicles", key: "id" },
          allowNull: true,
          field: "horses_vehicles_id",
        },
        picture_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Pictures_Vehicles", key: "id" },
          allowNull: true,
          field: "picture_id",
        },
        price: { type: Sequelize.DECIMAL, field: "price" },
        kilometer: { type: Sequelize.DECIMAL, field: "kilometer" },
        date_creation: { type: Sequelize.DATE, field: "date_creation" },
        date_circulation: { type: Sequelize.DATE, field: "date_circulation" },
        user_id: { type: Sequelize.INTEGER, field: "user_id" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Ads",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        vehicle_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Vehicles", key: "id" },
          allowNull: true,
          field: "vehicle_id",
        },
        adresse_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Adresse_Vehicles", key: "id" },
          allowNull: true,
          field: "adresse_id",
        },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        title: { type: Sequelize.TEXT, field: "title" },
        description: { type: Sequelize.TEXT, field: "description" },
        journey_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Journeys", key: "id" },
          allowNull: true,
          field: "journey_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Geolocalisations",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        authorization: { type: Sequelize.BOOLEAN, field: "authorization" },
        start_date: {
          type: Sequelize.DATE,
          field: "start_date",
          allowNull: true,
        },
        end_date: { type: Sequelize.DATE, field: "end_date", allowNull: true },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Ads_And_Types",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        days_number: { type: Sequelize.INTEGER, field: "days_number" },
        ad_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Ads", key: "id" },
          allowNull: true,
          field: "ad_id",
        },
        type_ad_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "TypeAds", key: "id" },
          allowNull: true,
          field: "type_ad_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Messages",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        content: { type: Sequelize.STRING, field: "content" },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        chat_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Chats", key: "id" },
          allowNull: true,
          field: "chat_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Spots_Publications",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        title: { type: Sequelize.STRING, field: "title" },
        description: { type: Sequelize.TEXT, field: "description" },
        location: { type: Sequelize.GEOGRAPHY, field: "location" },
        adresse: { type: Sequelize.TEXT, field: "adresse" },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Reviews",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        spot_publication_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Spots_Publications", key: "id" },
          allowNull: true,
          field: "spot_publication_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Spots_Favorites",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        spot_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Spots_Publications", key: "id" },
          allowNull: true,
          field: "spot_id",
        },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Ads_Favorites",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        ad_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Ads", key: "id" },
          allowNull: true,
          field: "ad_id",
        },
        user_id: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "user_id",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Adresse_Vehicles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Ads", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Ads_And_Types", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Ads_Favorites", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Brandes_Vehicles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Categories_Vehicles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Chats", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Fuels_Vehicles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Geolocalisations", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Horses_Vehicles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Journeys", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Messages", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Model_Vehicles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Pictures_Vehicles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Reviews", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Roles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Spots_Favorites", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Spots_Publications", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["TypeAds", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Under_Categories_Vehicles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Users", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Vehicles", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
