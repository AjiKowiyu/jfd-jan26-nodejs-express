const express   = require('express')
const app       = express()
const port      = 3000


app.set('view engine', 'ejs')   //setting penggunaan template engine untuk express
app.set('views', './view')      //setting penggunaan folder untuk menyimpan file .ejs


app.get('/', (req, res) => {
    res.render('beranda')
})

app.get('/profil', (req, res) => {
    res.render('profil')
})


app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`)
})