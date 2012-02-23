Ext.define('Heartyoh.controller.ApplicationController', {
	extend : 'Ext.app.Controller',

	stores : [ 'CompanyStore', 'UserStore', 'CodeGroupStore', 'CodeStore', 'VehicleStore', 'TimeZoneStore', 'FileStore' ],
	models : [ 'Code', 'File' ],
	views : [ 'viewport.Center', 'viewport.North', 'viewport.West', 'viewport.East', 'Brand', 'MainMenu', 'SideMenu',
			'management.Company', 'management.User', 'management.Code', 'management.Vehicle', 'common.CodeCombo',
			'form.TimeZoneCombo', 'common.ProgressColumn', 'file.FileManager' ],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
	},

	onViewportRendered : function() {
	}
});
