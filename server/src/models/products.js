var q = require('q');

var allProducts = [
  {
    _id: '0123',
    productName: 'Gloria'
  },
  {
    _id: '0456',
    productName: 'Bella Holandes'
  },
  {
    _id: '0789',
    productName: 'Anchor'
  }
];

function find (params) {
  if (!params) {

    return q.resolve(allProducts);
  }

  var products = allProducts.filter(function (product) {
    var result = false;
    for (var k in products) {
      if (params[k] && product[k] === params[k]) {
        result = true;
      }
    }

    return result;
  });

  return q.resolve(products);
}

function findOne (id) {
  var product = allProducts.find(function (product) {
    return product._id === id;
  });

  return q.resolve(product);
}

module.exports = {
  find: find,
  findOne: findOne
};
