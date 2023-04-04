const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("<h1>Home Page</h1>");
    }else if(req.url === '/about'){
        res.end('<h1>About</h1>');
    }else if(req.url === '/services'){
        res.end('<h1>Services</h1>');
    }else{
        res.end('<h1>Not Found</h1>');
    }
});


server.listen(3000, () => {
    console.log(`Server listening on port 3000} `);
})