module.exports = (repository) => ({

    async getAll(req, res) {
        await repository.getAll().then((posts) => 
        {
          res.status(200).send(posts)
        })
        .catch((err) => 
        { 
          res.status(500).send(err); 
        });
      },

      async getOne(req, res) {
        await repository.getOne(req.params.id).then((found) => {
          if (found) {
              res.status(200).json(found);
          } 
          else 
          {
              res.status(404).json({message: 'No valid entry found for provided ID'});
          }
        })
        .catch(err => 
        {
           res.status(500).json({error: err});
        });
    },

    // async create(req, res) {
    //   await repository.create({ ...req.body, creator: req.userId, createdAt: new Date().toISOString() }).then((post) =>
    //   { 
    //     res.status(201).send(post)
    //   })
    //   .catch((err) => 
    //   {
    //     res.status(500).send(err)
    //   });
    // },

});