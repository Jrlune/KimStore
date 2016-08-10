module.exports = function Employe(firstName, lastName, position) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.position = position;

  var employe = {
    firstName: this.firstName,
    lastName: this.lastName,
    position: this.position
  };

  Employe.prototype.getEmploye = function() {
    return employe;
  };
};
