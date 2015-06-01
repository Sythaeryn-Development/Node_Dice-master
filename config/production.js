/**
 * Copyright 2014 eRealm Info & Tech.
 *
 * Created by Ken on 2/08/2014
 */

'use strict';

module.exports = {
    mongodb: {
        hostaddress: 'mongodb://localhost',
        port: 27017,
        dbname: 'dice',
        autoIndex: false
    },
    mongoStore: {
        url: 'mongodb://localhost/dice',
        autoRemove: 'interval',
        autoRemoveInterval: 10 // In minutes. Default 
    },
    port: 8080,
    bitcoin:
    {
        host: 'localhost',
        port: 8890,
        ssl: true,
        user: 'bitcoinrpc',
        pass: 'dfbufbSUBUSbf7763YSFYbfybsiyb87'
    },
	litecoin:
    {
        host: 'localhost',
        port: 8391,
        ssl: true,
        user: 'bitcoinrpc',
        pass: 'dfbufbSUBUSbf7763YSFYbfybsiyb87'
    },
	dogecoin:
    {
        host: 'localhost',
        port: 8392,
        ssl: true,
        user: 'bitcoinrpc',
        pass: 'dfbufbSUBUSbf7763YSFYbfybsiyb87'
    },
	dash:
    {
        host: 'localhost',
        port: 8393,
        ssl: true,
        user: 'bitcoinrpc',
        pass: 'dfbufbSUBUSbf7763YSFYbfybsiyb87'
    },
	html5coin:
    {
        host: 'localhost',
        port: 8394,
        ssl: true,
        user: 'bitcoinrpc',
        pass: 'dfbufbSUBUSbf7763YSFYbfybsiyb87'
    },
	magi:
    {
        host: 'localhost',
        port: 8395,
        ssl: true,
        user: 'bitcoinrpc',
        pass: 'dfbufbSUBUSbf7763YSFYbfybsiyb87'
    },
    faucet:
    {
        interval: 15 * 60 * 1000,
        min: 100,
        max: 500,
        proxy: null //try to use proxy to connect to google if blocked
    }

};
