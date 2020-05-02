"use strict";

const https = require("https");

module.exports = exports = async function(){
    let {key,cert} = global.cert;
    const server = https.createServer({ key, cert }, express);

    server.addListener("upgrade", (r,s,h)=>
        websockets.handleUpgrade(r,s,h,ws=>
            websockets.emit("connection", ws, r)
        )
    );
    server.listen(443, "0.0.0.0");
    
    return server;
};