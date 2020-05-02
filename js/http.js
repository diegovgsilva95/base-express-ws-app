"use strict";

const http = require("http");

module.exports = exports = async function(){
    const server = http.createServer(express);
    server.addListener("upgrade", (r,s,h)=>
        websockets.handleUpgrade(r,s,h,ws=>
            websockets.emit("connection", ws, r)
        )
    );
    server.listen(80, "0.0.0.0");
    return server;
};