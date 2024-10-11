<template>
    <div class="grid">
        <div
            class="container"
            v-for="anfrage in props.bewerbung"
            :key="anfrage"
            :class="{favs: anfrage.aktiv}"
        >
            <div class="card">
                <div class="box">
                    <div class="icon">
                        <div class="iconBox">
                            <font-awesome-icon
                                class="ft-icon"
                                :icon="['fas', 'calendar']"
                            />
                        </div>
                    </div>
                    <div class="content">
                        <BewerbungDetails
                            :filter="props.filter"
                            :anfrage="anfrage"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BewerbungDetails from '@/components/BewerbungDetails.vue';

import {defineProps} from 'vue';

const props = defineProps(['bewerbung', 'filter']);
</script>

<style>
.test {
    background: black;
}

.grid {
    display: flex;
    flex-wrap: wrap;
}
.container {
    --farben: #e83131;
    margin: 5px;
    border: 2px solid black;
    min-width: 200px;
    width: 240px;
    height: 280px;
    border-radius: 15px;
    padding: 5px;
    background: linear-gradient(var(--farben), #d8dee8);
}
.favs {
    --farben: #85e85a;
}
</style>
