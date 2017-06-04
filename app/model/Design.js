Ext.define('testFunc.model.Design', {
	extend: 'Ext.data.Model',

	fields: [
		'designId',
		'designTitle',
		'designDescription',
		'designMemento',
		'canvasMemento',
		'designVersion',
		'designParent',
		'designTimestamp',
		'designUserId'
	],
	idProperty: 'designId',

	proxy: {
        type: 'ajax',
        api: {
        	create: 'hehe/create',
    		read: 'hehe/read',
    		update: 'hehe/update',
    		destroy: 'hehe/destroy'
        },
        reader: {
        	type: 'json',
			successProperty: 'success',
			rootProperty: 'design'
        },
        writer: {
        	type: 'json',
        	writeAllFields: true
        }
    }
});