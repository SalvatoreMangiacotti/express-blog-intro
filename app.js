const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.send('Server del mio blog');

})

app.use(express.static('public'));

app.get('/bacheca', (req, res) => {

    const bacheca = [
        {

            titolo: 'Il Ciambellone perfetto',
            contenuto: 'Una deliziosa ciambella soffice e fragrante, perfetta per ogni occasione.',
            immagine: "http://localhost:3000/postpiatti/ciambellone.jpeg",
            tags: ['DolceFattoInCasa', 'RicettaFacile', 'DolciItaliani']

        },
        {

            titolo: 'Cracker alla barbabietola',
            contenuto: 'Snack croccante e salutare a base di barbabietola, perfetto per una pausa energizzante.',
            immagine: "http://localhost:3000/postpiatti/cracker_barbabietola.jpeg",
            tags: ['SnackSalutari', 'SnackAlternativi', 'RicettaVegana']

        },
        {

            titolo: 'Pane fritto dolce',
            contenuto: 'Un dessert croccante e goloso, perfetto per soddisfare la tua voglia di dolce.',
            immagine: "http://localhost:3000/postpiatti/pane_fritto_dolce.jpeg",
            tags: ['DolceFattoInCasa', 'RicettaFacile', 'DolciItaliani']

        },
        {

            titolo: 'Pasta alla barbabietola',
            contenuto: 'Un primo piatto creativo e colorato con barbabietola, ideale per un pranzo gourmet.',
            immagine: "http://localhost:3000/postpiatti/pasta_barbabietola.jpeg",
            tags: ['CucinaCreativa', 'RicettaVegana', 'PranzoGourmet']

        },
        {

            titolo: 'Torta paesana',
            contenuto: 'Un dolce tradizionale e rustico, ricco di sapori autentici e genuini.',
            immagine: "http://localhost:3000/postpiatti/torta_paesana.jpeg",
            tags: ['DolceFattoInCasa', 'RicettaFacile', 'DolciItaliani']

        },
    ]

    res.json(bacheca);

})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`);

})