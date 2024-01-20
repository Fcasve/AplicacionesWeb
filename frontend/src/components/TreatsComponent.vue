<template>
    <div class='treats'>
        <h2>Tratamientos</h2>
        <ul>
            <li v-for='treat in treats'> 
                {{treat.Cod}} - {{treat.name}}
                <button v-on:click='deleteTreat(treat)'>x</button>
            </li>
        </ul>
    
        <form v-on:submit='addTreat'>
            <input type='text' v-model='newTreat.Cod' placeHolder='Cod'><br>
            <input type='text' v-model='newTreat.name' placeHolder='name'><br>
            <button type='submit'> Agregar </button>

        </form> <br>
    </div>
</template>

<script>
import axios from "axios";

export default{    
    data(){ 
        return {            
            treats: [],
            newTreat: {},
            backend_server: 'http://127.0.0.1:3000'
        }
    },
    methods:{
        addTreat(e){
            e.preventDefault(); 
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}

            axios.post(this.backend_server + '/treats', this.newTreat, { config_request })
            .then(res => {                                         
                this.treats.push(res.data);
                this.newTreat = {};
            })
            .catch((error) => {
                console.log(error)
            });    
            
        },

       deleteTreat(treat){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'
        }

            axios.delete(this.backend_server + '/treats/' + treat._id, {}, { config_request })
            .then(res => {                                         
                this.treats.splice(this.treats.indexOf(treat), 1);
            })
            .catch((error) => {
                console.log(error)
            });  
        }
        


    },
    created(){                
        axios.get(this.backend_server + "/treats")
        .then(res => {
            this.treats = res.data;
            console.log(this.treats);
        });
    }

}
</script>