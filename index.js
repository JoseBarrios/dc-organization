const Thing = require('@josebarrios/thing');

class Organization extends Thing {

  constructor(model){
    model = model || {};
    super(model);

    this.alumni = model.alumni;
    this.address = model.address;
    this.department = model.department;
    this.email = model.email;
    this.employee = model.employee;
    this.faxNumber = model.faxNumber;
    this.legalName = model.legalName;
    this.logo = model.logo;
    this.taxID = model.taxID;
    this.telephone = model.telephone;
    this.vatID = model.vatID;
  }

  get alumni(){ return this.computed.alumni; }
  set alumni(value){
    if(!value) return;
    this.computed.alumni = value;
  }

  get address(){ return this.computed.address; }
  set address(value){
    if(!value) return;
    this.computed.address = value;
  }

  get department(){ return this.computed.department; }
  set department(value){
    if(!value) return;
    this.computed.department = value;
  }

  get email(){ return this.computed.email; }
  set email(value){
    if(!value) return;
    this.computed.email = value;
  }

  get employee(){ return this.computed.employee; }
  set employee(value){
    if(!value) return;
    this.computed.employee = value;
  }

  get faxNumber(){ return this.computed.faxNumber; }
  set faxNumber(value){
    if(!value) return;
    this.computed.faxNumber = value;
  }

  get legalName(){ return this.computed.legalName; }
  set legalName(value){
    if(!value) return;
    this.computed.legalName = value;
  }

  get logo(){ return this.computed.logo; }
  set logo(value){
    if(!value) return;
    this.computed.logo = value;
  }

  get taxID(){ return this.computed.taxID; }
  set taxID(value){
    if(!value) return;
    this.computed.taxID = value;
  }

  get telephone(){ return this.computed.telephone; }
  set telephone(value){
    if(!value) return;
    this.computed.telephone = value;
  }

  get vatID(){ return this.computed.vatID; }
  set vatID(value){
    if(!value) return;
    this.computed.vatID = value;
  }

}

module.exports = Organization;
