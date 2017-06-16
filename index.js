const Thing = require('@josebarrios/thing');

class Organization extends Thing {

  constructor(model){
    model = model || {};
    super(model);

    console.log(this, model)

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

  get alumni(){ return this.model.alumni; }
  set alumni(value){
    if(!value) return;
    this.model.alumni = value;
  }

  get address(){ return this.model.address; }
  set address(value){
    if(!value) return;
    this.model.address = value;
  }

  get department(){ return this.model.department; }
  set department(value){
    if(!value) return;
    this.model.department = value;
  }

  get email(){ return this.model.email; }
  set email(value){
    if(!value) return;
    this.model.email = value;
  }

  get employee(){ return this.model.employee; }
  set employee(value){
    if(!value) return;
    this.model.employee = value;
  }

  get faxNumber(){ return this.model.faxNumber; }
  set faxNumber(value){
    if(!value) return;
    this.model.faxNumber = value;
  }

  get legalName(){ return this.model.legalName; }
  set legalName(value){
    if(!value) return;
    this.model.legalName = value;
  }

  get logo(){ return this.model.logo; }
  set logo(value){
    if(!value) return;
    this.model.logo = value;
  }

  get taxID(){ return this.model.taxID; }
  set taxID(value){
    if(!value) return;
    this.model.taxID = value;
  }

  get telephone(){ return this.model.telephone; }
  set telephone(value){
    if(!value) return;
    this.model.telephone = value;
  }

  get vatID(){ return this.model.vatID; }
  set vatID(value){
    if(!value) return;
    this.model.vatID = value;
  }

}

module.exports = Organization;
