<template>
    <div class="actions">
        <h1>Actions</h1>
        <div class="legend">

        </div>
        <div class="foff" v-for="action in actions" :key="action.id">
            <action :name="action.name" :numberOfActions="action.number" :text="action.text"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import Action from '@/components/Action.vue'
import listOfActions from '@/assets/listOfActions'

export default defineComponent({
    name: 'Actions',
    components: {
        Action,
    },
    data() {
        return  {
            actions: listOfActions
        }
    },
    methods: {

    },
    mounted() {
    }
})
</script>

<style scoped>
.actions {
    max-width: 1280px;
    width: 100%;
    margin: 60px auto;
}
.actions h1 {
    text-decoration: underline;
}
.actions button {
    border: none;
    background-color: white;
    font-size: 15px;
    padding: 15px;
    font-weight: bold;
    color: #2c3e50;
}
.actions button:hover {
    cursor: pointer;
}
.actions button:focus {
    background-color: #f1f1f1;
    border: 1px solid black;
}
</style>


