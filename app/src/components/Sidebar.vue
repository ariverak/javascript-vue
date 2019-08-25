<template>
    <div id="sidebar">
        <Item @onsaludar="saludar" v-bind:key="i" v-for="(item,i) in items" :texto="item" />
    </div>
</template>
<script>
import Item from '../components/SidebarItem'
export default {
    components : {
        Item
    },
    data() {
        return {
            items : [
                'Menu1',
                'Menu2',
                'Menu3'
            ]
        }
    },
    methods : {
        saludar(){
            this.items.push('Menu4');
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
#sidebar {
    height : 500px;
    width : 200px;
    background-color: #1976d2;
    height: calc(100vh - 64px);
    padding-top: 64px;
}
</style>