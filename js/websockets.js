"use strict";

const http = require("http");
const WebSocketServer = require("ws").Server;
// const UUID = require("uuid/v1");


/** @param {WebSocket} socket @param {http.IncomingMessage} req */
const wss_onconnection = async function(socket, req){
    l("Nova conexão...");
    // global.sockets[...] = socket;
    
    socket.on("message", function(data){
        l(`[WebSocket] Recebido ${data.length} bytes`);
    });
    socket.on("close", function(ev){
        l(`[WebSocket] Cliente desconectado`);
    });
};


module.exports = exports = async function(){
    global.sockets = {}; // Cada soquete
    const wss = new WebSocketServer({ noServer: true });

    wss.on("connection", wss_onconnection);

    return wss;
};