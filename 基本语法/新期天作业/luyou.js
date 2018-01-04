
    var http = require("http");
    var fs = require("fs");
    var urll = require("url");
    
    http.createServer(function(req,res){
        
         var path = urll.parse(req.url,true).pathname;  //解析url
         
         //设置返回的文档类型以及跨域问题
         res.writeHead(200,{  
            "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
         });
                fs.readFile("1.json"+path,function(err,data){
                      res.write(data);
                      res.end();
                });
        
    }).listen(5656);
    console.log("服务器已启动。。。");
