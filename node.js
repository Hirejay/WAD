const express=require("express");

const app=express();
const  port=4200;

app.get("/",(req,res)=>{
    
    //res.send("<h1>home</h1>");
    res.sendFile("./public/home.html",{root: __dirname});

});

app.get("/about",(req,res)=>{

   // res.send("<h1>about</h1>");
   res.sendFile("./public/about.html",{root: __dirname});

});
app.get("/contact",(req,res)=>{
    
   // res.send("<h1>contact</h1>");
   res.sendFile("./public/contact.html",{root: __dirname});

});

app.listen(port,()=>{

    console.log(`listening the port ${port}`)

});