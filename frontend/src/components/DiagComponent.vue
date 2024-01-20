<template>
    <div class='diags'>
        <h2>Diagnosticos</h2>
        <ul>
            <li v-for='diag in diags'> 
                {{diag.Cod}} - {{diag.name}}
                <button v-on:click='deleteDiag(diag)'>x</button>
            </li>
        </ul>
    
        <form v-on:submit='addDiag'>
            <input type='text' v-model='newDiag.Cod' placeHolder='Cod'><br>
            <input type='text' v-model='newDiag.name' placeHolder='name'><br>
            <button type='submit'> Agregar </button>

        </form> <br>
    </div>
</template>

<script>
import axios from "axios";

export default{    
    data(){ 
        return {            
            diags: [],
            newDiag: {},
            backend_server: 'http://127.0.0.1:3000'
        }
    },
    methods:{
        addDiag(e){
            e.preventDefault(); 
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}

            axios.post(this.backend_server + '/diags', this.newDiag, { config_request })
            .then(res => {                                         
                this.diags.push(res.data);
                this.newDiag = {};
            })
            .catch((error) => {
                console.log(error)
            });    
            
        },

       deleteDiag(diag){
            var config_request={'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'
        }

            axios.delete(this.backend_server + '/diags/' + diag._id, {}, { config_request })
            .then(res => {                                         
                this.diags.splice(this.diags.indexOf(diag), 1);
            })
            .catch((error) => {
                console.log(error)
            });  
        }
        


    },
    created(){                
        axios.get(this.backend_server + "/diags")
        .then(res => {
            this.diags = res.data;
            console.log(this.diags);
        });
    }

}
</script>