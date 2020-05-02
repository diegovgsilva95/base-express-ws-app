"use strict";

const express = require("express");
const Bundler = require("parcel-bundler");
const serveIndex = require("serve-index");

module.exports = exports = async function(){

    let entry_basename = bundle.entryAsset.basename; //index.htm
    const app = express();
    
    app.use(
        express.static(bundle.bundler.options.outDir),
        serveIndex(bundle.bundler.options.outDir, {'icons': true})
    );

    app.use("/node_modules", express.static("node_modules"), serveIndex("node_modules", {icons: true}));

    return app;
}