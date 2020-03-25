const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    type: 'boolean'
}

const listado = {
    alias: 'l',
    desc: 'Filtra el resultado del listado por estado',
    type: 'boolean'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar un elemento a completado o pendiente', {
        descripcion,
        completado
    })
    .command('listar', 'Lista los elementos por hacer', {
        listado
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}