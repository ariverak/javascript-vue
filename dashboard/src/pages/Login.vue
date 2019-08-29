<template>
    <v-app>
        <div>
         <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="username"
                label="Nombre de Usuario"
                placeholder="Ingrese su nombre de usuario aqui"
            ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="password"
                type="password"
                label="Contraseña"
                placeholder="Ingrese su contraseña de usuario aqui"
            ></v-text-field>
            </v-col>
            <v-btn @click="onLogin" class="primary">Entrar</v-btn>
        </div>
    </v-app>
</template>
<script>
export default {
    methods: {
        onLogin(){
            this.$emit("loginIn",{
                username : this.username,
                password : this.password
            })
        }
    },
    data() {
        return {
            username : "",
            password : ""
        }
    },
}
</script>
<style scoped>
    #app {
        padding : 10px;
    }
</style>