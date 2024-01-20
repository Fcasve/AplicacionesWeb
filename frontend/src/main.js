import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
import PatientComponent from './components/PatientComponent.vue'
import MedsComponent from './components/MedsComponent.vue'
import DiagComponent from './components/DiagComponent.vue'
import TreatsComponent from './components/TreatsComponent.vue'
//createApp(App).mount('#app')

// 1. Define route components.
// These can be imported from other files
const Pacientes = { template: '<div>Paciente</div>' }
const Medicamentos = { template: '<div>Meds</div>' }
const Tratamientos = { template: '<div>Treats</div>' }
const Diagnosticos = { template: '<div>Diag</div>' }


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/Pacientes', component: PatientComponent },
  { path: '/Medicamentos', component: MedsComponent },
  { path: '/Tratamientos', component: TreatsComponent },
  { path: '/Diagnosticos', component: DiagComponent },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!