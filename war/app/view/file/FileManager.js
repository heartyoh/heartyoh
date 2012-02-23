Ext.define('Heartyoh.view.file.FileManager', {
	extend : 'Ext.panel.Panel',

	alias : 'widget.filemanager',
	
	title : 'FileManager',

	layout : {
		type : 'vbox',
		align : 'stretch',
		pack : 'start'
	},

	initComponent : function() {
		this.callParent();

		this.add(Ext.create('Heartyoh.view.file.FileViewer', {
			flex : 1
		}));
		this.add(Ext.create('Heartyoh.view.file.FileUploader', {
			flex : 1
		}));
		this.add(Ext.create('Heartyoh.view.file.FileList', {
			flex : 2
		}));
	}
});