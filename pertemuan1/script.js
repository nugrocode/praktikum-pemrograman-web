//
function tampilkanPesan() {
    alert("Terimah kasih telah berkunjung ke website saya! - anda berhasil terhubung ke JavaScript");
}

//
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formKontak").addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const pesan = document.getElementById("pesan").value;

        const output = `<br>Terima Kasih <b>${nama}</b>!</br>
        Pesan Anda telah kami terima. Kami akan menghubungi Anda melalui email <b>${email}</b>. Pesan Anda: <i>${pesan}</i>`;

        document.getElementById("output").innerHTML = output;

        this.reset();
    });
});