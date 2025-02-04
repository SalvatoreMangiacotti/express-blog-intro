const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.send('Server del mio blog')

})

app.get('/bacheca', (req, res) => {

    const bacheca = [
        {
            titolo: 'Post ciambellone',
            contenuto: 'Dolci',
            immagine: "http://localhost:300/ciambellone.jpeg",
            tags: ['DolceFattoInCasa', 'RicettaFacile', 'DolciItaliani']

        },
        {
            titolo: 'Post cracker barbabietola',
            contenuto: 'Snack',
            immagine: "http://localhost:300/cracker_barbabietola.jpeg",
            tags: ['SnackSalutari', 'SnackAlternativi', 'RicettaVegana']

        },
        {
            titolo: 'Post pane fritto dolce',
            contenuto: 'Dolci',
            immagine: "http://localhost:300/pane_fritto_dolce.jpeg",
            tags: ['DolceFattoInCasa', 'RicettaFacile', 'DolciItaliani']

        },
        {
            titolo: 'Post pasta alla barbabietola',
            contenuto: 'Primi piatti',
            immagine: "http://localhost:300/pasta_barbabietola.jpeg",
            tags: ['CucinaCreativa', 'RicettaVegana', 'PranzoGourmet']

        },
        {
            titolo: 'Post torta paesana',
            contenuto: 'Dolci',
            immagine: "http://localhost:300/torta_paesana.jpeg",
            tags: ['DolceFattoInCasa', 'RicettaFacile', 'DolciItaliani']

        },
    ]

    res.json(bacheca);

})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

})