<template>
    <div class="action">
    <p>{{name}}</p>
    <p>{{numberOfActions}} Action</p>
    <p>{{text}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Action",
    props: {
        name: {
            type: String,
            required: true
        },
        numberOfActions: {
            type: [Number, String],
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    }
})
</script>
<style>
.action {
    display: flex;
    width: 100%;
}
p {
    flex: 1;
}

</style>