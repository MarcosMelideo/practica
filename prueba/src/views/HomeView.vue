<template>
  <div class="home">
    <BaseForm/>
    <Tareas/>
  </div>
</template>

<script>
// @ is an alias to /src

import Tareas from '@/components/Tareas'

export default {
  name: 'HomeView',
  components: {
    Tareas
  }
}
</script>
