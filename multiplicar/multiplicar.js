const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`el valor ${base} o el valor ${limite} no es un numero`);
            return;
        }
        resolve(console.log('=================================='.green));
        resolve(console.log(`Tabla del ${base}`.green));
        resolve(console.log('=================================='.green));
        for (let i = 1; i <= limite; i++) {
            resolve(console.log(`${i} * ${base} = ${base * i }\n`.grey));
        }
    })

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`el valor ${base} no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${base * i }\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}