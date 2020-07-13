<template>
  <div class = "Login">
    <h3 class = " grey--text">Login</h3>
    <v-container class= "my-5">
        <v-card class="mx-auto outlined" max-width="500">
        <v-card-title class= "blue-grey lighten-2">
            <h4 class="mx-auto white--text">Login </h4>
        </v-card-title>
        <v-card-text>
            <v-form class="mt-7" ref="form">
                <v-text-field label="Email" color = "blue-grey lighten-2" v-model="email" outlined prepend-icon="email" ></v-text-field>
                <v-text-field label="Password" color = "blue-grey lighten-2" v-model="password" 
                outlined prepend-icon="mdi-lock-outline" 
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                :type="show1 ? 'text' : 'password'" 
                @click:append="show1 = !show1" ></v-text-field>
                <v-btn flat v-on:click="register" color = "green lighten-3" class="mx-0" @click="submit" :loading="loading">Login!</v-btn>
                <v-spacer></v-spacer>
                <v-btn class = " my-4 subtitle-2 grey--text" text small to="/Register">
                    Don't have an account?</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'

export default {
  name: 'login',
  data: function() {
        return{
            show1: false,
            name: '',
            email: '',
            password: '',

        }
    },
    methods: {
        register: function(e){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(data => {
                console.log(`Logged in for ${data.name}`)
                this.$router.push('/');
            },
            err =>{
                alert(err.message)
            })
            e.preventDefault();
        }
    }
}
</script>
