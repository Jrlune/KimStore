module.exports = function People(firstName, lastName, identification) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.identification = identification;

  var people = {
    firstName: this.firstName,
    lastName: this.lastName,
    identification: this.identification
  };

  People.prototype.getPeople = function() {
    return people;
  };
};
