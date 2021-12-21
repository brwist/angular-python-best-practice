const errs = require('restify-errors');
const Data  = require('../models/data')
const db = require('../index')

const addData = async (req, res, next) => {

    const require_fields = ['name','address','phone_number'];
    const validated = require_fields.every((param) => param in req.params);
    if (!validated) {
      return next(new errs.InvalidArgumentError(`please ensure all required fiels are provided: ${require_fields.join(", ")}`))
    }
  
    const result = await db.Data.create(req.params)
      .then( recipe => recipe )
      .catch( err => {
        console.log(err);
        return err;
      })
    if (result.id) {
      const recipe_id = result.id;
      const new_recipe = await Data.findById(recipe_id)
        .then(res => res)
      res.send(new_recipe);
    } else {
      return next(new errs.InvalidContentError("unable to add new recipe"));
    }
    
}

module.exports = {
    addData
}
