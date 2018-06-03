"use strict";

module.exports = function() {

	const env = process.env.NODE_ENV || 'development';
	const dbContants = databaseConfig();
	const appConstants = applicationConfig();

	const obj = {
		application : {
			url : appConstants[env]['url'],
			host : appConstants[env]['host'],
			port : appConstants[env]['port'],
		},
		database : {
			host     : dbContants[env]['host'],
			user     : dbContants[env]['user'],
			password : dbContants[env]['password'],
			database : dbContants[env]['database']
		},
		server : {
			defaultHost : 'http://localhost:3000'
		}
	};

	if (!obj.application['host']) {
		throw new Error('Missing constant application.host. ' +
			'Check your enviroment variables NODE_HOST.');
	} else if (!obj.application['port']) {
		throw new Error('Missing constant application.port. ' +
			'Check your enviroment variable NODE_PORT.');
	} else if (!obj.database['host']) {
		throw new Error('Missing constant database.host. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['user']) {
		throw new Error('Missing constant database.user. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['password']) {
		throw new Error('Missing constant database.password. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['database']) {
		throw new Error('Missing constant database.database. ' +
			'Check your enviroment variables.');
	}

	return obj;

	function databaseConfig(){
		return {
			'production' : {
				'host' : process.env.DB_PRD_HOST,
				'user' : process.env.DB_PRD_USER,
				'password' : process.env.DB_PRD_PASS,
				'database' : 'dellstore2'
			},
			'development' : {
				'host' : 'diploma-demo-postgresql.crgbxd1fpnkx.us-east-2.rds.amazonaws.com',
				'user' : 'diplomademo',
				'password' : 'diplomademo',
				'database' : 'dellstore2'
			}
		};
	}

	function applicationConfig(){
		return {
			'production' : {
				'url' : 'https://' + process.env.NODE_HOST + ':' + 
					process.env.NODE_PORT,
				'host' : process.env.NODE_HOST,
				'port' : process.env.NODE_PORT
			},
			'development' : {
				'url' : 'http://localhost:3000',
				'host' : 'localhost',
				'port' : '3000'
			}
		};
	}
}();