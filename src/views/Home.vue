<template>
  <div class = "home">
    <h3 class = " grey--text">Homepage</h3>
    <v-container class= "my-10">
      <v-layout row class = "mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small depressed color = "grey lighten-4" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small> folder</v-icon>
              <span class = "caption text-lowercase">By task name</span>
            </v-btn>
          </template>
          <span>Sort tasks by task names</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small depressed color = "grey lighten-4" class = "mx-4" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>person</v-icon>
              <span class = "caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort tasks by person</span>
        </v-tooltip>
      </v-layout>
      <v-expansion-panels hover multiple accordion tile popout class="my-8">
      <v-expansion-panel v-for ="project in projects" :key="project.title">
        <v-expansion-panel-header>
        <v-layout row wrap :class=" `pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class = " mx-3 caption grey--text">Objective</div>
            <div class = " mx-3 subtitle-2 "> {{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class = " mx-3 caption grey--text">Person</div>
            <div class = " mx-3 subtitle-2"> {{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class = " mx-3 caption grey--text">Due by</div>
            <div class = " mx-3 subtitle-2"> {{project.due}} </div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class = " mx-3 align-end">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class = " mx-3 body-1"> {{project.content}} </div>
      </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb'
// @ is an alias to /src

export default {
  data(){
    return{
      projects:[
        
      ]
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created(){
    db.collection('tasks').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
            if(change.type === 'added'){
                this.projects.push({
                    ...change.doc.data(),
                    id: change.doc.id      
                })
            }
        })
    })
  }
}
</script>

<style>
.v-chip.completed {
  background-color: #1DE9B6 !important;
}
.v-chip.ongoing{
  background: #FFA000 !important;
}
.v-chip.overdue{
  background: #FF5252 !important;
}
.project.completed {
  border-left: 5px solid #1DE9B6
}
.project.ongoing{
  border-left: 5px solid #FFA000
}
.project.overdue{
  border-left: 5px solid #FF5252
}
</style>
