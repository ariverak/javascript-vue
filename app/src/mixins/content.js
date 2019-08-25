export default {
    data() {
        return {
            productos : [
                {nombre : "Manzana", valor : 1000},
                {nombre : "Pera",valor : 500},
                {nombre : "Naranja", valor : 800},
                {nombre : "Naranja", valor : 800}
            ]
        }
    },
    computed : {
        total(){
            let total = 0;
            this.productos.forEach(producto => {
                total += producto.valor;
            });
            return total;
        }
    },
    beforeCreate(){
        console.log("aun no me muestro")
    },
    created(){
        /* no se ejecuta porque aun no existe content en el dom
         let content = document.getElementById('content');
        content.style.background = "yellow";
        */
    },
    beforeMount(){
        console.log("aun no me muestro")
    },
    mounted() {
        
    },
}