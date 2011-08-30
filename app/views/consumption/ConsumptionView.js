EnergyApp.views.ConsumptionView =  Ext.extend(Ext.TabPanel,{
    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    ui: 'light',
    cardSwitchAnimation: {
        type: 'slide'
    },
    items: [{
        title: 'C Area',
        iconCls: 'area',
        cls: 'chartpanel',
        itemId : 'areapanel',
        layout: {
            type: 'card',
            align: 'stretch'
        },
        itemId : 'areachartpanel',
        html : 'Area'
    },{
        title: 'C Line',
        iconCls: 'line',
        cls: 'chartpanel',
        itemId : 'linechartpanel',
        layout: {
            type: 'card',
            align: 'stretch'
        },
        html : 'Line'
    },{
        title: 'C Yearly',
        iconCls: 'line',
        cls: 'chartpanel',
        itemId : 'yearlychartpanel',
        layout: {
            type: 'card',
            align: 'stretch'
        },
        html : 'Yearly'
    }]
});

Ext.reg('consumptionview',EnergyApp.views.ConsumptionView);