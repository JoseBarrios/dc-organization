const Thing = require('dc-thing');
const TYPE = 'Organization'
const EMPTY = '';

class OrganizationDataController extends Thing {

	static get type(){ return TYPE; }

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

	get address(){ return this.model.address; }
	set address(value){ this.model.address = value; }

	get aggregateRating(){ return this.model.aggregateRating; }
	set aggregateRating(value){ this.model.aggregateRating = value; }


	get alumni(){ return this.model.alumni; }
	set alumni(value){ this.model.alumni = value; }

	get areaServed(){ return this.model.areaServed; }
	set areaServed(value){ this.model.areaServed = value; }

	get award(){ return this.model.award; }
	set award(value){ this.model.award = value; }


	get brand(){ return this.model.brand; }
	set brand(value){ this.model.brand = value; }

	get contactPoint(){ return this.model.contactPoint; }
	set contactPoint(value){ this.model.contactPoint = value; }

	get department(){ return this.model.department; }
	set department(value){ this.model.department = value; }

	get dissolutionDate(){ return this.model.dissolutionDate; }
	set dissolutionDate(value){ this.model.dissolutionDate = value; }

	get duns(){ return this.model.duns; }
	set duns(value){ this.model.duns = value; }

	get email(){ return this.model.email; }
	set email(value){ this.model.email = value; }

	get employee(){ return this.model.employee; }
	set employee(value){ this.model.employee = value; }

	get event(){ return this.model.event; }
	set event(value){ this.model.event = value; }

	get faxNumber(){ return this.model.faxNumber; }
	set faxNumber(value){ this.model.faxNumber = value; }

	get founder(){ return this.model.founder; }
	set founder(value){ this.model.founder = value; }

	get foundingDate(){ return this.model.foundingDate; }
	set foundingDate(value){ this.model.foundingDate = value; }

	get foundingLocation(){ return this.model.foundingLocation; }
	set foundingLocation(value){ this.model.foundingLocation = value; }

	get funder(){ return this.model.funder; }
	set funder(value){ this.model.funder = value; }

	get globalLocationNumber(){ return this.model.globalLocationNumber; }
	set globalLocationNumber(value){ this.model.globalLocationNumber = value; }

	get hasOfferCatalog(){ return this.model.hasOfferCatalog; }
	set hasOfferCatalog(value){ this.model.hasOfferCatalog = value; }

	get hasPOS(){ return this.model.hasPOS; }
	set hasPOS(value){ this.model.hasPOS = value; }

	get isicV4(){ return this.model.isicV4; }
	set isicV4(value){ this.model.isicV4 = value; }

	get legalName(){ return this.model.legalName; }
	set legalName(value){ this.model.legalName = value; }

	get leiCode(){ return this.model.leiCode; }
	set leiCode(value){ this.model.leiCode = value; }

	get location(){ return this.model.location; }
	set location(value){ this.model.location = value; }

	get logo(){ return this.model.logo; }
	set logo(value){ this.model.logo = value; }

	get makesOffer(){ return this.model.makesOffer; }
	set makesOffer(value){ this.model.makesOffer = value; }

	get member(){ return this.model.member; }
	set member(value){ this.model.member = value; }

	get memberOf(){ return this.model.memberOf; }
	set memberOf(value){ this.model.memberOf = value; }

	get naics(){ return this.model.naics; }
	set naics(value){ this.model.naics = value; }

	get numberOfEmployees(){ return this.model.numberOfEmployees; }
	set numberOfEmployees(value){ this.model.numberOfEmployees = value; }

	get owns(){ return this.model.owns; }
	set owns(value){ this.model.owns = value; }

	get parentOrganization(){ return this.model.parentOrganization; }
	set parentOrganization(value){ this.model.parentOrganization = value; }

	get review(){ return this.model.review; }
	set review(value){ this.model.review = value; }

	get seeks(){ return this.model.seeks; }
	set seeks(value){ this.model.seeks = value; }

	get sponsor(){ return this.model.sponsor; }
	set sponsor(value){ this.model.sponsor = value; }

	get subOrganization(){ return this.model.subOrganization; }
	set subOrganization(value){ this.model.subOrganization = value; }

	get taxID(){ return this.model.taxID; }
	set taxID(value){ this.model.taxID = value; }

	get telephone(){ return this.model.telephone; }
	set telephone(value){ this.model.telephone = value; }

	get vatID(){ return this.model.vatID; }
	set vatID(value){ this.model.vatID = value; }

}

module.exports = OrganizationDataController;
