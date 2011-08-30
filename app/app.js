var toChild =  {type : 'slide', direction : 'left'};
var toParent = {type : 'slide', direction : 'right'};

Ext.regApplication('EnergyApp',{
    name         : "EnergyApp",
    defaultUrl   : 'EnergyApp/index',
    defaultTarget: "viewport",
    icon: 'resources/images/icon.png',
    glossOnIcon: false,
    tabletStartupScreen: 'tablet_startup.jpg',
    phoneStartupScreen: 'phone_startup.jpg',
    tabletIcon: 'icon-ipad.png',
    phoneIcon: 'icon-iphone.png',
    useHistory:true,
    launch: function() {
        this.views.viewport = new this.views.Viewport({title: 'US Energy Data Visualization'});
    }
});

// Touch 1.x doesn't have a beforetabswitch event to hook...
Ext.override(Ext.TabBar, {
    onTouchStart : function(e, t) {
        t = e.getTarget('.x-tab');
        if (t) {
            var newTab = Ext.getCmp(t.id);
            if (!newTab.hasBeenShown) {
                newTab.hasBeenShown = true;
                var loadMask = new Ext.LoadMask(EnergyApp.views.viewport.getActiveItem().el, {
                    msg: 'Loading...'
                });
                loadMask.show();
                newTab.on('activate', function() {
                    loadMask.destroy();
                }, undefined, { delay: 10 });
            }
            Ext.defer(this.onTabTap, 10, this, [newTab]);
        }
    }
});
