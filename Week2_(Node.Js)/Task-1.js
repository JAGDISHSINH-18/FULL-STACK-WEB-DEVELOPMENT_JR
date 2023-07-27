const http =require("http"); 
const url =require("url");

const server = http.createServer((req,res) => {
    res.writeHead(202,{"Content-Type" : 'text/html'});
    if(req.url == "/"  ){
        res.end("<b><h1>Hello I am 21IT135</b>");
    }
    else if(req.url == "/about") {
        res.end("Welcome to my about page");
    }
    else{
        res.writeHead(404,{"Content-Type" : 'text/html'});
        res.end("404 Error")
    }
    
})
server.listen(3000,"127.0.0.1",()=>{
    console.log("LISTENING TO THE PORT NO 3000");
});

