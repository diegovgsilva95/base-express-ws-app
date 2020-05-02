"use strict";

module.exports = exports = async function(name, file, desc = ""){
    if(desc == "") desc = `Inicializando ${file}...`;

    l(desc);

    let temp = await require(`./${file}`)();
    global[name] = temp;

}