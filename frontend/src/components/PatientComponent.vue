<template>
    <div class='users'>
        <h2>Pacientes</h2>
        <ul>
            <li v-for='patient in users'> 
                {{patient.DNI}} - {{patient.name}} - {{ patient.lastname }} - {{ patient.age }} - {{ patient.correo }} - {{ patient.cell }}
                <button v-on:click='deletePatient(patient)'>x</button>
            </li>
        </ul>
    
        <form v-on:submit='addPatient'>
            <input type='text' v-model='newPatient.DNI' placeHolder='DNI'><br>
            <input type='text' v-model='newPatient.name' placeHolder='name'><br>
            <input type='text' v-model='newPatient.lastname' placeHolder='lastname'><br>
            <input type='number' v-model='newPatient.age' placeHolder='age'><br>
            <input type='text' v-model='newPatient.correo' placeHolder='correo'><br>
            <input type='number' v-model='newPatient.cell' placeHolder='cell'><br>
            <button class="button is-primary" type='submit'> Agregar </button>

        </form> <br>
    </div>
</template>

<script>
import axios from "axios";

export default{    
    data(){ 
        return {            
            users: [],
            newPatient: {},
            getPatient:{},
            backend_server: 'http://127.0.0.1:3000'
        }
    },
    methods:{
        addPatient(e){
            e.preventDefault(); 
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}

            axios.post(this.backend_server + '/users', this.newPatient, { config_request })
            .then(res => {                                         
                this.users.push(res.data);
                this.newPatient = {};
            })
            .catch((error) => {
                console.log(error)
            });    
            
        },


       deletePatient(patient){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'
        }

            axios.delete(this.backend_server + '/users/' + patient._id, {}, { config_request })
            .then(res => {                                         
                this.users.splice(this.users.indexOf(patient), 1);
            })
            .catch((error) => {
                console.log(error)
            });  
        },

        consultPatient(patient){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'
        }

            axios.get(this.backend_server + '/users/' + patient._id, {}, { config_request })
            .then(res => {                                         
                this.users.splice(this.users.indexOf(patient), 1);
            })
            .catch((error) => {
                console.log(error)
            });  
        }
      

    },
    created(){                
        axios.get(this.backend_server + "/users")
        .then(res => {
            this.users = res.data;
            console.log(this.users);
        });
    }

}
</script>