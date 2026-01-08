
<template>
    <header>
        <div class="container">
            <h1>Bok-sidan . . . </h1>
            <nav>
                <ul>
                    <li><RouterLink to="/">Start</RouterLink></li>
                    <li><RouterLink to="/data">Böcker</RouterLink></li>
                    <li><RouterLink to="/info">Info</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    header {
        padding: 2% 2% 2% 4%;
        background-color: #c93434;
        color: #fff;
    }

    h1 {
        font-family: 'Brush Script MT', cursive;
        font-size: 4em;
        text-shadow: 1px 3px 4px #000;
    }

    nav {
        text-align: right;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.2em;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        color: #000;
        text-decoration: underline;
    }

    .router-link-active {
        text-decoration: underline;
    }

    ul {
        list-style: none;
    }

    li {
        display: inline-block;
        margin: 0 1.5em;
    }

</style>