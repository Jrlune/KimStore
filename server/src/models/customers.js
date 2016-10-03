var q = require('q');

var allCustomers = [
  {
    _id: '123',
    name: 'Juan'
  },
  {
    _id: '456',
    name: 'victor'
  },
  {
    _id: '789',
    name: 'Ali'
  }
];

function find (params) {
  if (!params) {
    return q.resolve(allCustomers);
  }

  var customers = allCustomers.filter(function (customer) {
    var result = false;
    for (var k in customer) {
      if (params[k] && customer[k] === params[k]) {
        result = true;
      }
    }
    return result;
  });

  return q.resolve(customers);
}

function findOne (id) {
  var customer = allCustomers.find(function (customer) {
    return customer._id === id;
  });

  return q.resolve(customer);
}

module.exports = {
  find: find,
  findOne: findOne
};
