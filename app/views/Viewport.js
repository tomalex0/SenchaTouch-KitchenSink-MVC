EnergyApp.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    items: [{
        cls: 'launchscreen',
        html: '<div><p><strong>This application visualizes US Energy data with charts from the Sencha Touch Charts package.</strong><br> Start by selecting consumption or production.</p></div>'
    }],
    initComponent: function() {

        var navigateButton = new Ext.Button({
            hidden: Ext.is.Phone || Ext.Viewport.orientation == 'landscape',
            text: 'Navigation',
            handler: function() {
                EnergyApp.views.Navigation.showBy(this, 'fade');
            }
        });

        var backButton = new Ext.Button({
            text: 'Back',
            ui: 'back',
            handler: function(){
                var navigation = EnergyApp.views.Navigation,
                    title;
                    
                if(this.getActiveItem() === navigation){
                    navigation.onBackTap();
                    
                    // we are in the root - no back button here
                    if(navigation.items.indexOf(navigation.getActiveItem()) <= 0){
                        this.toolBar.items.get(0).hide();
                        title = this.title || '';
                    }
                }else{
                    this.setActiveItem(navigation, {
                        type: 'slide',
                        reverse: true
                    });
                }
                var recordNode = navigation.getActiveItem().recordNode;
                title = title || navigation.renderTitleText(recordNode);
               
                this.toolBar.setTitle(title);
            },
            hidden: true,
            scope: this
        });
        
        var btns = [navigateButton];
        
        if(Ext.is.Phone){
            btns.unshift(backButton);
        }
        
        this.toolBar = new Ext.Toolbar({
            ui: 'dark',
            dock: 'top',
            items: btns.concat(this.buttons || []),
            title: this.title
        });

        this.dockedItems = this.dockedItems || [];
        this.dockedItems.unshift(this.toolBar);

        if (!Ext.is.Phone) {
            EnergyApp.views.Navigation.setWidth(300);
        }

        if (!Ext.is.Phone && Ext.Viewport.orientation == 'landscape') {
            this.dockedItems.unshift(EnergyApp.views.Navigation);
        } else if (Ext.is.Phone) {
            this.items = this.items || [];
            this.items.unshift(EnergyApp.views.Navigation);
        }

        EnergyApp.views.Viewport.superclass.initComponent.call(this, arguments);
    },
    layoutOrientation: function(orientation, w, h) {
        if (!Ext.is.Phone) {
            if (orientation == 'portrait') {
                EnergyApp.views.Navigation.hide(false);
                this.removeDocked(EnergyApp.views.Navigation, false);
                if (EnergyApp.views.Navigation.rendered) {
                    EnergyApp.views.Navigation.el.appendTo(document.body);
                }
                EnergyApp.views.Navigation.setFloating(true);
                EnergyApp.views.Navigation.setHeight(400);
                // hide the navigation button
                this.toolBar.items.get(0).show(false);
            } else {
                EnergyApp.views.Navigation.setFloating(false);
                EnergyApp.views.Navigation.show(false);
                // show the navigation button
                this.toolBar.items.get(0).hide(false);
                this.insertDocked(0, EnergyApp.views.Navigation);
            }
            this.toolBar.doComponentLayout();
        }

        EnergyApp.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);
    }
});
