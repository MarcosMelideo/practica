<template>
    <div>
        <h1>Taeras</h1>
        <input type="text" placeholder="Nueva Tarea" v-model="nuevoItem">
        <input type="button" value="Agregar" @click="agregarItem"><br><br>
        <input type="search" placeholder="Filtrar" v-model="filtroItems">
        <Tarea 
            v-for="(item, $index) in itemsFiltrados" 
            :key="item.id" 
            :titulo="item.title"
            @eliminarItem="eliminarItem($index)">
        </Tarea>
    </div>
</template>

<script>
    import todoService from '@/services/todoService.js';
    import Tarea from '@/components/Tarea';
    import {crudItemsMixin} from "@/mixins/cruditems.js";
    export default {
        name: 'Tareas',
        mixins: [crudItemsMixin],
        created() {
            // fetch('https://jsonplaceholder.typicode.com/todos')
            //     .then(respuesta => respuesta.json())
            //         .then(datos => this.tareas = datos)
            // .catch(error => console.error(error));

            todoService.get()
                .then(items => this.items = items.data);

        },
        components: {
            Tarea
        }
    }
</script>
