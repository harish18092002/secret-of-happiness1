// Importing packages
import http from "node:http";
// import pkg from 'pg';

// postgresql part comes here 

// const Client = pkg.Client;
// const client = new Client({
// user: "harish",
// host: "localhost",
// database: "harish",
// password: "root",
// port: 1080
// })

// client.connect((err)=>{
//   if (err) throw err;
//   console.log("Connected")
// })




// POST method to post the users data


let usersDatabase =[];
let userData;

const server = http.createServer(function (req, res) {
  if(req.method === "POST" && req.url === "/create-record" ){

    req.setEncoding("utf8");

   req.on("data",(data)=>{

    userData = data;
   });

   req.on("end",()=>{
    // usersDatabase= JSON.parse(usersDatabase)
    userData = JSON.parse(userData)
    let now = new Date();
    let date = now.getFullYear() + '/' + (now.getMonth()) + '/' + now.getDate()
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    let dnt=   date + ' ' + time;
  //   let values = [ usersDatabase.family, usersDatabase.finance, usersDatabase.fitness, usersDatabase.faith,usersDatabase.friend,usersDatabase.field,usersDatabase.fun,dnt];
  //   let text = 'insert into myuser values ($1,$2,$3,$4,$5,$6,$7,$8);'
  //   client.query(text,values,(err,res)=>{
  //     if(err) throw err;
  //     console.log(res.rows)
  //  })

  usersDatabase.push(userData)
  console.log("These are the data that are sned by user " + usersDatabase)
     res.end("Your data has been stored successfully")
})
   }


// Get records from postgresql

  if(req.method==="GET" && req.url==="/get-records"){

    res.write(JSON.stringify(usersDatabase))

// let text = 'select * from myuser;'
// client.query(text, (err,resp)=>{
//   if (err) throw err;
//   console.log("data from database",resp)
// res.write(JSON.stringify(resp.rows) )
// res.end();
// })
           res.end();
  }








  // areas to focus message comes here

    if(req.method == "GET" && req.url == "/areas-to-focus") {
      
      // let text = 'select * from myuser order by "date and time" desc limit 1;'
    console.log(usersDatabase)
      // // client.query(text,(err,data)=>{
      // //   if (err) throw err;
      // //   console.log("hiii",data)

      //   let object = data.rows

        // for(const [key,value] of Object.entries(data)){
        //   console.log('${key}: ${value}')
        // }
let db =[];
let a = usersDatabase.length
let obj = usersDatabase[a-1]
console.log(usersDatabase[a-1])
       
          for(const [key,value] of Object.entries(obj)){
            if (value<=3){
              // console.log(usersDatabase)
              db.push(key)
            }
          }
        
        
         console.log("area to focus" ,db)
        res.write("Areas to focus are: "+ JSON.stringify(db))
       
        res.end()
      // })

    }
 })

server.listen(process.env.PORT || 8080);
console.log("Server is running")







// here comes http module

// get function
//     // res.write(JSON.stringify(usersDatabase))
//     usersDatabase.forEach((item,index)=>{
//  item = JSON.stringify(item)
//       if(index===usersDatabase.length-1)
//       res.write(item);
//       else res.write(item + ",");
//           });
//           console.log("Datas has been sent to users")

// PUT method to update the user data


//   if(req.method==="PUT"){
//      const path = req.url;
//      const parts = path.split('/').slice(1);
//      let datas ;
//      let part;
//      req.setEncoding("utf8")
    
//   req.on("data",(d)=>{
//     d = JSON.parse(d)
//      datas = d
//  });
//     req.on("end",()=>{
//       part = parts[0]
//         usersDatabase.forEach((element) =>{
//      if (element.id == part){
//            element.name = datas.name
//              element.year = datas.year
//               console.log(usersDatabase)
//               console.log(element)

//      console.log("The updated data is", usersDatabase)
//            }
       
//         }
//         )
//   res.end("Your data is updated")
//       }
//       )
     
    
//     }
