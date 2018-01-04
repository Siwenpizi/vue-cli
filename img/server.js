//引入http模块
var http = require("http");
var fs = require("fs")


http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	
	fs.readFile("1.json",function(err,data){
		if(err){
			res.write(err);
		}else{
			//设置响应头部 : 设置浏览器支持utf-8编码
			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			res.write(data);
		}
		res.end();
	});
}).listen(8085);
console.log("服务器已启动...");
