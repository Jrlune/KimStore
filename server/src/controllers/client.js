// var People = require('./people.js');

function People(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

People.prototype.getPeople = function() {
  return this.firstName+ ''+lastName;
};

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

var a = new Client("Richard","Ecos", 5287787, 'Admin');
console.log(People.getPeople);

