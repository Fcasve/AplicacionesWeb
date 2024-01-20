<template>
    <div class='meds'>
        <h2>Medicamentos</h2>
        <ul>
            <li v-for='med in meds'> 
                {{med.Cod}} - {{med.name}}
                <button v-on:click='deleteMed(med)'>x</button>
            </li>
        </ul>
    
        <form v-on:submit='addMed'>
            <input type='text' v-model='newMed.Cod' placeHolder='Cod'><br>
            <input type='text' v-model='newMed.name' placeHolder='name'><br>
            <button type='submit'> Agregar </button>

        </form> <br>
    </div>
</template>

<script>
import axios from "axios";

export default{    
    data(){ 
        return {            
            meds: [],
            newMed: {},
            backend_server: 'http://127.0.0.1:3000'
        }
    },
    methods:{
        addMed(e){
            e.preventDefault(); 
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}

            axios.post(this.backend_server + '/meds', this.newMed, { config_request })
            .then(res => {                                         
                this.meds.push(res.data);
                this.newMed = {};
            })
            .catch((error) => {
                console.log(error)
            });    
            
        },

       deleteMed(med){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'
        }

            axios.delete(this.backend_server + '/meds/' + med._id, {}, { config_request })
            .then(res => {                                         
                this.meds.splice(this.meds.indexOf(med), 1);
            })
            .catch((error) => {
                console.log(error)
            });  
        }
        


    },
    created(){                
        axios.get(this.backend_server + "/meds")
        .then(res => {
            this.meds = res.data;
            console.log(this.meds);
        });
    }

}
</script>