"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
server.on('request', (request, response) => {
    console.log(request.method);
    if (request.method == "GET") {
        response.write("<html><body><form action='/' method='post'><label>Enter your name:</label><input type='text' id='name' name='name'/><input type='submit'></form></body></html>");
        response.end();
    }
    else if (request.method == "POST") {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            console.log(body);
            console.log(request);
            response.write(`Hello;! ${body}`);
            response.end();
        });
    }
});
server.listen(3000);
