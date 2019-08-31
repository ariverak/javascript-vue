<template>
    <v-app>
     <v-card class="card" max-width="344">
        <v-card-title>Login</v-card-title>
        <v-col cols="12" sm="12" md="12">
            <v-text-field
                v-model="username"
                label="Nombre de Usuario"
                placeholder="Ingrese su nombre de usuario aqui"
            ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="12">
            <v-text-field
                v-model="password"
                type="password"
                label="Contraseña"
                placeholder="Ingrese su contraseña de usuario aqui"
            ></v-text-field>
            </v-col>
            <div>
                <v-btn class="btn-lgn primary" @click="onLogin" >Entrar</v-btn>
            </div>
        </v-card>
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
    .card {
        padding : 15px;
    }
    .btn-lgn {
        margin-left : auto;
    }
</style>