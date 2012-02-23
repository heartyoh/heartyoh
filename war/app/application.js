Ext.Loader.setConfig({
	enabled : true,
	paths : {
		'Heartyoh' : 'app'
	}
});

Ext.define('Heartyoh', {
	singleton : true,
	mixins : {
		msg : 'Heartyoh.mixin.Msg',
		user : 'Heartyoh.mixin.User',
		mixin : 'Heartyoh.mixin.Mixin',
		ui : 'Heartyoh.mixin.UI',
		state : 'Heartyoh.mixin.State',
		subitem : 'Heartyoh.mixin.SubItem',
		util : 'Heartyoh.mixin.Import'
	}
});

var console = console || {
	log : function() {
	},
	trace : function() {
	}
};

Ext.require('Heartyoh.view.Viewport');

Ext.onReady(function() {
	Ext.application({
		name : 'Heartyoh',
		autoCreateViewport : false,

		controllers : [ 'Heartyoh.controller.ApplicationController', 'Heartyoh.controller.FileController' ],

		launch : function() {
			Ext.create('Heartyoh.view.Viewport').show();
		}
	});
});
