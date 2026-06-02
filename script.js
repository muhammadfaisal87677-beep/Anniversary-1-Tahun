const tombol = document.getElementById("btnKenangan");

tombol.addEventListener("click", function () {
    document.getElementById("kenangan").style.display = "block";
});

const tanggalJadian = new Date("2025-06-01T00:00:00");

function updateCounter() {

    const sekarang = new Date();

    const selisih = sekarang - tanggalJadian;

    const hari = Math.floor(
        selisih / (1000 * 60 * 60 * 24)
    );

    const jam = Math.floor(
        (selisih % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const menit = Math.floor(
        (selisih % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const detik = Math.floor(
        (selisih % (1000 * 60))
        / 1000
    );

    document.getElementById("hari").innerHTML = `

        <h3>❤️ Kita Telah Bersama ❤️</h3>

        <div class="hari-box">
            ${hari}
        </div>

        <div class="hari-label">
            Hari
        </div>

        <div class="time-container">

            <div class="time-box">
                <div class="angka">
                    ${jam.toString().padStart(2, '0')}
                </div>
                <div class="label">
                    Jam
                </div>
            </div>

            <div class="time-box">
                <div class="angka">
                    ${menit.toString().padStart(2, '0')}
                </div>
                <div class="label">
                    Menit
                </div>
            </div>

            <div class="time-box">
                <div class="angka">
                    ${detik.toString().padStart(2, '0')}
                </div>
                <div class="label">
                    Detik
                </div>
            </div>

        </div>

    `;
}

updateCounter();

setInterval(updateCounter, 1000);
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 4 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 1500);
