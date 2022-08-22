<template>
    <div>
        <p>Esto es un Post con id: {{ this.$route.params.id }}</p>
    </div>
</template>

<script>
export default {
    beforeRouteUpdate(){

    },
    mounted() {
        console.log(this.$route);
    }
}
</script> 