<template>
  <div class = "Team">
    <h3 class = " grey--text">Team</h3>
    <v-container class= "my-5">
      <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name" class="text-center">
              <v-card flat color= "grey lighten-4" class=" text-xs-center ma-3 ">
                  <v-responsive class="pt-4">
                      <!--<v-avatar size="100">
                          <img :src="person.avatar"> 
                      </v-avatar> -->
                  </v-responsive>
                  <v-card-text>
                      <div class="black--text subheading">{{person.name}}</div>
                      <div class="subheading">{{person.role}}</div>
                  </v-card-text>
                  <v-card-actions> 
                        <v-btn depressed color="grey lighten-4" >
                            <v-icon small left class="grey--text">messages</v-icon>
                            <span class="grey--text">Message</span>
                        </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'

export default {
  data(){
      return{
          team:[
              
          ]
      }
  },
  created(){
    db.collection('members').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
            if(change.type === 'added'){
                this.team.push({
                    ...change.doc.data(),
                    id: change.doc.id      
                })
            }
        })
    })
  }
}
</script>
