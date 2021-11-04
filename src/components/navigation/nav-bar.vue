<template>
    <div class="header">
        <NavItem destination="/deities" text="Deities" />
        <NavItem destination="/actions" text="Actions" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavItem from './nav-item.vue'

export default defineComponent({
    name: 'Navbar',
    components: {
        NavItem,

    }
})
</script>

<style scoped>

</style>
