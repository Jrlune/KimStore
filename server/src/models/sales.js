var q = require('q');

var allSales = [
  {
    _id: '1',
    _date: '30/12/2016',
    _customerName: 'Juan',
    _products: [
      {
        name: 'leche',
        price: 7.00
      },
      {
        name: 'gelatina',
        price: 5.00
      },
      {
        name: 'fideo',
        price: '5.50'
      }
    ],
    _total: 17.50
  },
  {
    _id: '2',
    _date: '30/12/2016',
    _customerName: 'Juan',
    _product:[
      {
        name: 'manjar',
        price: 13.50
      },
      {
        name: 'te',
        price: 22.00
      },
      {
        name: 'soya',
        price: '3.50'
      }
    ],
    _total: 39.00
  }
];

function findByCustomerName (customerName) {
  var result = [];
  allSales.filter(function (sale) {
    if (sale._customerName === customerName) {
      result.push(sale);
      return true;
    } else {
      return false;
    }
  });

  return q.resolve(result);
}

function findByDate (date) {
  var result = [];
  allSales.filter(function (sale) {
    if (sale._date === date) {
      result.push(sale);
      return true;
    } else {
      return false;
    }
  });

  return q.resolve(result);
}

function findById (id) {
  var result = [];
  allSales.filter(function (sale) {
    if (sale._id === id) {
      result.push(sale);
      return true;
    } else {
      return false;
    }
  });

  return q.resolve(result);
}

module.exports = {
  findByCustomerName: findByCustomerName,
  findByDate: findByDate,
  findById: findById
};
