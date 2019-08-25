<template>
    <div id="content">
        <p :key="i" v-for="(producto,i) in productos">
            {{producto.nombre}}
        </p>
        <p>Total : {{total}}</p>
    </div>
</template>
<script>
import contentMixin from '../mixins/content'
export default {
   mixins : [contentMixin]
}
</script>
<style scoped>
#content {
    padding: 15px;
}
</style>