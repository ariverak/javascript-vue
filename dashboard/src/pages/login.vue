<template>
    <v-app>
        <div>
            <v-btn @click="onLogin" class="primary">Entrar</v-btn>
        </div>
    </v-app>
</template>
<script>
export default {
    methods: {
        onLogin(){
            this.$emit("loginIn")
        }
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>

</style>