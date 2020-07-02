sap.ui.define([],function() {
	return {
		delivery: function(iWeight, sMeasure) {
			var sResult= "";
			if(sMeasure === "6") {
				iWeight /=1000;
			}
			
			if(iWeight < 0.5) {
				sResult = "Mail Delivery";
			}else if(iWeight < 5) {
				sResult= "Parcel Delivery";
			}else {
				sResult= "Courier Delivery";
			}
			
			return sResult;
		}	
	};
});