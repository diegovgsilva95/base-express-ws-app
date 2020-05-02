"use strict";

global.l = console.log.bind(console);
// global.c = console.clear.bind(console);
global.c = console.log.bind(console,"\x1Bc\x1B[3J");

const load = require("./js/loader.js");

(async function(){
    c();
    await load("cert", "cert.js", "Gerando certificado...");
    await load("bundle", "bundle.js", "Compilando página pública...");
    await load("websockets", "websockets.js", "Criando servidor de WebSocket...");
    await load("express", "express.js", "Instanciando Express.js");
    await load("https", "https.js", "Criando servidor HTTPS...");
    await load("http", "http.js", "Criando servidor HTTP...");

})();