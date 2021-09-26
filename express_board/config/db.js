const mysql = require('mysql');

const dbInfo = {
  host:'localhost',
  port:'3306'
  ,user:'test1'
  ,password:'Ekdns1130!'
  ,database:'test2'
}

let dbcon = {
	init:function() {
		return mysql.createConnection(dbInfo);
	},
	conn:function(con) {
		con.connect(function(err){
			if(err) {
				console.log("mysql connection error :"+err);
                setTimeout(init, 2000);
			} else {
				console.log("mysql connection sucessfully");
			}
		})
	}
}

module.exports = dbcon; //모듈 등록