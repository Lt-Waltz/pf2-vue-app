<template>
    <div class="deity">
        <h1>Deities</h1>
        <!--<button type="button" @click="showForm = !showForm">Add Deity</button>-->
        
        <div class="deities" v-if="showDeities">
            <button type="button" v-for="deity in deitiesArray" :key="deity.id" @click="expandDetails(deity)">{{deity.name}}</button>
        </div>

        <expand-deity :deity="selectedDeity" v-if="showDeity" @showDeity="displayDeity($event)"/>
        
    </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import expandDeity from "../components/ExpandDeity.vue"

export default defineComponent({
    name: 'Deities',
    components: {
        expandDeity
    },
    props: {
        
    },
    data() {
        return {
            showForm: false as Boolean,
            showDeities: true as Boolean,
            showDeity: false as Boolean,
            selectedDeity: {} as Object,
            deitiesArray: [String],
        }
    },
    methods: {
        /**
         * Function for loading the deities from "backend".
         * First makes a fetch request after which the response is .json() into a variable.
         * @returns Promise() - array of deities.
         */
        async loadDeities(): Promise<[]> {
            const response = await fetch("http://localhost:3001/deities");
            const result = await response.json();
            return result;
        },
        /**
         * Function changes the visibility of the expand-deity component with
         * conditional rendering.
         * Takes the data emitted from expand-deity component and changes the
         * showDeity variable accordingly.
         */
        async displayDeity(data: Boolean): Promise<void> {
            this.showDeity = data;
        },
        /**
         * Function changes the visibility of the showDeity variable enabling the
         * expand-deity to be rendered conditionally.
         * Takes the user input and places it into selectedDeity variable.
         */
        async expandDetails(deity: Object): Promise<void> {
            this.selectedDeity = deity
            this.showDeity = true;
        },
    },
    async mounted() {
        this.deitiesArray = await this.loadDeities();
    }
})


</script>
<style scoped>
.deity {
    max-width: 1280px;
    width: 100%;
    margin: 60px auto;
}
.deity h1 {
    text-decoration: underline;
}
.deity button {
    border: none;
    background-color: white;
    font-size: 15px;
    padding: 15px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: underline;
}
.deity button:hover {
    cursor: pointer;
}
.deity button:focus {
    background-color: #f1f1f1;
    border: 1px solid black;
}

.deities {
    width: 100%;
}

.deities button {
    border: none;
    background-color: white;
    font-size: 20px;
    margin: 15px;
    padding: 15px;
    font-weight: bold;
    color: #2c3e50;
    border: 1px solid transparent;
}
.deities button:hover {
    cursor: pointer;
}
.deities button:focus {
    background-color: #f1f1f1;
    border: 1px solid black;
}

.addDeityForm {
    padding: 20px;
    border: 1px solid black;
}
.addDeityForm input[type="checkbox"] {
    transform: scale(1.5);
}
.alignments label {
    padding: 15px;
}
.alignments {
    padding: 15px;
}
#addDomain {
    margin: 30px;
    padding: 0;
    border: none;
}

</style>