const http = require('http');

// Fungsi periksaDokter dengan callback
function periksaDokter(nomerAntri, callback) {
    if (nomerAntri > 50) {
        callback(false);
    } else if (nomerAntri < 10) {
        callback(true);
    } else {
        callback('kondisi lainnya');
    }
}

// Membuat server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Panggil periksaDokter dengan parameter nomerAntri 65
    periksaDokter(65, function (check) {
        if (check === true) {
            res.end('Sebentar lagi giliran saya');
            console.log('Sebentar lagi giliran saya');
        } else if (check === false) {
            res.end('Silahkan jalan-jalan dulu');
            console.log('Silahkan jalan-jalan dulu');
        } else {
            res.end('Kondisi lainnya');
            console.log('Kondisi lainnya');
        }
    });

}).listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
