import {defineStore} from 'pinia';

export const bewerbungsStore = defineStore('bewerbungen', {
    state: () => ({
        bewerbungen: [],
    }),
    getters: {
        favs() {
            return this.bewerbungen.filter((b) => b.aktiv);
        },
        notFavs() {
            return this.bewerbungen.filter((b) => !b.aktiv);
        },
    },
    actions: {
        async getTasks() {
            const res = await fetch('http://localhost:3000/bewerbungen');
            const data = await res.json();
            this.bewerbungen = data;
        },
        async addTask(bewer) {
            this.bewerbungen.push(bewer);

            const res = await fetch('http://localhost:3000/bewerbungen', {
                method: 'POST',
                body: JSON.stringify(bewer),
                headers: {'Content-Type': 'application/json'},
            });

            if (res.error) {
                console.log(res.error);
            }
        },
        async deleteTask(id) {
            this.bewerbungen = this.bewerbungen.filter((t) => {
                console.log(id);
                return t.id !== id;
            });
            const res = await fetch('http://localhost:3000/bewerbungen/' + id, {
                method: 'DELETE',
            });
            console.log(res);

            if (res.error) {
                console.log(res.error);
            }
        },
        async toggleFav(id) {
            const bewerbungen = this.bewerbungen.find((t) => t.id === id);
            bewerbungen.aktiv = !bewerbungen.aktiv;

            const res = await fetch('http://localhost:3000/bewerbungen/' + id, {
                method: 'PATCH',
                body: JSON.stringify({aktiv: bewerbungen.aktiv}),
                headers: {'Content-Type': 'application/json'},
            });

            if (res.error) {
                console.log(res.error);
            }
        },
        async changeDate(id) {
            const bewerbungen = this.bewerbungen.find((t) => t.id === id);
            bewerbungen.absageDatum = new Date().toLocaleString('de-DE');

            const res = await fetch('http://localhost:3000/bewerbungen/' + id, {
                method: 'PATCH',
                body: JSON.stringify({absageDatum: bewerbungen.absageDatum}),
                headers: {'Content-Type': 'application/json'},
            });

            if (res.error) {
                console.log(res.error);
            }
        },
    },
});
