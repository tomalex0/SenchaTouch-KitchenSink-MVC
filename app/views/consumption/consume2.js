EnergyApp.views.ConsumptionView2 =  Ext.extend(Ext.Panel,{
    scroll:'vertical',
    initComponent : function(){
        
        var me = this;
        
        me.dockedItems = {
            xtype : 'toolbar',
            dock : 'top',
            title : me.title || '',
            items:[{
                    itemId:'backButton',
                    text : 'Back',
                    ui : 'back'
            }]
        };
        
        me.html = me.title || '';
        
        EnergyApp.views.ConsumptionView2.superclass.initComponent.apply(this, arguments);;
    }
});
Ext.reg('consumptionview2',EnergyApp.views.ConsumptionView2);