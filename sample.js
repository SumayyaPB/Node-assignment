const http= require('http');
const fs = require('fs');
const url = require('url');

// const server = http.createServer((req,res)=>{
// fs.readFile("./page.html","utf-8",(err,page) =>{
//    res.writeHead(200,{'content-type':'text/html'})
//    res.write(page)
//    res.end()
// })
// const server = http.createServer((req,res)=>{
// const urlpath = url.parse(req.url, true).pathname
// 	if (urlpath === '/'){
// 		res.writeHead(200,{'content-type':'text/plain'})
//        res.write("Hello this is the home page")
//        res.end()
// 	}else if(urlpath === '/login'){
// 		res.writeHead(200,{'content-type':'text/plain'})
//        res.write("Hello this is the login page")
//        res.end()
// 	}else if(urlpath === '/form'){
// 		res.writeHead(200,{'content-type':'text/plain'})
//        res.write("Hello this is the form page")
//        res.end()
// 	}

// }).listen(3000)

const server = http.createServer((req,res)=>{
 const urlpath = url.parse(req.url,true).pathname
if(urlpath === '/'){
    fs.readFile('./home.html','utf-8',(err,page)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
    res.write(page)
    res.end()
    })
}else if(urlpath === '/login'){
       fs.readFile('./login.html','utf-8',(err,page)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
    res.write(page)
    res.end()
    })
}else if(urlpath === '/form'){
    fs.readFile('./form.html','utf-8',(err,page) =>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(page)
        res.end()
    })
}
}).listen(3000)

