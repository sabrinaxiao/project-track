<template>
  <div class = "home">
    <h3 class = " grey--text">Homepage</h3>
    <v-container class= "my-15">
      <v-card flat class = "grey lighten-4 my-2" v-for ="project in projects" :key="project.title">
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
      </v-card>
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
      ]
    }
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
