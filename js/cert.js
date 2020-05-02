"use strict";

const forge = require("node-forge");
const fs = require("fs");

module.exports = exports = async function(){

    const keys = forge.pki.rsa.generateKeyPair(1024);
    const cert = forge.pki.createCertificate();
    cert.publicKey = keys.publicKey;
    cert.serialNumber = '01';
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);
    cert.sign(keys.privateKey);

    
    return {
        key: forge.pki.privateKeyToPem(keys.privateKey),
        cert: forge.pki.certificateToPem(cert)
    };

    // No caso de já existir um certificado instalado:
    
    // let cert = await fs.promises.readFile("/root/cert.pem", "utf-8");
    // let key = await fs.promises.readFile("/root/key.pem", "utf-8");

    // return {
    //     cert, key
    // };

}