<template>
<div class="Main">
  <nav-bar/>
    <router-view></router-view>
</div>
</template>

<script lang="ts">
//import { Options, Vue } from 'vue-class-component';

import { defineComponent } from '@vue/runtime-core';
import NavBar from './components/navigation/nav-bar.vue';

const deitiesHeadersArray = [ "id", "name", "title", "category", "alignment", "follower alignments",
 "divine font", "domains", "weapon", "story", "edicts", "anathema", "Areas of Concern"]

export default defineComponent({
  name: 'App',
  components: {
    //Actions,
    //Deities,
    NavBar
  },
  data() {
    return {
      
      deitiesHeaders: deitiesHeadersArray
    }
  },
  methods: {

  },
  async mounted() {
    
  }
})

/*@Options({
  components: {
    HelloWorld,
    Deities
  },
  methods: {
    async loadDeities() {
      const response = await fetch("http://localhost:3001/deities")
      const result = await response.json();
      return result;
    }
  },
  async mounted() {
    const deityArray = await this.loadDeities();
    console.log(deityArray);
  }
})*/
/*export default class App extends Vue {
  
}*/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  width: 50%;
  margin: 60px auto;
}
.header {
  /*display: flex;
  flex-wrap: wrap;*/
}
</style>

