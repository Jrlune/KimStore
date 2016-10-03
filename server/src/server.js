var restify = require('restify');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kimstore');

var Customers = require('./models/customers.js');
var Products = require('./models/products.js');
var Sales = require('./models/sales.js');

var server = restify.createServer();
server.use(restify.bodyParser({ mapParams: false }));
server.use(restify.queryParser());

server.get('/hello', function(req, res, next) {
  return res.send('Odette');
});

server.get('/customers', function (req, res) {
  Customers.find().then(function (customers) {
    return res.send(customers);
  }).catch(function (err) {
    console.log(err);
  });
});

server.get('/customers/:customerId', function (req, res, next) {
  var customerId = req.params.customerId;

  Customers.findOne(customerId).then(function (customer) {
    if (!customer) {
      return next(new restify.NotFoundError('customer not found'));
    }
    res.send(customer);
  }).catch(function (err) {
    console.log(err);
  });
});

server.get('/products', function (req, res) {
  Products.find().then(function (products) {
    return res.send(products);
  }).catch(function (err) {
    console.log(err);
  });
});

server.get('/products/:productId', function (req, res, next) {
  var productId = req.params.productId;

  Products.findOne(productId).then(function (product) {
    if (!product) {
      return next(new restify.NotFoundError('product not found'));
    }
    res.send(product);
  }).catch(function (err) {
    console.log(err);
  });
});

server.get('/sales/:customerName', function (req, res, next) {
  var customerName = req.params.customerName;
  console.log('******', customerName);
  Sales.findByCustomerName(customerName).then(function (sale) {
    if (!sale) {
      return next(new restify.NotFoundError('sale not found'));
    }

    res.send(sale);
  }).
  catch(function (err) {
    console.log(err);
  });
});

server.listen(4040);
