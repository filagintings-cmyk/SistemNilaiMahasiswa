let tabel = document.querySelector("table");
let barisDipilih = null;
let dataMahasiswa = JSON.parse(localStorage.getItem("dataMahasiswa")) || [];

// Menampilkan data ke tabel
function tampilkanData() {
    tabel.innerHTML = `
        <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Prodi</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
        </tr>
    `;

    dataMahasiswa.forEach((item, index) => {
        let baris = tabel.insertRow();

        baris.insertCell(0).innerHTML = item.nim;
        baris.insertCell(1).innerHTML = item.nama;
        baris.insertCell(2).innerHTML = item.prodi;
        baris.insertCell(3).innerHTML = item.matkul;
        baris.insertCell(4).innerHTML = item.nilai;

        baris.onclick = function () {
            barisDipilih = index;

            document.getElementById("nim").value = item.nim;
            document.getElementById("nama").value = item.nama;
            document.getElementById("prodi").value = item.prodi;
            document.getElementById("matkul").value = item.matkul;
            document.getElementById("nilai").value = item.nilai;
        };
    });
}

// Simpan ke Local Storage
function simpanData() {
    localStorage.setItem("dataMahasiswa", JSON.stringify(dataMahasiswa));
}

// Tombol Tambah
document.getElementById("btnTambah").addEventListener("click", function () {

    let mahasiswa = {
        nim: document.getElementById("nim").value,
        nama: document.getElementById("nama").value,
        prodi: document.getElementById("prodi").value,
        matkul: document.getElementById("matkul").value,
        nilai: document.getElementById("nilai").value
    };

    dataMahasiswa.push(mahasiswa);
    simpanData();
    tampilkanData();

    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("prodi").value = "";
    document.getElementById("matkul").value = "";
    document.getElementById("nilai").value = "";
});

// Tombol Edit
document.getElementById("btnEdit").addEventListener("click", function () {

    if (barisDipilih != null) {

        dataMahasiswa[barisDipilih] = {
            nim: document.getElementById("nim").value,
            nama: document.getElementById("nama").value,
            prodi: document.getElementById("prodi").value,
            matkul: document.getElementById("matkul").value,
            nilai: document.getElementById("nilai").value
        };

        simpanData();
        tampilkanData();
    }
});

// Tombol Hapus
document.getElementById("btnHapus").addEventListener("click", function () {

    if (barisDipilih != null) {
        dataMahasiswa.splice(barisDipilih, 1);

        simpanData();
        tampilkanData();

        barisDipilih = null;
    }
});

// Tombol Cari
// Tombol Cari
document.getElementById("btnCari").addEventListener("click", function () {

    let cari = document.getElementById("cari").value.toLowerCase();

    for (let i = 1; i < tabel.rows.length; i++) {

        let nim = tabel.rows[i].cells[0].innerHTML.toLowerCase();
        let nama = tabel.rows[i].cells[1].innerHTML.toLowerCase();

        if (nim.includes(cari) || nama.includes(cari)) {
            tabel.rows[i].style.display = "";
        } else {
            tabel.rows[i].style.display = "none";
        }
    }
});

// Tampilkan data saat halaman dibuka
tampilkanData();