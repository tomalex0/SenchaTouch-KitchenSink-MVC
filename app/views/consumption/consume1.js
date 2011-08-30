EnergyApp.views.ConsumptionView1 =  Ext.extend(Ext.Panel,{
    scroll:'vertical',
    initComponent : function(){
        
        var me = this;
        
        me.dockedItems = {
            xtype : 'toolbar',
            dock : 'top',
            title : me.title || '',
            items:[{
                xtype : 'spacer'
            },{
                    itemId:'nextButton',
                    text : 'Next',
                    ui : 'forward' 
            }]
        };
        
        me.html = me.title || '';
        
        EnergyApp.views.ConsumptionView1.superclass.initComponent.apply(this, arguments);
    }
});
Ext.reg('consumptionview1',EnergyApp.views.ConsumptionView1);