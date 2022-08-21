<template>
  <div>
    <h1>Posts</h1>
    <input type="text" placeholder="Nueva Tarea" v-model="nuevoItem" />
    <input type="button" value="Agregar" @click="agregarItem" /><br /><br />
    <input type="search" placeholder="Filtrar" v-model="filtroItems" />
    <ul>
      <li
        v-for="(item, $index) in itemsFiltrados"
        :key="item.id"
        @eliminarItem="eliminarItem($index)">
        {{item.title}} 
      </li>
    </ul>
  </div>
</template>

<script>
import postService from "@/services/postService.js";
import {crudItemsMixin} from "@/mixins/cruditems.js";
export default {
  name: "PostsList",
  mixins: [crudItemsMixin],
  created() {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(respuesta => respuesta.json())
    //         .then(datos => this.tareas = datos)
    // .catch(error => console.error(error));

    postService.get().then((items) => (this.items = items.data));
  }
};
</script>
