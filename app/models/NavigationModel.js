EnergyApp.models.NavigationModel = Ext.regModel('Navigation', {
    fields: [
        {name: 'key',   type: 'string'},
        {name: 'label',  type: 'string'},
        {name: 'controller',  type: 'string'},
        {name: 'method',  type: 'string'}
    ]
});