// Fungsi penjumlahan dengan promise
function tambah(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Error: kedua parameter harus angka');
        }
    });
}

// Fungsi pengurangan dengan promise
function kurang(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a - b);
        } else {
            reject('Error: kedua parameter harus angka');
        }
    });
}

// Fungsi perkalian dengan promise
function kali(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a * b);
        } else {
            reject('Error: kedua parameter harus angka');
        }
    });
}

// Fungsi pembagian dengan promise
function bagi(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            if (b !== 0) {
                resolve(a / b);
            } else {
                reject('Error: pembagian dengan nol tidak diperbolehkan');
            }
        } else {
            reject('Error: kedua parameter harus angka');
        }
    });
}

// Fungsi hitung yang menggunakan async/await
async function hitung(param1, param2, aksiCallback) {
    try {
        const hasil = await aksiCallback(param1, param2);
        return hasil;
    } catch (error) {
        console.log(error);
        return error;
    }
}

// Menggunakan hitung dengan async/await
(async () => {
    const hasilTambah = await hitung(10, 5, tambah);
    const hasilKurang = await hitung(10, 5, kurang);
    const hasilKali = await hitung(10, 5, kali);
    const hasilBagi = await hitung(10, 5, bagi);
    
    console.log('Hasil Penjumlahan:', hasilTambah); // Output penjumlahan
    console.log('Hasil Pengurangan:', hasilKurang); // Output pengurangan
    console.log('Hasil Perkalian:', hasilKali);     // Output perkalian
    console.log('Hasil Pembagian:', hasilBagi);     // Output pembagian
})();
