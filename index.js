const http = require('http');
const url = require('url');
const port = 4444;

const server = http.createServer((req, res) => {

    const urlData = url.parse( req.url, true);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.writeHead(200);
    res.write( `host     : ${urlData.host}<br>`);
    res.write( `host name: ${urlData.hostname}<br>`);
    res.write( `path name: ${urlData.pathname}<br>`);
    
    res.write( `parameters: ${urlData.search}<br>`);

    const paramObject= urlData.query;
    res.write(`Név: ${paramObject.nev}<br>`);
    res.write(`Funkció: ${paramObject.funkcio}`);
    res.end("");

});

server.listen(port);