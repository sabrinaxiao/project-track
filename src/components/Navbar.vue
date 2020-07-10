<template>
  <nav>
      <v-app-bar flat app class= "white">
        <v-app-bar-nav-icon class = "grey--text " @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class = "text-uppercase">
          <span class="font-weight-light grey--text ">Group</span>
          <span class = "font-weight-bold grey--text  ">Connect</span>
        </v-app-bar-title>

        <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{on, attrs}">
                <v-btn depressed 
                v-bind = "attrs"
                v-on="on">
                    <v-icon left class = "grey--text">expand_more</v-icon>
                    <span class = "grey--text">Menu</span>
                    </v-btn>
            </template>
            <v-list>
                <v-list-item 
                v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-title class = "subtitle-2">{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn depressed class = "grey--text mx-5">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer" class="blue-grey lighten-2" >
         <v-layout column align-center>
           <v-flex class="mt-5">
             <v-avatar size="100">
               <img src="/avatar1.jpg">
             </v-avatar>
             <p class="white--text text-center subheading mt-1">
               Serena
             </p>
           </v-flex>
           <v-flex>
             <Popup />
           </v-flex>
         </v-layout>
         <v-list class = "my-5">
                <v-list-item v-for="link in links" :key=" link.text " router :to="link.route">
                    <v-list-item-icon class="white--text">
                        <v-icon>{{link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-title-title class="white--text subtitle-2">{{ link.text }}</v-list-title-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
      </v-navigation-drawer>
  </nav>
</template>

<script>
// @ is an alias to /src

import Popup from './Popup'
export default {
  components: { Popup },
  data(){
    return{
      drawer: false,
      links:[
        {icon: 'dashboard', text: 'Home', route: '/' },
        {icon: 'folder', text: 'My Tasks', route: '/Projects' },
        {icon: 'person', text: 'Team Members', route: '/Team' },
      ]
    }
  }
}
</script>
