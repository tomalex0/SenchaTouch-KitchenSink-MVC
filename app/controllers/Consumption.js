Ext.regController("Consumption",{
    index : function(options){
        
        this.consumptionPanel = this.render({
            xtype : 'consumptionview'
        });
        
        this.consumptionPanel.on('deactivate',function(cmp){
            console.log("Consumption Deactivated");
            cmp.destroy();
        });
        
        this.areaChartTab   = this.consumptionPanel.query("#areachartpanel")[0];
        this.lineChartTab   = this.consumptionPanel.query("#linechartpanel")[0];
        this.yearlyChartTab = this.consumptionPanel.query("#yearlychartpanel")[0];
        
        this.areaChartTab.on({
            'activate':function(cmp){
                console.log("Consumption Area Chart Activated");
                Ext.dispatch({
		    controller	: 'Consumption',
		    action	: 'areaconsumption1',
		    anim  	: toChild
		});
            },
            'deactivate':function(cmp){
                console.log("Consumption Area Chart Deactivated");
            }
        });
        
        this.lineChartTab.on({
            'activate':function(cmp){
                console.log("Consumption Line Chart Activated");
            },
            'deactivate':function(cmp){
                console.log("Consumption Line Chart Deactivated");
            }
        });
        
        this.yearlyChartTab.on({
            'activate':function(cmp){
                console.log("Consumption Yearly Chart Activated");
            },
            'deactivate':function(cmp){
                console.log("Consumption Yearly Chart Deactivated");
            }
        });
        
        this.application.views.viewport.setActiveItem(this.consumptionPanel,options.anim || '');
    },
    areaconsumption1:function(options){
        
        this.consumption1Panel = this.render({
            xtype : 'consumptionview1',
            title : 'Area Consumption View1'
        });
        
        this.consumption1Panel.on({
            'deactivate':function(cmp){
                console.log("Area Consumption1 Deactivated");
                cmp.destroy();
            },
            'activate':function(cmp){
                console.log("Area Consumption1 Activated");
            }
        });
        
        this.consumption1Panel.query("#nextButton")[0].on({
            'tap':function(){
                Ext.dispatch({
		    controller	: 'Consumption',
		    action	: 'areaconsumption2',
		    anim  	: toChild
		});
            }
        });
        
        //Ext.ControllerManager.get('Consumption').areaChartTab.setActiveItem(this.consumption1Panel,options.anim || ''); can use this also
        this.areaChartTab.setActiveItem(this.consumption1Panel,options.anim || '');
    },
    areaconsumption2:function(options){
         this.consumption2Panel = this.render({
            xtype : 'consumptionview2',
            title : 'Area Consumption View2'
        });
        
        this.consumption2Panel.query("#backButton")[0].on({
            'tap':function(){
                Ext.dispatch({
		    controller	: 'Consumption',
		    action	: 'areaconsumption1',
		    anim  	: toParent
		});
            }
        });
        
        this.consumption2Panel.on({
            'deactivate':function(cmp){
                console.log("Area Consumption2 Deactivated");
                cmp.destroy();
            },
            'activate':function(cmp){
                console.log("Area Consumption2 Activated");
            }
        });
        
        this.areaChartTab.setActiveItem(this.consumption2Panel,options.anim || '');
    }
});