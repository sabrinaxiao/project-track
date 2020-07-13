<template>
  <div class = "Register">
    <h3 class = " grey--text">Register</h3>
    <v-container class= "my-5">
      <v-card class="mx-auto outlined" max-width="500">
        <v-card-title class= "blue-grey lighten-2">
            <h4 class="mx-auto white--text">Sign Up </h4>
        </v-card-title>
        <v-card-text>
            <v-form class="mt-7" ref="form">
                <v-text-field label="Email" color = "blue-grey lighten-2" v-model="email" outlined prepend-icon="email" :rules="inputRules"></v-text-field>
                <v-text-field label="Password" color = "blue-grey lighten-2" v-model="password" 
                outlined prepend-icon="mdi-lock-outline" 
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                :type="show1 ? 'text' : 'password'" 
                @click:append="show1 = !show1" :rules="passRules"></v-text-field>
                <v-text-field label="Name" color = "blue-grey lighten-2" v-model="name" outlined prepend-icon="mdi-account" required :rules="nameRules"></v-text-field>
                <v-text-field label="Role" color = "blue-grey lighten-2" v-model="role" outlined prepend-icon="mdi-account" required :rules="roleRules"></v-text-field>
                <v-btn flat v-on:click="register" color = "green lighten-3" class="mx-0" @click="submit" :loading="loading">Sign up!</v-btn>
                <v-spacer></v-spacer>
                <v-btn class = " my-4 subtitle-2 grey--text" text small to="/Login">Already have an account?</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import db from '@/fb'

export default {
    name: 'register',
    data: function() {
        return{
            inputRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passRules: [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Min 8 characters',
            ],
            show1: false,
            name: '',
            email: '',
            password: '',
            role: ''
        }
    },
    methods: {
        register: function(e){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                this.name = user.displayName
                console.log(`Account created for ${user.name}`)
                this.$router.push('/GetStarted');
            },
            err =>{
                alert(err.message)
            })
            e.preventDefault();
            const info= {
                name: this.name,
                role: this.role,
            }
            db.collection('members').add(info).then(() => {
                this.$router.push('/');
            })
        }
    },
  
}
</script>
