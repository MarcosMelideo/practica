<template>
  <div>
    <Logo />
    <nav>
      <router-link to="/">Home</router-link> |
      <RouterLink :to="{name: 'posts'}">Posts</RouterLink>
    </nav>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>