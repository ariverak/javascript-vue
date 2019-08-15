const alumnoUno = {
    nombre : 'Jean',
    apellido : 'Hernandez',
    edad : 25
}
const alumnoDos = {
    nombre : 'Carlos',
    apellido : 'Parra',
    edad : 40
}
const alumnoTres = {
    nombre : 'Exequiel',
    apellido : 'Alvarez',
    edad : 25
}
const alumnos = [alumnoUno,alumnoDos,alumnoTres]
 //                 0          1         2    
for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index].nombre) 
}