<template>
  <div class="container my-5">
    <h2>Información de la API</h2>

    <!-- Filtro -->
    <div class="mb-3">
      <label for="userIdFilter" class="form-label">Filtrar por User ID</label>
      <input
        type="number"
        id="userIdFilter"
        v-model="userIdFilter"
        class="form-control"
        placeholder="Ingresa un User ID"
      />
    </div>

    <!-- Cargando y error -->
    <div v-if="loading">Cargando...</div>
    <div v-if="error" class="alert alert-danger">
      ¡Error al cargar los datos!
    </div>

    <!-- Lista de datos filtrados -->
    <ul v-if="filteredData.length">
      <li v-for="item in filteredData" :key="item.id" class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.body }}</p>
        </div>
      </li>
    </ul>

    <div v-if="filteredData.length === 0" class="alert alert-warning">
      No se encontraron posts para el User ID seleccionado.
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ApiData",
  data() {
    return {
      data: [],
      loading: true,
      error: false,
      userIdFilter: "", // Filtro por userId
    };
  },
  computed: {
    filteredData() {
      // Filtra los datos según el userIdFilter
      if (this.userIdFilter === "") {
        return this.data; // Si no hay filtro, mostrar todos los datos
      }
      return this.data.filter((item) => item.userId == this.userIdFilter);
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.data = response.data;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
