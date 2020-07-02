// sap.ui.define([], function())...this is the syntax...it follows AMD(asynchronous module definition) where before loading 
// the executable part, the modules (dependencies) has to be defined within array and same has to be passed as arguments in function..like 
// controller passed below.

// module load once finished (this is called asynchronously)....function execution starts..

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"projectNamespace/projectName/model/formatter"
], 

function (Controller, MessageToast, formatter) {
	
	return Controller.extend("projectNamespace.projectName.controller.ViewName", {
		
		formatter: formatter,
		
		onShowMessage: function () {
			MessageToast.show("hey guys, I am Suga !");
		}
	});
});