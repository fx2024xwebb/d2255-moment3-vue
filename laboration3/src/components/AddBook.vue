
<template>

    <form @submit.prevent="addBook">
        <label for="name">Titel:</label>
        <br>
        <input type="text" name="name" id="name" v-model="name">
        <br>
        <label for="year">Utgivningsår:</label>
        <br>
        <input type="text" name="year" id="year" v-model="year">
        <br>
        <p>Har du läst boken?</p>

        <input type="radio" name="read" id="yes" value="yes" v-model="read">Ja
        <input type="radio" name="read" id="no" value="no" v-model="read">Nej
        <br>
        <input type="submit" value="Lägg till">

    </form>

    <p class="error" v-if="error">{{ error }}</p>

</template>

<script setup>

    import  { ref } from 'vue';

    const name = ref('');
    const year = ref('');
    const read = ref('');

    const error = ref("");
    
    const emits = defineEmits(["refreshList"]);

    const addBook = async () => {

        const yearNr = Number(year.value);

        if(name.value.length <1) {
            error.value = "Titel behöver vara minst ett tecken";
            return;
        }

        if (isNaN(year.value) || year.value.length !==4) {
            error.value = "Ange ett korrekt årtal tex: 1995";
            return;
        }

        /* if(year.value.trim() === "" || isNaN(year.value) || year.value.length <4 || year.value.length > 4) {
            error.value = "År måste anges med siffror i formatet: ÅÅÅÅ, t.ex. 1995";
            return;
        } */

        if(read.value === "") {
            error.value = "Vänligen välj om du läst boken eller ej";
        }

        // TEST
        console.log(name.value);
        console.log(year.value);
        console.log(read.value);

        const newBook = {
            name: name.value,
            year: year.value,
            read: read.value === 'yes'
        }

        console.table(newBook);

        error.value = "";

        try {

            const res = await fetch("http://localhost:5000/books", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            })

            if(res.ok) {
                console.log("OK!");
                emits("refreshList");

                // Rensa formulär
                name.value = "";
                year.value = "";
                read.value = "";
            }

        } catch (error) {
            console.log("Error: " + error);
        }

    }

</script>

<style scoped>
    
    form {
        padding-bottom: 1.5em;
    }

    label {
        font-weight: bold;
    }

    input[type=text] {
        padding: 1%;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    #title {
        width: 250px;
    }

    #year {
        width: 50px;
    }

    input[type=submit] {
        margin-top: 1.2em;
        padding: 1%;
        width: 100px;
        background-color: #cf4f5c;
        color: #fff;
        border-radius: 5px;
        border: none;
    }

    input[type=submit]:hover {
        background-color: #419f52;
    }

    .error {
        color: #f00;
    }

    .error::before {
        content: "* ";
    }  

    @media all and (max-width: 600px) {
        
        input[type=text] {
            padding: 4%;
            font-size: 1.2em;
        }

        input[type=submit] {
            margin-left: 25%;
            padding: 4%;
            width: 150px;
            font-size: 1.5em;
        }

    }
    
</style>