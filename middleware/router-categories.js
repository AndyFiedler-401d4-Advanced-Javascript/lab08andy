'use strict';

const router = express.Router();

router.get('/categories', (req, res, next) => {
    categoriesRepository
      .get()
      .then(category => {
        res.send(category);
      })
      .catch(next);
  });
  
  router.get('/categories/:id', (req, res, next) => {
    categoriesRepository
      .get(req.params.id)
      .then( => {
        if (!category) {
          res.status(404)
            .send({
              error: 'Category not found'
            });
          return;
        }
        res.send(category)
      })
      .catch(next);
  });
  
  router.post('/categories', (req, res, next) => {
    categoryRepository
      .post(req.body)
      .then(newCategory => {
        res.status(201)
          .send(newCategory);
      })
      .catch(err => {
        next(err);
      })
  });
  
  module.exports = router;