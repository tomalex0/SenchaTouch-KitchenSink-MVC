Ext.regController("Production",{
    index : function(){
        this.productionPanel = this.render({
            xtype : 'productionview'
        });
        
        this.productionPanel.on('deactivate',function(cmp){
            cmp.destroy();
        });
        
        this.application.views.viewport.setActiveItem(this.productionPanel,options.anim || '');
    }
});