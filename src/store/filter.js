import {defineStore} from 'pinia';
export const bewerbungsfilter = defineStore('bewerbungsfilter', {
    state: () => ({
        filter: 'all',
    }),
});
