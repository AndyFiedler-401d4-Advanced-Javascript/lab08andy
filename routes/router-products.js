'use strict';

const router = express.Router();

router.get('/products', (req, res, next) => {
    peopleRepository
      .get()
      .then(product => {
        res.send(product);
      })
      .catch(next);
  });
  
  router.get('/products/:id', (req, res, next) => {
    productRepository
      .get(req.params.id)
      .then(product => {
        if (!product) {
          res.status(404)
            .send({
              error: 'Product not found'
            });
          return;
        }
  
        res.send(product)
      })
      .catch(next);
  });
  
  router.post('/products', (req, res, next) => {
    productRepository
      .post(req.body)
      .then(newProduct => {
        res.status(201)
          .send(newProduct);
      })
      .catch(err => {
        next(err);
      })
  });
  
  module.exports = router;