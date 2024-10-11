<template>
    <div class="body">
        <the-form />
        <nav class="filter">
            <button @click="filter = 'all'">All tasks</button>
            <button @click="filter = 'favs'">favs tasks</button>
            <button @click="filter = 'notFavs'">NotFavs tasks</button>
        </nav>
        <div class="bewerb">
            <div v-if="filter === 'all'">
                <TheTable :bewerbung="store.bewerbungen" />
            </div>
            <div v-if="filter === 'favs'">
                <TheTable :bewerbung="store.favs" :filter="filter" />
            </div>
            <div v-if="filter === 'notFavs'">
                <TheTable :bewerbung="store.notFavs" :filter="filter" />
            </div>
        </div>
    </div>
</template>

<script setup>
import TheForm from '@/components/TheForm.vue';
import TheTable from '@/components/TheTable.vue';
import {bewerbungsStore} from '@/store/bewerbung';
import {ref} from 'vue';

const store = bewerbungsStore();
store.getTasks();
const filter = ref('favs');
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.body {
    position: relative;
}
.bewerb {
    display: flex;
    justify-content: center;
}
</style>
