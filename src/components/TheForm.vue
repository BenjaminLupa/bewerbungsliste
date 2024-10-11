<template>
    <div class="form">
        <form @submit.prevent="handleSubmit">
            <div class="steht">
                <label for="firma">Firma:</label>
                <input
                    type="text"
                    v-model="firma"
                    placeholder="Firma"
                    name="firma"
                />
            </div>
            <br />
            <div class="steht">
                <label for="straße">Straße:</label>
                <input
                    type="text"
                    v-model="straße"
                    placeholder="Straße"
                    name="straße"
                />
            </div>
            <br />
            <div class="steht">
                <label for="plz">Postleitzahl:</label>
                <input type="text" v-model="plz" placeholder="plz" name="plz" />
            </div>
            <br />
            <div class="steht">
                <label for="stadt">Stadt:</label>
                <input
                    type="text"
                    v-model="stadt"
                    name="stadt"
                    placeholder="stadt"
                />
            </div>
            <br />
            <div class="steht">
                <label for="partner">Ansprechpartner:</label>
                <input
                    name="partner"
                    type="text"
                    v-model="ansprechpartner"
                    placeholder="Ansprechpartner"
                />
            </div>
            <button>hinzufügen</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {bewerbungsStore} from '@/store/bewerbung';

const store = bewerbungsStore();

const firma = ref('');
const plz = ref('');
const straße = ref('');
const stadt = ref('');
const ansprechpartner = ref('');

const handleSubmit = () => {
    store.addTask({
        id: Math.floor(Math.random() * 1000).toString(),
        datum: new Date().toLocaleString('de-DE'),
        firma: firma.value,
        straße: straße.value,
        plz: plz.value,
        stadt: stadt.value,
        ansprechpartner: ansprechpartner.value,
        aktiv: true,
        absageDatum: '',
    });
    firma.value = '';
    plz.value = '';
    straße.value = '';
    stadt.value = '';
    ansprechpartner.value = '';
};
</script>

<style scoped>
.form {
    background-color: aqua;
    width: 300px;
    min-height: 100vh;
}
input {
    background: lightblue;
    border: none;
    position: absolute;
    left: 120px;
    padding: 5px;
    border-radius: 4px;
}
.form button {
    margin-left: 180px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 12px;
}
form {
    padding-top: 25px;
    padding-left: 6px;
}
.steht {
    margin-top: 1px;
}
</style>
