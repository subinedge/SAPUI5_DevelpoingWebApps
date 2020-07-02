/*global QUnit*/

sap.ui.define([
	"projectNamespace/projectName/controller/ViewName.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewName Controller");

	QUnit.test("I should test the ViewName controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});