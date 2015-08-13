/**
 * Created by Levana.Xue on 8/11/2015.
 */

Ext.define('SenchaTouchDemo.view.market.Trade',{
    extend:'Ext.form.Panel',
    xtype:'marketTrade',
    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'SenchaTouchDemo.controller.market.Trade'
    ],
    config:{
        disableSelection: true,
        items:[
            {
                xtype: 'fieldset',
                items: [{
                    xtype: 'selectfield',
                    name:'account',
                    label: 'Account',
                    options: [
                        {text: 'First Option',  value: 'first'},
                        {text: 'Second Option', value: 'second'},
                        {text: 'Third Option',  value: 'third'}
                    ]
                },{
                    xtype: 'selectfield',
                    name:'market',
                    label: 'Market',
                    options: [
                        {text: 'First Option',  value: 'first'},
                        {text: 'Second Option', value: 'second'},
                        {text: 'Third Option',  value: 'third'}
                    ]
                }, {
                    xtype: 'textfield',
                    name: 'buyPower',
                    autoComplete: false,
                    label: 'BuyPower',
                    placeHolder: '',
                    value: '1000,00',
                    readOnly:true
                },{
                    xtype: 'selectfield',
                    name: 'side',
                    label: 'Side',
                    options: [
                        {text: 'Buy',  value: 'B'},
                        {text: 'Sell',  value: 'S'}
                    ]
                }, {
                    xtype: 'textfield',
                    name: 'code',
                    autoComplete: false,
                    label: 'Code',
                    placeHolder: '',
                    value: ''
                },{
                    xtype: 'selectfield',
                    name:'type',
                    label: 'Type',
                    options: [
                    ]
                }, {
                    xtype: 'textfield',
                    name: 'price',
                    autoComplete: false,
                    label: 'Price',
                    placeHolder: '',
                    value: ''
                }, {
                    xtype: 'textfield',
                    name: 'quantity',
                    autoComplete: false,
                    label: 'Quantity',
                    placeHolder: '',
                    value: ''
                }, {
                    xtype: 'datepickerfield',
                    name: 'date',
                    autoComplete: false,
                    label: 'Date',
                    placeHolder: '',
                    value: new Date()
                },{
                    xtype: 'fieldset',
                    border:0,
                    items:[
                        {
                            xtype: 'button',
                            ui: 'normal',
                            action:'submit',
                            text: 'reset',
                            itemId: 'reset',
                            width: '40%'
                        },
                        {
                            xtype: 'button',
                            ui: 'normal',
                            action:'submit',
                            text: 'Login',
                            itemId: 'submit',
                            width: '40%'
                        }
                    ]
                }]
            }
        ]
    },
    initialize:function(){
        console.log('initialize trade ...')

    }
});
