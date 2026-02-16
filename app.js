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
app.get('/karyawan', async (req,res)=>{
    res.render('karyawan/all', {
        data_karyawan: await require('./model/m_karyawan').get_semua_karyawan()
    })
})

app.get('/karyawan/detail', (req,res)=>{
    res.send('ini halaman karyawan detail')
})

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`)
})