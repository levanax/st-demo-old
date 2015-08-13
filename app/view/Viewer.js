/**
 * Created by Levana.Xue on 8/12/2015.
 */
Ext.define('SenchaTouchDemo.view.Viewer', {
    extend: "Ext.navigation.View",
    id: 'viewer',
    xtype: 'viewer',
    autoDestroy:false,
    requires: [
        'SenchaTouchDemo.controller.Viewer'
    ],
    config: {
        navigationBar: {
            ui: 'dark',
            docked: 'top'
        },
        items: {
            xtype: 'main'
        }
    }
});