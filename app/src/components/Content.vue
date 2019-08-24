<template>
    <div id="content">
        <p :key="i" v-for="(producto,i) in productos">
            {{producto.nombre}}
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            productos : [
                {nombre : "Manzana", valor : 1000},
                {nombre : "Pera",valor : 500},
                {nombre : "Naranja", valor : 800}
            ]
        }
    },
}
</script>
<style scoped>
</style>