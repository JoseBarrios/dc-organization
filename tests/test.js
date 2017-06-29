'use strict'

var assert = require('assert');
var Organization = require('../index.js');

var model = {};
model.name = 'Cognilab';
model.legalName = 'Cognilab Technologies Incorporated';
model.email = 'hello@bevisible.soy';
let organization = new Organization(model);

const key = {};
key.name = 'Cognilab';
key.employeeFullName = 'Jose Barrios';

describe('Organization.type', function() {
	it('should return the type of the Organization', function() {
		assert.equal(Organization.type, 'Organization');
	});
});
describe('organization.type', function() {
	it('should return the type of the organization', function() {
		assert.equal(organization.type, 'Organization');
	});
});


describe('organization.name', function() {
	it('should return the name of the organization', function() {
		assert.equal(organization.name, key.name);
	});
});



/*describe('Organization.keys', function() {*/
	//it('should return the keys for Organization class', function() {
    //console.log(Organization.keys(organization))
		//assert.equal(Organization.keys(organization), '');
	//});
/*});*/
