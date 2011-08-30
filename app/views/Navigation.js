EnergyApp.views.Navigation = new Ext.NestedList({
    store: EnergyApp.stores.NavigationStore,
    dock: 'left',
    useTitleAsBackText: false,
    useToolbar: Ext.is.Phone ? false : true,
    title: 'Choose Data',
    displayField: 'label',
    hidden: !Ext.is.Phone && Ext.Viewport.orientation == 'portrait',
    listeners: {
        itemtap: function(subList, subIndex, el, e) {
            var store = subList.getStore(),
                record = store.getAt(subIndex),
                recordNode = record.node,
                parentNode = recordNode ? recordNode.parentNode : null;

            if(Ext.is.Phone){
                // toolbar title change and back button display
                var toolBar = EnergyApp.views.viewport.toolBar;
                toolBar.setTitle(recordNode.attributes.record.data.label);
                toolBar.items.get(0).show();
            }

            if (recordNode.leaf) {
                // query parameters for data loading
                var type = parentNode.attributes.record.data.key,
                    state = recordNode.attributes.record.data.key,
                    chart = EnergyApp.views.ChartView,
                    activeItem = EnergyApp.views.viewport.getActiveItem(),
		    controller = recordNode.attributes.record.data.controller,
		    action = recordNode.attributes.record.data.method,
                    maskEl, loadMask;

                maskEl = (!Ext.is.Phone && activeItem) ? activeItem.el : Ext.getBody();
		
		loadMask = new Ext.LoadMask(maskEl, {
		    msg: 'Loading...'
		});
		console.log(recordNode.attributes.record.data)
		//loadMask.show();
		Ext.dispatch({
		    controller	: controller,
		    action	: action,
		    anim  	: toChild
		});
            }
        }
    }
});
