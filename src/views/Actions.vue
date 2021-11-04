<template>
    <div class="actions">
        <h1>Actions</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

interface StackInterface {
    size: number;
    top: number | null
    // eslint-disable-next-line no-unused-vars
    push(val: number): number
    pop(): number | null
}

class Stack implements StackInterface {
    size: number
    top: number | null

    constructor() {
        this.size = 0;
        this.top = null;
    }

    push(val: number): number {
        this.top = val;
        this.size += 1;
        return this.size;
    }
    pop(): number | null {
        if(this.size > 0) {
            let removeTop = this.top
            this.top = removeTop;
            this.size -= 1;
            removeTop = null;
            return removeTop;
        }
        return null;
    }
    
}

export default defineComponent({
    name: 'Actions',
    data() {
        return  {
            stack: new Stack,
            popData: 0 as any
        }
    },
    methods: {

    },
    mounted() {
        this.stack.push(1);
        console.log(this.stack);
        this.stack.push(2);
        console.log(this.stack);
        this.popData = this.stack.pop();
        console.log(this.popData);
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


