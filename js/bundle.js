"use strict";

const Bundler = require("parcel-bundler");

module.exports = exports = async function(){

    let bundler = global.bundler = new Bundler([
        "public/index.htm",
    ],{
        logLevel: 0,
        https: true, 
        cache: false,
        publicUrl: ".",
        hmr: false,
        watch: true,
        // outFile: "index.htm",
    });
    let bundle;
    try {
        bundle = (await bundler.bundle());
        bundle.bundler = bundler;
    } catch(e){
        console.log("[Bundler] Não foi possível compilar a página. Corrija os erros e reinicie.");
        console.log("[Bundler] Erros: " + e.message);
        process.exit(1);
    };

    // console.log(bundle);

    return bundle;
};