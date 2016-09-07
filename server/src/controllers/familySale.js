var util = require('util');
var Sale = require('./sale.js');


function FamilySale() {
  FamilySale.super_.call(this);
}

util.inherits(FamilySale, Sale);

FamilySale.prototype._discount = function(totalSale, discount) {
  return totalSale * (discount/100);
};

module.exports = FamilySale;
