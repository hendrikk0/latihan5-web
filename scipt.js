
const NOMOR_WA = "6282147677102";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-kontak");

    if (!form) {
        alert("Form kontak tidak ditemukan. Periksa ID form di HTML.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const telepon = document.getElementById("telepon")?.value.trim();
        const minat = document.getElementById("minat")?.value;
        const pesan = document.getElementById("pesan")?.value.trim();

        if (!nama || !pesan) {
            alert("Silakan isi nama dan pesan terlebih dahulu!");
            return;
        }

        const isiPesan =
`Halo, saya menghubungi melalui website CV kamu.

Nama: ${nama}
Email: ${email || "-"}
Telepon: ${telepon || "-"}
Bidang Minat: ${minat || "-"}
Pesan: ${pesan}`;

        const urlWhatsApp =
            "https://web.whatsapp.com/send?phone=" +
            NOMOR_WA +
            "&text=" +
            encodeURIComponent(isiPesan);

        // Membuka WhatsApp Web di tab baru
        const tabWA = window.open(urlWhatsApp, "_blank");

        if (!tabWA) {
            alert("Tab WhatsApp diblokir. Izinkan pop-up di browser, lalu coba lagi.");
        }
    });
});
