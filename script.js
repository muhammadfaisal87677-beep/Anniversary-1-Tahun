const tombol = document.getElementById("btnKenangan");

tombol.addEventListener("click", function () {

    document.getElementById("kenangan").style.display = "block";

});

const tanggalJadian = new Date("2025-06-01");

const hariIni = new Date();

const selisihWaktu = hariIni - tanggalJadian;

const jumlahHari = Math.floor(
    selisihWaktu / (1000 * 60 * 60 * 24)
);

document.getElementById("hari").innerHTML =
    "❤️ Kita telah bersama selama <b>" +
    jumlahHari +
    " hari</b> ❤️";