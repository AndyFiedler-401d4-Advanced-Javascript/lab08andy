'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

class Products {

  constructor() {
  }

  get(_id) {
      if(_id) {
          return Product.findOne({_id: _id});
      }
      else {
          return Product.find({})
      }
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
  }

  create(record) {
      let newRecord = new Product(record);
      return newRecord.save();
    // Call the appropriate mongoose method to create a new record
  }

  update(_id, record) {
      return Product.findByIdAndUpdate(_id, changes, {new: true});
    // Call the appropriate mongoose method to update a record
  }

  delete(_id) {
      return Product.record.delete();
    // Call the appropriate mongoose method to delete a record
  }

}

module.exports = Products;