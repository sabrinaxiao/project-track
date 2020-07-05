<template>
  <div class = "My Tasks">
    <h3 class = " grey--text">Projects</h3>
    <v-container class= "my-15">
        <v-expansion-panels>
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


export default {
  data(){
    return{
      projects:[
        {title: 'Working on introduction', person: 'Serena', due: 'July 10, 2020', status: 'ongoing', content: 'Awaiting the research to create an introduction.'},
        {title: 'Researching', person: 'Nate', due: 'June 20, 2020', status: 'overdue', content: 'Using databases and textbooks to research'},
        {title: 'Creating cover page', person: 'Chuck', due: 'July 20, 2020', status: 'completed', content: 'Drew an appealing cover page'},
        {title: 'Reaching out to business partners', person: 'Blair', due: 'July 19,2020', status: 'ongoing', content: 'Emailing business partners and potential investors'}
      ]
    }
  },
  computed: {
      myTasks(){
          return this.projects.filter(project=>{
              return project.person === 'Serena'
          })
      }
  }
}
</script>
