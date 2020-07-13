<template>
    <div class = "text-center">
        <v-dialog v-model="dialog" max width = "600">
            <template v-slot:activator="{on, attrs}">
                <v-btn depressed v-bind = "attrs" v-on="on">Assign new tasks </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <h4 class="align-center">Add a New Task </h4>
                </v-card-title>
                <v-card-text>
                    <v-form class="mt-7" ref="form">
                        <v-text-field label="Title" color = "blue-grey lighten-2" v-model="title"  prepend-icon="create" required :rules="titleRules"></v-text-field>
                        <v-text-field label="Person" color = "blue-grey lighten-2" v-model="person" prepend-icon="person" required :rules="nameRules"></v-text-field>
                        <v-textarea :value="hi" label="Information" color = "blue-grey lighten-2" v-model="content" prepend-icon="edit" required :rules="infoRules"></v-textarea>
                        <v-col cols="12" sm="6" md="6">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field :value="due" label="Due date" prepend-icon="date_range"  v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="due" no-title scrollable></v-date-picker>
                            </v-menu>
                        </v-col>
                    <v-btn flat color = "green lighten-3" class="mx-0 mt-3 blue-grey lighten-2 white--text" @click="submit" :loading="loading">Add Task</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
import db from '@/fb'
export default{
    data(){
        return {
            title: '',
            person: '',
            content: '',
            due: null,
            nameRules: [
                v=> !!v || 'Name is required'
            ],
            titleRules:[
                v=> !!v || 'Title is required'
            ],
            infoRules:[
                v=> !!v || 'Information is required'
            ],
        }
    },
    methods: {
        submit(){
            if(this.$refs.form.validate()){
            const task= {
                title: this.title,
                person: this.person,
                content: this.content,
                due: this.due,
                status: 'ongoing'
            }
            db.collection('tasks').add(task).then(() => {
                this.dialog = false;
            })
        }
        }
    },
}
</script>

