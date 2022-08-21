<template>
  <div id="app">
    <Navegacion/>
    <!-- <BaseForm/> -->
    <!-- <ul>
      <RouterLink destino="black-cat-1"/>
      <RouterLink destino="black-cat-2"/>
      <RouterLink destino="black-cat-3"/>
    </ul>
    <RouterView/> -->
  </div>
</template>

<script>
// import RouterView from '@/components/RouterView.vue';
// import RouterLink from '@/components/RouterLink.vue';
import Navegacion from "@/components/Navegacion";
// import BaseForm from "@/components/BaseForm";
export default {
  components: {
    Navegacion,
    // RouterView,
    // RouterLink,
    //BaseForm
},
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
ul{
  padding: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
