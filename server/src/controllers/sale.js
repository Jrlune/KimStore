function SaleTemplate () {}

SaleTemplate.prototype.getTotalSale = function(totalSale, discount) {
  return totalSale - this._discount(totalSale, discount);
};

SaleTemplate.prototype._discount = function () {
  throw new Error('discount must be implemented');
};

module.exports = SaleTemplate;
