const express   = require('express')
const app       = express()
const port      = 3000


app.get('/', (req, res) => {
    res.send(
        `<h1>Halaman Utama</h1><hr>
        <p>lorem ipsum lorem ipsum</p><br>
        <button>simpan</button>`
    )
})

app.get('/about', (req, res) => {
    res.send(
        `<h1>Halaman Profil Kami</h1><hr>
        <p>PT Bangun Abadi adalah perusahaan yg bergerak di bidang IT</p><br>
        <button>simpan</button>`
    )
})


app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`)
})