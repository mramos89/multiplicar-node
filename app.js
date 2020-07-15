const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { slategray } = require('color-name');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then('listar tabla')
            .catch(e => console.log(e))
        break;
    case 'crear':


        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo.green)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}
//let argv2 = process.argv;
//console.log(argv.base);
/*let parametro = argv[2];

        let base = parametro.split('=')[1];
*/