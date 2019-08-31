<template>
   <div class="users">
      <div v-for="(user,i) in users" :key="user">
         <v-card 
            class="mx-auto card"
            max-width="344"
            outlined>
             <v-list-item three-line>
               <v-list-item-content>
                  <div class="overline mb-4">Curso Javascript + VueJS</div>
                  <v-list-item-title class="headline mb-1">{{user.toUpperCase()}}</v-list-item-title>
                  <v-list-item-subtitle>Alumno {{ i + 1}} del curso</v-list-item-subtitle>
               </v-list-item-content>
               <v-list-item-avatar
               tile
               size="80"
               color="grey"
               >
                  <v-img :src="`${publicPath}images/user.png`"></v-img>
               </v-list-item-avatar>
            </v-list-item>
         </v-card>
      </div>
  </div>
</template>
<script>
export default {
   async mounted(){
      const response = await this.$axios.get("http://localhost:3000/users",{
         headers : {
            authorization : localStorage.getItem("accessToken")
         }
      }).catch(err=>{
         const {response} = err;
         alert(response.data.message)
      });
      this.users = response.data;
   },
   data() {
      return {
         users : [],
         publicPath: process.env.BASE_URL
      }
   },
}
</script>
<style scoped>
   .users {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
   }
   .card {
      margin : 10px
   }
</style>