const Person = require('@josebarrios/person');

class Organization{

  constructor(model){
    model = model || {};
    this.name = model.name;
    this.address = model.address;
    this.department = model.department;
    this.email = model.email;
    this.faxNumber = model.faxNumber;
    this.legalName = model.legalName;
    this.logo = model.logo;
    this.taxID = model.taxID;
    this.telephone = model.telephone;
    this.vatID = model.vatID;
  }
}

module.exports = Organization;
