'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');

const server = new Hapi.Server();
server.connection({port: Settings.port});


server.route({
	method: 'GET',
	path: '/',
	handler: (reques, reply) =>{
		reply('Hello, wordl!');
	}
});

server.start((err)=>{
	Hoek.assert(!err, err);
	console.log(`Server running at: ${server.info.uri}`);
})
