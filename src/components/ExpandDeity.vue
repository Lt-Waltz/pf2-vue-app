<template>

    <div class="expand">
        <button id="closeBtn" type="button" @click="close()">X</button>
        <div class="expand-header">
            <h2>{{deity.name}}</h2>
            <h3>{{deity.title}}</h3>
            <p>Alignment: {{deity.alignment}}</p>
        </div>

        <div class="expand-mythos">
            <h3>Mythos</h3>
            <p>{{deity.story}}</p>
        </div>

        <div class="expand-details">
            <p>Edicts:</p>
            <li v-for="(edict) in deity.edicts" :key="edict">{{edict}}</li>

            <p>Anathema:</p>
            <li v-for="(anathema) in deity.anathema" :key="anathema">{{anathema}}</li>

            <p>Areas of Concern:</p>
            <li v-for="(areas) in deity.areas" :key="areas">{{areas}}</li>

            <p>Follower Alignment:</p>
            <li v-for="(alignment) in deity.followers" :key="alignment">{{alignment}}</li>

            <h3>Devotee Benefits</h3>
            <p>Divine Font:</p>
            <li v-for="font in deity.font" :key="font">{{font}}</li>

            <p>Domains:</p>
            <li v-for="(domain) in deity.domains" :key="domain">{{domain}}</li>

            <p>Cleric spells:</p>
            <li v-for="(spell, name) in deity.spells" :key="spell">{{name}}: {{spell}}</li>

            <p>Favored Weapon: {{deity.weapon}}</p>
            <p>Divine Skill: {{deity.skill}}</p>
        </div>

        <div class="expand-image">
            <img :src="deity.image"/>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Expand",
    props: {
        deity: Object
    },
    data() {
        return {

        }
    },
    methods: {
        async close() {
            this.$emit('showDeity', false);
        }
    },
    async mounted() {
    }
})

</script>
<style scoped>
.expand {
    max-width: 1280px;
    width: 100%;
    margin: auto;
    background-color: #f1f1f1;
    border: 1px solid black;
    text-align: left;
    padding: 15px;
}
.expand-header h2 {
    text-decoration: underline;
}
#closeBtn {
    color: red;
    background-color: #f1f1f1;
    border: none;
    width: 30px;
    height: 30px;
    padding: 5px;
    font-size: 20px;
    float: right;
    margin: 0;
}
#closeBtn:hover {
    cursor: pointer;
    background-color: red;
    color: black;
}
</style>
