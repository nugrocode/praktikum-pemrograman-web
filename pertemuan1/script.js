//
function tampilkanPesan() {
    alert("Selamat anda berhasil menjalankan JavaScript!");
}

//
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formKontak").addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const pesan = document.getElementById("pesan").value;

        const output = `Terima Kasih <b>${nama}</b>! 
        Pesan Anda telah kami terima. Kami akan menghubungi Anda melalui email <b>${email}</b>. Pesan Anda: <i>${pesan}</i>`;

        document.getElementById("output").innerHTML = output;

        this.reset();
    });
});