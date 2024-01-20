<script setup>

</script>


<template>
  <h2>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Clinica</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link d-flex align-center" aria-current="page" to="/Pacientes">Pacientes</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link d-flex align-center" aria-current="page" to="/Medicamentos">Medicamentos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link d-flex align-center" aria-current="page" to="/Tratamientos">Tratamientos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link d-flex align-center" aria-current="page" to="/Diagnosticos">Diagnosticos</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</h2>
  <div id="'app">
    <router-view></router-view>
  </div>
 <!-- <h1>Menu</h1>
  <div class="header">
    <ul class="header_lista">
      <li class="header_lista_item">
        <a 
          href="#"
          class="header_lista_item_link">
            Pacientes
        </a>
      </li>
      <li class="header_lista_item">
        <a 
          href="#"
          class="header_lista_item_link">
            Medicamentos
        </a>
      </li>
      <li class="header_lista_item">
        <a 
          href="#"
          class="header_lista_item_link">
            Diagnosticos
        </a>
      </li>
      <li class="header_lista_item">
        <a 
          href="#"
          class="header_lista_item_link">
            Tratamientos
        </a>
      </li>
    </ul>

  </div> -->
<div>
<!--   
  <PatientComponent/>
  <MedsComponent/>
  <DiagComponent/>
  <TreatsComponent/>  -->
</div>
</template>

