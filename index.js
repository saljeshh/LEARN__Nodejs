// this if file based
// const a = {
//     average: (a, b) => {
//         console.log((a + b) / 2);
//     },
//     percent: (a, b) => {
//         console.log((a / b) * 100);
//     }
// }


// module.exports = a;
 

// file based, build it , third party libraries



// // this is build it
// const fs = require('fs');

// // 

// fs.readFile("./sample.txt","utf8",(err,data) => {
//     if (err) throw err;
//     console.log(data);
// })

// // this syncronous will run first 
// const data = fs.readFileSync("./sample.txt","utf-8")
// console.log(data);

// // this im first will run first because filesystem(fs) is async
// console.log("I am first")

//-------------we needed to write fs. in every function but we can do easy way 
// const {readFile, readFileSync}  = require('fs');

// readFile("./sample.txt", "utf-8", (err, data)=> {
//     if(err) throw err;

//     console.log(data);
// })

// const data = readFileSync("./sample.txt","utf-8");
// console.log(data)



// ------------ write file
// const fs = require('fs');

// const a = "This is made by saljesh"

// fs.writeFile("./saljesh.txt", a, (err)=> {
//     if (err) throw err;
//     console.log("File has been created successfully")
// })

// fs.writeFileSync("./saljesh1.txt",a);



/*-----PATH MODULE -- */
// const path = require('path')

// const a = path.extname("/index.js")
// console.log(a)

// const ss = path.basename("D:\09_Node JS\index.js")
// console.log(ss)

// const dir = path.dirname("D:\09_Node JS\index.js")
// console.log(dir)


// aa = "/gpp";

// const new__aa = path.join("D:\09_Node JS\index.js" + aa)

// console.log(new__aa)


/*---- Os module ---------- */
// const os = require("os");

// console.log(os.freemem());

// console.log(os.hostname());

// console.log(os.homedir())

// console.log(os.cpus())


/* -- Third PARTY MODULE */

// npm i pokemon
/* 1. pokemon */

// const pokemon = require("pokemon");

// console.log(pokemon.random()); // Skarmory
// console.log(pokemon.all()); //


/* --- making server --- */
const http = require("http");

const fs = require("fs");

const PORT = 2000;
const HOSTNAME = "localhost";
const home = fs.readFileSync("./index.html", "utf8");

console.log(__filename)

const server = http.createServer((req,res) =>{
//    console.log(req.url) // gives url of user entered
//    res.end("<h1>HELLO WORLD</h1>");
    if(req.url === "/"){
        return res.end(home);
    }else if(req.url === "/contact"){
        return res.end("<h1>Contact Page</h1>");
    }else{
        return res.end("<h1>Page not found!</h1>");
    }
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is working on http://${HOSTNAME}:${PORT}`)
})