
<!-- Data/Tabell -->

<template>
    <h2>Böcker</h2>
    <p>Här kan du se inlagda böcker och lägga till och ta bort från listan.</p>

    <BookItem v-for="book in books" :book="book" :key="book._id" @delete-book="deleteBook" />

</template>


<script setup>

    import BookItem from '@/components/BookItem.vue';
    import { ref, onMounted } from 'vue';

    const books = ref([]);

    onMounted(() => {
        getBooks();
    })

    /* const books = ref([{
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

    ]) */

    const getBooks = async () => {

        try {

            const res = await fetch("http://localhost:5000/books");

            if(res.ok) {
                const data = await res.json();
                books.value = data;
            }

        } catch (error) {
            console.log("Error: " + error);
        }

    }

    const deleteBook = async (id) => {
        
        try {

            const res = await fetch("http://localhost:5000/books/" + id, {
                method: "DELETE"
            });

            if(res.ok) {
                console.log("res ok");
                getBooks();
            }




        } catch (error) {
            console.log("Error: " + error);
        }
    }

</script>