import http from 'http';

const server = http.createServer();
server.on('request', (request,response)=>{
    console.log(request.method);
    if(request.method=="GET")
    {
        response.write("<html><body><form action='/' method='post'><label>Enter your name:</label><input type='text' id='name' name='name'/><input type='submit'></form></body></html>");
        response.end();
    }
    else if(request.method=="POST")
    {
            let body:any[] =[]
            
            request.on('data', (chunk)=>{
                body.push(chunk);
            });
            request.on('end',()=>{
                console.log(body);
                console.log(request);
                response.write(`Hello;! ${body}`);
                response.end();//
            });

      
        
    }
});
server.listen(3000);