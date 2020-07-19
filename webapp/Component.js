sap.ui.define([
	"sap/ui/core/UIComponent"
	// "sap/ui/Device",
	// "projectNamespace/projectName/model/models"
], function (UIComponent) {

	return UIComponent.extend("projectNamespace.projectName.Component", {
// In the metadata section of the component, you define a reference to the descriptor file. 
// When the component is instantiated, the descriptor is loaded and parsed automatically.
		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			this.getModel().setUseBatch(false);

			// enable routing
			// this.getRouter().initialize();

			// set the device model
			// this.setModel(models.createDeviceModel(), "device");
		}
	});
});