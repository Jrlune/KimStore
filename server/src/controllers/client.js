// var People = require('./people.js');

function People (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

var client = {
  firstName: this.firstName,
  lastName: this.lastName,
  identification: this.identification,
  category: this.category
}

People.prototype.getPeople = function () {
  return this.firstName + '' + this.lastName
}

function Client (firstName, lastName, identification, category) {
  People.call(this, firstName, lastName)
  this.identification = identification
  this.category = category
}

Client.prototype = new People()

Client.prototype.getClient = function () {
  return client
}

// var aclient = new Client('Richard', 'Ecos', 5287787, 'Admin')
console.log(People.getPeople)
