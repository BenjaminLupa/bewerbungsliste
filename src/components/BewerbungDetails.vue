<template>
    <div class="daten-label">
        <p><span>Datum:</span>{{ bewerbung.datum }}</p>
        <p>
            <span>Firma:</span>
            {{ bewerbung.firma }}
        </p>
        <p><span>Straße:</span>{{ bewerbung.straße }}</p>
        <p><span>Plz:</span>{{ bewerbung.plz }}</p>
        <p><span>Stadt:</span>{{ bewerbung.stadt }}</p>
        <p><span>Partner:</span>{{ bewerbung.ansprechpartner }}</p>
        <p><span>Absage:</span>{{ bewerbung.absageDatum }}</p>

        <div class="icons">
            <DeleteButton
                class="delBtn"
                @click="store.deleteTask(bewerbung.id)"
            /><button
                v-if="bewerbung.aktiv"
                @click="
                    store.toggleFav(bewerbung.id),
                        store.changeDate(bewerbung.id)
                "
                class="abgelehnt"
            >
                abgelehnt
            </button>
        </div>
    </div>
</template>

<script setup>
import {bewerbungsStore} from '@/store/bewerbung';
import {defineProps, ref} from 'vue';
import DeleteButton from './DeleteButton.vue';

const store = bewerbungsStore();
const props = defineProps(['anfrage', 'filter']);
const bewerbung = ref(props.anfrage);
</script>

<style scoped>
.daten-label {
    position: relative;
}
.abgelehnt {
    position: absolute;
    height: 35px;
    width: 100%;
    top: 200px;
    background: green;
    cursor: pointer;
    border-radius: 8px;
}
.abgelehnt:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
