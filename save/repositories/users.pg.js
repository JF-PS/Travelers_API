const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models').Users;
const secret = 'test';
const { Sequelize, Op, QueryTypes } = require("sequelize");


module.exports = class UsersRepository {

    async signIn(object) {

        const { email, password } = object;

        try {
          const currentUser = await this.getByEmail(email);
      
          if (!currentUser) return { message: "User doesn't exist" };
      
          const isPasswordCorrect = await this.checkPassword(password, currentUser.password);

          if (!isPasswordCorrect) return { message: "Invalid credentials" };
      
          const token = await this.createToken(currentUser);
      
          return { result: currentUser, token };
        } 
        catch (err) 
        {
          return { message: "Something went wrong" };
        }
    }

    async signUp(object) {
        const { first_name, last_name, email, password, phone, role } = object;
  
        try {
            const oldUser = await this.getByEmail(email);

            if (oldUser) return { message: "User already exists" };
        
            const hashedPassword = await bcrypt.hash(password, 12);
        
            const result = await this.createUser({ first_name, last_name, email, password: hashedPassword, phone, role });

            const token = await this.createToken(result);
        
            return { result, token };
        } 
        catch (err) 
        {
            return { message: "Something went wrong" };
        }
    }

    async deleteUser(id) {
      try{
        const user = await this.getById(id);
        if (!user) return { message: "User doesn't exist" };
  
        return await new Promise((resolve, reject) => {
          this.getById(id).then((user) => 
          {
            resolve(
                user.destroy()
            );
            console.log("User with id %d deleted", user.id);
          })
          .catch((err) => 
          { 
            reject(err);
          });
        });
      } 
      catch(err)
      {
        return {message: "User not deleted"};
      }
    }    

    async getById(id) {
      return await new Promise((resolve, reject) => {
        User.findOne({ where: {id: id} }).then((user) => 
        {
          resolve(user);
        })
        .catch((err) => 
        {
          reject(err);
        });
      });
    }

    async getByEmail(email) {
        return await new Promise((resolve, reject) => {
            User.findOne({ where: {email: email} }).then((user) => 
            {
              resolve(user);
            })
            .catch((err) => 
            { 
              reject(err);
            });
        });
    }

    async createUser(object) {
        return await new Promise((resolve, reject) => {
            User.create(object).then((user) => 
            {
              resolve(user);
            })
            .catch((err) => 
            { 
              reject(err);
            });
        });
    }

    async checkPassword(password, pass) {
        return bcrypt.compare(password, pass);
    }

    async createToken(user) {
        return jwt.sign({ email: user.email, id: user.id }, secret, { expiresIn: "1h" });
    }

    async updateLocation(id, location) {
      console.log("********* Update Location ********");
      console.log(id);
      console.log(location);
      console.log("***************************");
      const point = { type: 'Point', coordinates: [location.lat, location.lng]};
      return await new Promise((resolve, reject) => {
          this.getById(id).then((user) => 
          {
            resolve(
              user.update({ location: point })
            );
          })
          .catch((err) => 
          { 
            reject(err);
          });
      });
    }

    async getTravelersAround(lat, lng) {                       
      const point = Sequelize.fn(`POINT(${lat} ${lng})`);
      return await new Promise((resolve, reject) => {
        User.findAll({
          attributes: [
            'id', 
            'first_name', 
            'last_name', 
            ['ST_X(location::geometry)', 'lat'], 
            ['ST_Y(location::geometry)', 'lng']
          ], 
          where: {
            [Op.and]: [
              Sequelize.where(
                Sequelize.fn('ST_DWithin',
                Sequelize.col('location'),
                point.fn,
              5000.0), true),

              {
                location: { [Op.ne]: null } 
              }

            ]
          }            
             
        })
        .then((users) => 
        {
          resolve(users);
        })
        .catch((err) => 
        { 
          reject(err);
        });
      });
    }


    async updateUser(id, fieldToUpdate) {
      const user = await this.getById(id);
      if (!user) return { message: "User doesn't exist" };

      return await user.update(fieldToUpdate);
    }
}
