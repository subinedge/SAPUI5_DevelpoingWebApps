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

			onInit: function () {
				if (!this.oDialog) {
					this.oDialog = sap.ui.xmlfragment("projectNamespace.projectName.fragments.userInfo", this);
				}
			},

			formatter: formatter,

			onShowMessage: function () {
				MessageToast.show("hey guys, I am Suga !");
			},

			showDialog: function () {
				var viewInp1 = this.getView().byId('inp1').getValue();
				var viewInp2 = this.getView().byId('inp2').getValue();

				sap.ui.getCore().byId('inpFragFirst').setValue(viewInp1);
				sap.ui.getCore().byId('inpFragLast').setValue(viewInp2);
				this.oDialog.open();
			},

			handleClose: function () {
				this.oDialog.close();
			},

			onFilterProducts: function (oEvent) {
				// build filter array
				var aFilter = [];
				var sQuery = oEvent.getParameter("query");
				aFilter.push(new Filter("SupplierID", FilterOperator.Contains, sQuery));

				// filter binding
				var oList = this.getView().byId("invoiceList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
			},

			onItemSelected: function (oEvent) {
				var oSelectedItem = oEvent.getParameter('listItem');
				var oContext = oSelectedItem.getBindingContext();
				var oPath = oContext.getPath();

				var oPanel = this.getView().byId('productHeaderDetails');
				oPanel.bindElement({
					path: oPath
				});
				oPanel.setVisible(true);
			}
		});
	});