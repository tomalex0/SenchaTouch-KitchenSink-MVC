EnergyApp.views.ProductionView = Ext.extend(Ext.TabPanel,{
    tabBar: {
        dock: 'top',
        layout: {
            pack: 'center'
        }
    },
    ui: 'light',
    cardSwitchAnimation: {
        type: 'slide'
    },
    items: [{
        title: 'P Area',
        iconCls: 'area',
        cls: 'chartpanel',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        html : 'Area'
    },{
        title: 'P Line',
        iconCls: 'line',
        cls: 'chartpanel',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        html : 'Line'
    },{
        title: 'P Yearly',
        iconCls: 'line',
        cls: 'chartpanel',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        html : 'Yearly'
    }]
});

Ext.reg('productionview',EnergyApp.views.ProductionView);