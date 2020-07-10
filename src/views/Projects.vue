<template>
  <div class = "My Tasks">
    <h3 class = " grey--text">My Tasks</h3>
    <v-container class= "my-10">
        <v-expansion-panels hover focusable multiple>
            <v-expansion-panel v-for="project in myTasks" :key="project.title">
                <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div class="px-4 grey--text font-weight-bold"> due by {{project.due }} </div>
                   <div class="px-4 grey--text"> {{project.content}} </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'

export default {
  data(){
    return{
      projects:[
        
      ]
    }
  },
  computed: {
      myTasks(){
          return this.projects.filter(project=>{
              return project.person === 'Blair'
          })
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
