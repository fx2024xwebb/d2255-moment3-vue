
<!-- Start -->

<template>

    <img src="/public/stack-books.jpg" alt="Böcker" id="banner">

    <h2>Välkommen!</h2>
    <p> 
        Den här sidan handlar om böcker. <br>
        I tonåren brukade jag läsa mycket böcker. Det blir inte så ofta längre,
        men ibland kan det vara trevligt om man hittar något spännande att läsa :)
    </p>

    <p>Här kan du klicka dig vidare på sidan...:</p>

    <strong><p><RouterLink to="/data">Boklistan</RouterLink></p></strong>
    <p>Här kan du se en lista över alla inlagda böcker eller lägga till själv!</p>
    
    <strong><p><RouterLink to="/info">Information</RouterLink></p></strong>
    <p>Här kan du läsa information om sidan och dess utveckling</p>

</template>

<style scoped>
    #banner {
        width: 100%;
        margin: 0 auto;
        border-radius: 6px;
    }
</style>