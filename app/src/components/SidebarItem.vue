<template>
    <div @click="saludarChild" class="item">
        {{texto}}
    </div>
</template>
<script>
export default {
    props : ['texto'],
    methods : {
       saludarChild(){
           this.$emit('onsaludar')
       }
    }
}
</script>
<style scoped>
.item {
    height : 45px;
    background-color: #0e65bb;
    color : white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2px;
}
.item:hover{
    background-color: #0c5baa;
    cursor: pointer;
}
</style>