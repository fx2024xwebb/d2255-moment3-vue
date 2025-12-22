
<!-- Data/Tabell -->

<template>
    <h2>Böcker</h2>
    <p>Här kan du se inlagda böcker och lägga till och ta bort från listan.</p>

    <BookItem v-for="book in books" :book="book" :key="book._id" />

</template>


<script setup>

    import BookItem from '@/components/BookItem.vue';
    import { ref } from 'vue';

    const books = ref([{
        name: "Bok 1",
        year: "2025",
        read: true,
        _id: "1"
    },
    {
    name: "Bok 2",
        year: "2025",
        read: true,
        _id: "2"
    }

    ])

</script>