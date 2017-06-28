const Thing = require('@josebarrios/thing');

class Organization extends Thing {

  constructor(model){
    model = model || {};
    super(model);

    this.address = model.address;
    this.aggregateRating = model.aggregateRating
    this.alumni = model.alumni;
    this.areaServed = model.areaServed;
    this.award = model.award;
    this.brand = model.brand;
    this.contactPoint = model.contactPoint;
    this.department = model.department;
    this.dissolutionDate = model.dissolutionDate;
    this.duns = model.duns;
    this.email = model.email;
    this.employee = model.employee;
    this.event = model.event;
    this.faxNumber = model.faxNumber;
    this.founder = model.founder;
    this.foundingDate = model.foundingDate;
    this.foundingLocation = model.foundingLocation;
    this.funder = model.funder;
    this.globalLocationNumber = model.globalLocationNumber;
    this.hasOfferCatalog = model.hasOfferCatalog;
    this.hasPOS = model.hasPOS;
    this.isicV4 = model.isicV4;
    this.legalName = model.legalName;
    this.leiCode = model.leiCode;
    this.location = model.location;
    this.logo = model.logo;
    this.makesOffer = model.makesOffer;
    this.member = model.member;
    this.memberOf = model.memberOf;
    this.naics = model.naics;
    this.numberOfEmployees = model.numberOfEmployees;
    this.owns = model.owns;
    this.parentOrganization = model.parentOrganization;
    this.review = model.review;
    this.seeks = model.seeks;
    this.sponsor = model.sponsor;
    this.subOrganization = model.subOrganization;
    this.taxID = model.taxID;
    this.telephone = model.telephone;
    this.vatID = model.vatID;
  }

  get address(){ return this.computed.address; }
  set address(value){ this.computed.address = value; }

  get aggregateRating(){ return this.computed.aggregateRating; }
  set aggregateRating(value){ this.computed.aggregateRating = value; }


  get alumni(){ return this.computed.alumni; }
  set alumni(value){ this.computed.alumni = value; }

  get areaServed(){ return this.computed.areaServed; }
  set areaServed(value){ this.computed.areaServed = value; }

  get award(){ return this.computed.award; }
  set award(value){ this.computed.award = value; }


  get brand(){ return this.computed.brand; }
  set brand(value){ this.computed.brand = value; }

  get contactPoint(){ return this.computed.contactPoint; }
  set contactPoint(value){ this.computed.contactPoint = value; }

  get department(){ return this.computed.department; }
  set department(value){ this.computed.department = value; }

  get dissolutionDate(){ return this.computed.dissolutionDate; }
  set dissolutionDate(value){ this.computed.dissolutionDate = value; }

  get duns(){ return this.computed.duns; }
  set duns(value){ this.computed.duns = value; }

  get email(){ return this.computed.email; }
  set email(value){ this.computed.email = value; }

  get employee(){ return this.computed.employee; }
  set employee(value){ this.computed.employee = value; }

  get event(){ return this.computed.event; }
  set event(value){ this.computed.event = value; }

  get faxNumber(){ return this.computed.faxNumber; }
  set faxNumber(value){ this.computed.faxNumber = value; }

  get founder(){ return this.computed.founder; }
  set founder(value){ this.computed.founder = value; }

  get foundingDate(){ return this.computed.foundingDate; }
  set foundingDate(value){ this.computed.foundingDate = value; }

  get foundingLocation(){ return this.computed.foundingLocation; }
  set foundingLocation(value){ this.computed.foundingLocation = value; }

  get funder(){ return this.computed.funder; }
  set funder(value){ this.computed.funder = value; }

  get globalLocationNumber(){ return this.computed.globalLocationNumber; }
  set globalLocationNumber(value){ this.computed.globalLocationNumber = value; }

  get hasOfferCatalog(){ return this.computed.hasOfferCatalog; }
  set hasOfferCatalog(value){ this.computed.hasOfferCatalog = value; }

  get hasPOS(){ return this.computed.hasPOS; }
  set hasPOS(value){ this.computed.hasPOS = value; }

  get isicV4(){ return this.computed.isicV4; }
  set isicV4(value){ this.computed.isicV4 = value; }

  get legalName(){ return this.computed.legalName; }
  set legalName(value){ this.computed.legalName = value; }

  get leiCode(){ return this.computed.leiCode; }
  set leiCode(value){ this.computed.leiCode = value; }

  get location(){ return this.computed.location; }
  set location(value){ this.computed.location = value; }

  get logo(){ return this.computed.logo; }
  set logo(value){ this.computed.logo = value; }

  get makesOffer(){ return this.computed.makesOffer; }
  set makesOffer(value){ this.computed.makesOffer = value; }

  get member(){ return this.computed.member; }
  set member(value){ this.computed.member = value; }

  get memberOf(){ return this.computed.memberOf; }
  set memberOf(value){ this.computed.memberOf = value; }

  get naics(){ return this.computed.naics; }
  set naics(value){ this.computed.naics = value; }

  get numberOfEmployees(){ return this.computed.numberOfEmployees; }
  set numberOfEmployees(value){ this.computed.numberOfEmployees = value; }

  get owns(){ return this.computed.owns; }
  set owns(value){ this.computed.owns = value; }

  get parentOrganization(){ return this.computed.parentOrganization; }
  set parentOrganization(value){ this.computed.parentOrganization = value; }

  get review(){ return this.computed.review; }
  set review(value){ this.computed.review = value; }

  get seeks(){ return this.computed.seeks; }
  set seeks(value){ this.computed.seeks = value; }

  get sponsor(){ return this.computed.sponsor; }
  set sponsor(value){ this.computed.sponsor = value; }

  get subOrganization(){ return this.computed.subOrganization; }
  set subOrganization(value){ this.computed.subOrganization = value; }

  get taxID(){ return this.computed.taxID; }
  set taxID(value){ this.computed.taxID = value; }

  get telephone(){ return this.computed.telephone; }
  set telephone(value){ this.computed.telephone = value; }

  get vatID(){ return this.computed.vatID; }
  set vatID(value){ this.computed.vatID = value; }

}

module.exports = Organization;
