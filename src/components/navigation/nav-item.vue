<template>
    <router-link :to="destination">{{text}}</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavItem',  
    props: {
        destination: String,
        text: String,
    },
    async mounted() {
    }
})
</script>

<style scoped>
a {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 15px;
}
a:visited {
    color: #2c3e50;
}

</style>