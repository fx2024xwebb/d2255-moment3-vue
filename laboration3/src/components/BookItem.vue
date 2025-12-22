
<template>
    <article @click="$emit('deleteBook', book._id)">
        <h3>{{ book.name }}</h3>
        <p> Utgivningsår: {{ book.year }}</p>
        <p> Läst? {{ book.read }}</p>
        <p> {{ book._id }}</p>
    </article>
</template>


<script setup>

    const props = defineProps({
        book: Object
    })

    const emits = defineEmits(["deleteBook"]);

</script>


<style scoped>
    
    article {
        max-width: 500px;
        padding: 2% 4% 2% 4%;
        margin-bottom: 0.6em;
        background-color: #d5d5d5;
        border-radius: 4px;
    }

    article:hover {
        background-color: #cdacac;
        cursor: pointer;
    }

</style>