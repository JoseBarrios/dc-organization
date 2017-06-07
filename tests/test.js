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

describe('organization.name', function() {
	it('should return the name of the organization', function() {
		assert.equal(organization.name, key.name);
	});
});