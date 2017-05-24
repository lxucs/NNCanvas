Ext.define('testFunc.view.design.Design', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.design',

    controller: 'design',

    layout: 'hbox',
    width: '100%',
    //height: '100%',
    title: 'Design (try connecting ports of entities by drag-drop or click-click?)',

    initComponent: function(){
        me = this;
        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                style: {
                    backgroundColor: '#f2f2f2'
                },
                items: [
                    {
                        xtype: 'component',
                        html: 'Design Title'
                    },
                    {
                        xtype: 'tbfill'
                    },
                    {
                        xtype: 'splitbutton',
                        text: 'Save',
                        handler: 'onSaveClick',
                        menu: new Ext.menu.Menu({
                            items: [
                                // these will render as dropdown menu items when the arrow is clicked:
                                {text: 'Menu Item 1', handler: function(){ Ext.Msg.alert('alert', "Item 1 was clicked"); }},
                                {text: 'Menu Item 2', handler: function(){ Ext.Msg.alert('alert', "Item 2 was clicked"); }}
                            ]
                        })
                    }
                ]
            }
        ];
    	this.items = [
    		{
    			xtype: 'component',
                padding: '5, 5, 5, 5',
                style: {
                    backgroundColor: '#b0e0e6'
                },
    			height: 170,
                width: 65,
    			loader:{
    				url : 'html/schematicPalettes.html',
                    autoLoad : true,
                    listeners:{
                        scope: me.controller,
                        load: 'onPalettesLoad'
                    }
    			}
    		},
    		{
    			xtype: 'component',
                flex: 1,
                height: $(document).height() - 100,
                //height: '600px',
    			autoScroll: true,
    			html: '<div id="gfx_holder" class="ui-droppable" style="width:10000px; height:10000px; background-color:#eff5ff;"></div>'
                    + '<div id="zoomSlider" style="height:150px; position:absolute; top:30px; left:30px; z-index:26000"></div>'
    		},
            {
                xtype: 'component',
                width: 200,
                style: {
                    backgroundColor: '#b0e0e6'
                },
                html: 'Panel'
            }
    	];

    	this.callParent(arguments);
    },

    listeners: {
    	afterrender: 'onAfterRender'
    }

});