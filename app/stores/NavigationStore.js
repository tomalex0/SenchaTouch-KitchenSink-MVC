(function(){


var NavigationStructure = [
    {
        key: 'CONS', 
        label: 'Consumption',
        items: [
            {key: 'WY', label: 'Wyoming', controller : 'Consumption', method : 'index', leaf: true}
        ]
    },{
        key: 'PROD',
        label: 'Production',
        items: [
            {key: 'WY', label: 'Wyoming', controller : 'Production', method : 'index', leaf: true}
        ]
    }
];


EnergyApp.stores.NavigationStore = new Ext.data.TreeStore({
    model: 'Navigation',
    root: {
        items: NavigationStructure
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});

})();