const http = require('http');
const fs = require('fs');

http.createServer((request, respose)=>{
    const file = request.url == '/' ? './WWW/index.html' : `./WWW/${request.url}`;
    if(request.url=='/registro'){
        let data =[];
        request.on("data", value =>{
            data.push(value);
        }).on("end", ()=>{
            let params = Buffer.concat(data).toString();
            respose.write(params);
            respose.end();
        });
    }
    fs.readFile(file, (err, data)=>{
        if(err){
            respose.writeHead(404,{"Content-Type": "text/plain"});
            respose.write("not found");
            respose.end();
        }else{
            const extension = request.url.split('.').pop();
            switch(extension){
                case 'txt':
                    respose.writeHead(200,{"Content-Type": "text/plain"});
                break;
                case 'html':
                    respose.writeHead(200,{"Content-Type": "text/html"});
                break;
                case 'jpeg':
                    respose.writeHead(200,{"Content-Type": "image/jpeg"});
                break;
            }
            respose.write(data);
            respose.end();
        }
    });
}).listen(4444);
