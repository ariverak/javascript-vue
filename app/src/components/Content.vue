<template>
    <div id="content">
        <p :key="i" v-for="(producto,i) in productos">
            {{producto.nombre}}
        </p>
        <p>Total : {{total}}</p>
    </div>
</template>
<script>
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
    }
}
</script>
<style scoped>
#content {
    padding: 15px;
}
</style>