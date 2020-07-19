// sap.ui.define([], function())...this is the syntax...it follows AMD(asynchronous module definition) where before loading 
// the executable part, the modules (dependencies) has to be defined within array and same has to be passed as arguments in function..like 
// controller passed below.

// module load once finished (this is called asynchronously)....function execution starts..

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"projectNamespace/projectName/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], 

function (Controller, MessageToast, formatter, Filter, FilterOperator) {
	
	return Controller.extend("projectNamespace.projectName.controller.ViewName", {
		
		formatter: formatter,
		
		onShowMessage: function () {
			MessageToast.show("hey guys, I am Suga !");
		},
		
		onFilterProducts: function(oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			aFilter.push(new Filter("SupplierID", FilterOperator.Contains, sQuery));
			
			// filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});