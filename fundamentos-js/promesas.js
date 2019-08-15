console.log("Hola")
new Promise((res,rej)=> {
    setTimeout(function(){
        console.log("Como estas?");
        res("Juan")
    },2000)
}).then(dato=>{
    console.log("Bien "+dato)
    console.log("Bien Gracias")
    console.log("Chao")
})
