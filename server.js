var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname));
app.post('/getMain_Data',function (req, res,next) {
	 console.log(req.body.act,/*:Get_Main_List*/req.body.sort,/*:zhdf desc*/req.body.TopNum,/*:0*/req.body.page); /*:2*/
	 var filePath='1.json';
	 switch (req.body.act) {
	 	case "Get_News_List":
	 		filePath="4.json";
	 		break;
	 	default:
	 		if (req.body.TopNum == 3) {
	 			filePath="3.json";
	 		} else{
	 		    filePath="1.json";
	 		}	
	 		break;
	 };

	 fs.readFile(__dirname+"/"+filePath, 'utf-8', function (error,data) {
	 	var out = JSON.parse(data);
	 	out.pagesize=req.body.TopNum;
	 	out.page= req.body.page;
	 	res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(out) + '\n'); 
	 });
     
});
app.get('*', function (req, res) {
	fs.readFile(__dirname+'/index.html', function (error,data) {

	 	res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data+ '\n'); 
	 });  
});
// act:Get_News_List
// TopNum:12
// page:1

/*
act:Get_Main_List
TopNum:3
page:1
*/
app.listen(3000, function () {
	 console.log('listening port 3000'); 
})