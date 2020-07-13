<template>
  <div class = "GetStarted">
    <h3 class = " grey--text">Get Started!</h3>
    <v-container class= "my-5">
        <v-card class="mx-auto outlined" max-width="500">
            <v-card-title class= "blue-grey lighten-2">
                <h4 class="mx-auto white--text">Let's get to know you a little better! </h4>
            </v-card-title>
            <v-card-text>
                <v-form class="mt-7" ref="form">
                    <v-text-field label="Name" color = "blue-grey lighten-2" v-model="name" outlined prepend-icon="mdi-account" required :rules="nameRules"></v-text-field>
                    <v-text-field label="Role" color = "blue-grey lighten-2" v-model="role" outlined prepend-icon="mdi-account" required :rules="roleRules"></v-text-field>
                    <v-btn flat color = "green lighten-3" class="mx-0 mt-3 blue-grey lighten-2 white--text" @click="submit" :loading="loading">Join the team</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</div>
</template>

<script>
import db from '@/fb'

export default{
    data(){
        return {
            name: '',
            role: '',
            nameRules: [
                v=> !!v || 'Name is required'
            ],
            roleRules: [
                v=> !!v || 'Role is required'
            ],
        }
    },
    methods: {
        submit(){
            const info= {
                name: this.name,
                role: this.role,
            }
            db.collection('members').add(info).then(() => {
                this.$router.push('/');
            })
        }
    }
}
</script>