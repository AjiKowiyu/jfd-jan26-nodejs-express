const express   = require('express')
const app       = express()
const moment    = require('moment')
const port      = 3000


app.use( express.urlencoded({extended:false}) )
app.set('view engine', 'ejs')   //setting penggunaan template engine untuk express
app.set('views', './view')      //setting penggunaan folder untuk menyimpan file .ejs


app.get('/', (req, res) => {
    res.render('beranda')
})

app.get('/profil', (req, res) => {
    res.render('profil')
})

app.get('/pengalaman', (req, res) => {
    let namaLengkap = 'Aji Kowiyu'
    // 1. data harus dikirim ke view
    // 2. data harus dipanggil di dalam view
    res.render('detail-pengalaman', {
        nama: namaLengkap,
        alamat: 'Pluit, Jakarta Utara',
        posisi: 'Programmer',
        perusahaan: 'PT Freeport Jaya Makmur',
        gaji: 9000000
    })
})

// synchronous = berjalan berurutan
// asynchronous = berjalan tidak berurutan
let c_karyawan = require('./controller/c_karyawan')

app.get('/karyawan', c_karyawan.index)
app.get('/karyawan/detail/:id_kry', c_karyawan.detail)
app.get('/karyawan/hapus/:id_kry', c_karyawan.hapus)
app.get('/karyawan/tambah', c_karyawan.tambah)
app.post('/karyawan/proses-insert', c_karyawan.proses_insert)
app.get('/karyawan/edit/:id_kry', c_karyawan.edit)
app.post('/karyawan/proses-update/:id_kry', c_karyawan.proses_update)


app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`)
})