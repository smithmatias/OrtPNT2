<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mi App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/api-data" class="nav-link">API Data</router-link>
          </li>
          <!-- Agrega más enlaces si quieres -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales si lo necesitas */
</style>
