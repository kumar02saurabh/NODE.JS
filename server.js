// Server 

const http= require ('http')
const server = http.createServer((req,res)=>{
    if(req.url=='/hello'){
        res.end("Hello Saurabh!")
    }
    else{
        res.end("You are Trying to hit wrong url")
    }
})
server.listen (1210,()=>{
    console.log("Started a server")
})