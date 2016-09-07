
function Client(firstName, lastName, identification, category) {
  People.call(this, firstName, lastName);
  this.identification = identification;
  this.category = category;

  var client = {
    firstName: this.firstName,
    lastName: this.lastName,
    identification: this.identification,
    category: this.category
  };
}

Client.prototype = new People();

Client.prototype.getClient = function() {
  return client;
};



