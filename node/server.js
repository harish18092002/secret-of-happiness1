// Importing packages

import http from "node:http";
import editJsonFile from "edit-json-file";
import asyn from "asyn";
import stringToJson from "string-to-json";
import { format } from "node:path";
import axios from "axios";
import { title } from "node:process";

// POST method to post the users data

let usersDatabase = []
let userData;
const server = http.createServer(function (req, res) {
  if(req.method === "POST" && req.url === "/create-user" ){
    req.setEncoding("utf8");
   req.on("data",(data)=>{
  userData = data;
});
req.on("end",()=>{
  usersDatabase.push(userData)
  console.log(userData)
})
  

res.end("Your data has been stored successfully")


  }


// Get method to find and display users

  if(req.method==="GET" && req.url==="/find-user"){
    usersDatabase.forEach((item,index)=>{
      if(index===usersDatabase.length-1)
      res.write(item);
      else res.write(item + ",");
          });
           res.end();
  }



// PUT method to update the user data

  if(req.method==="PUT"){
     const path = req.url;
     const parts = path.split('/').slice(1);
    if (usersDatabase)
  console.log(parts)
  
  }
  
});

server.listen(1080);
