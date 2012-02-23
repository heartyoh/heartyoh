Ext.define('Heartyoh.store.FileStore', {
	extend : 'Ext.data.Store',
	
	storeId : 'filestore',
	
	model: 'Heartyoh.model.File',
    
	proxy: {
        type: 'ajax',
        url : '/data/files.json',
        reader: {
            type: 'json'
        }
    },
    
    autoLoad: true
});