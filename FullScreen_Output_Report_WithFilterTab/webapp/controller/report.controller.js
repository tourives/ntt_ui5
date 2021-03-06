sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/Filter',
		'sap/ui/model/Sorter',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Fragment, Controller, Filter, Sorter, JSONModel) {
	"use strict";


	var vController = Controller.extend("fiori.ntt.controller.report", {
		onInit: function () {
			// set explored app's demo model on this sample
			var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
			this.getView().setModel(oModel);
		},
		onReset: function(oEvent) {
			jQuery.sap.require("sap.m.MessageToast");
			// var params = oEvent.getParameters();
			var sMessage = "onReset trigered";
			sap.m.MessageToast.show(sMessage);
		},
		onSearch: function(oEvent) {
			jQuery.sap.require("sap.m.MessageToast");
			// var params = oEvent.getParameters();
			var sMessage = "onSearch trigered";
			sap.m.MessageToast.show(sMessage);
		}		
	});
	return vController;

});