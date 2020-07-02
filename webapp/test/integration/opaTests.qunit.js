/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"projectNamespace/projectName/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});