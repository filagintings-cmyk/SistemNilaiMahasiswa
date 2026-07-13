let tabel = document.querySelector("table");

document.querySelector("button").addEventListener("click", function () {

    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let prodi = document.getElementById("prodi").value;
    let matkul = document.getElementById("matkul").value;
    let nilai = document.getElementById("nilai").value;

    let baris = tabel.insertRow();

    baris.insertCell(0).innerHTML = nim;
    baris.insertCell(1).innerHTML = nama;
    baris.insertCell(2).innerHTML = prodi;
    baris.insertCell(3).innerHTML = matkul;
    baris.insertCell(4).innerHTML = nilai;

    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("prodi").value = "";
    document.getElementById("matkul").value = "";
    document.getElementById("nilai").value = "";
});