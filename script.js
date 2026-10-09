/* =========================================
   NOMOR WHATSAPP ADMIN
========================================= */

/*
    GANTI NOMOR INI DENGAN NOMOR WHATSAPP ADMIN.

    Contoh nomor:
    081234567890

    Ditulis menjadi:
    6281234567890
*/

const nomorAdmin = "6285730922194";


/* =========================================
   FORM MODAL
========================================= */

const formModal =
    document.getElementById("formModal");

const closeForm =
    document.getElementById("closeForm");

const openFormButtons =
    document.querySelectorAll("[data-open-form]");


/*
    Semua tombol DAFTAR SEKARANG
    membuka formulir
*/

openFormButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        formModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* =========================================
   TUTUP FORM
========================================= */

closeForm.addEventListener("click", function () {

    formModal.classList.remove("show");

    document.body.style.overflow = "auto";

});


/*
    Klik area luar form
*/

formModal.addEventListener("click", function (event) {

    if (event.target === formModal) {

        formModal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});


/*
    Tombol ESC
*/

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        formModal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});


/* =========================================
   DATA DEPARTEMEN & DIVISI
========================================= */

const dataDepartemen = {
    "Fotografi dan Videografi": [
        "Fotografi",
        "Videografi"
    ],

    "Editing dan Publikasi": [
        "Editing",
        "Publikasi"
    ],

    "MULTECH - Multimedia Technology": [
        "Multimedia Technology"
    ],

    "Kewirausahaan, Pengembangan SDM, dan Kerjasama": [
        "Kewirausahaan",
        "Pengembangan SDM",
        "Kerjasama"
    ]
};


/* =========================================
   SELECT DEPARTEMEN
========================================= */


const departemen = document.getElementById("departemen");
const divisi = document.getElementById("divisi");

departemen.addEventListener("change", function () {
    const departemenDipilih = departemen.value;

    // Reset pilihan divisi
    divisi.innerHTML = "";

    // Jika belum memilih departemen
    if (!departemenDipilih) {
        divisi.disabled = true;
        divisi.add(new Option(
            "Pilih departemen terlebih dahulu", ""
        ));
        return;
    }

    // Ambil data divisi
    const daftarDivisi = dataDepartemen[departemenDipilih];

    // Periksa apakah data divisi tersedia
    if (!daftarDivisi || daftarDivisi.length === 0) {
        divisi.disabled = true;
        divisi.add(new Option(
            "Divisi belum tersedia", ""
        ));
        return;
    }

    // Aktifkan pilihan divisi
    divisi.disabled = false;

    divisi.add(new Option("Pilih Divisi", ""));

    // Tampilkan semua divisi
    daftarDivisi.forEach(function (namaDivisi) {
        divisi.add(new Option(namaDivisi, namaDivisi));
    });
});


/* =========================================
   FORM SUBMIT
========================================= */

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /*
            AMBIL DATA
        */

        const nama =
            document.getElementById("nama").value.trim();

        const nim =
            document.getElementById("nim").value.trim();

        const prodi =
            document.getElementById("prodi").value.trim();

        const semester =
            document.getElementById("semester").value;

        const namaDepartemen =
            document.getElementById("departemen").value;

        const namaDivisi =
            document.getElementById("divisi").value;

        const alasan =
            document.getElementById("alasan").value.trim();

        const agreement =
            document.getElementById("agreement").checked;


        /* =====================================
           VALIDASI
        ====================================== */

        if (nama.length < 3) {

            alert(
                "Nama lengkap harus diisi dengan benar."
            );

            document.getElementById("nama").focus();

            return;

        }


        if (nim.length < 3) {

            alert(
                "Silakan masukkan NIM yang benar."
            );

            document.getElementById("nim").focus();

            return;

        }


        if (prodi.length < 2) {

            alert(
                "Silakan masukkan Program Studi."
            );

            document.getElementById("prodi").focus();

            return;

        }


        if (!semester) {

            alert(
                "Silakan pilih semester."
            );

            document.getElementById("semester").focus();

            return;

        }


        if (!namaDepartemen) {

            alert(
                "Silakan pilih departemen."
            );

            document.getElementById("departemen").focus();

            return;

        }


        if (!namaDivisi) {

            alert(
                "Silakan pilih divisi."
            );

            document.getElementById("divisi").focus();

            return;

        }


        if (alasan.length < 10) {

            alert(
                "Alasan bergabung minimal 10 karakter."
            );

            document.getElementById("alasan").focus();

            return;

        }


        if (!agreement) {

            alert(
                "Silakan centang pernyataan terlebih dahulu."
            );

            return;

        }


        /* =====================================
           BUAT PESAN WHATSAPP
        ====================================== */

        const pesan =
            `Halo Admin UKM Multimedia 👋

Saya ingin mendaftar sebagai anggota UKM Multimedia.

📋 DATA PENDAFTAR

1. Nama Lengkap
${nama}

2. NIM
${nim}

3. Program Studi
${prodi}

4. Semester
${semester}

5. Departemen
${namaDepartemen}

6. Divisi
${namaDivisi}

7. Alasan Ingin Bergabung
${alasan}

Saya siap mengikuti proses pendaftaran UKM Multimedia.

Terima kasih 🙏`;


        /*
            Encode pesan agar aman
            digunakan di URL WhatsApp
        */

        const pesanEncoded =
            encodeURIComponent(pesan);


        /*
            Buat URL WhatsApp
        */

        const urlWhatsApp =
            `https://wa.me/${nomorAdmin}?text=${pesanEncoded}`;


        /*
            Buka WhatsApp
        */

        window.open(
            urlWhatsApp,
            "_blank"
        );


        /*
            Reset form
        */

        registrationForm.reset();


        /*
            Reset divisi
        */

        divisi.innerHTML = "";

        const option =
            document.createElement("option");

        option.value = "";

        option.textContent =
            "Pilih departemen terlebih dahulu";

        divisi.appendChild(option);

        divisi.disabled = true;


        /*
            Tutup modal
        */

        formModal.classList.remove("show");

        document.body.style.overflow = "auto";

    }
);


/* =========================================
   MOBILE MENU
========================================= */

const hamburger =
    document.getElementById("hamburger");

const navMenu =
    document.getElementById("navMenu");


hamburger.addEventListener("click", function () {

    navMenu.classList.toggle("show");


    const icon =
        hamburger.querySelector("i");


    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================================
   TUTUP MENU MOBILE
========================================= */

const menuLinks =
    document.querySelectorAll(".nav-menu a");


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

        const icon =
            hamburger.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   HERO SLIDER
========================================= */

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

let currentSlide = 0;

let sliderTimer;


/* =========================================
   TAMPILKAN SLIDE
========================================= */

function tampilkanSlide(index) {

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");


    currentSlide = index;

}


/* =========================================
   SLIDE BERIKUTNYA
========================================= */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    tampilkanSlide(currentSlide);

}


/* =========================================
   AUTO SLIDE
========================================= */

function mulaiSlider() {

    sliderTimer =
        setInterval(nextSlide, 6000);

}

mulaiSlider();


/* =========================================
   KLIK DOT
========================================= */

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        clearInterval(sliderTimer);

        tampilkanSlide(index);

        mulaiSlider();

    });

});


/* =========================================
   MRC ACCESS
========================================= */

const mrcButton =
    document.getElementById("mrcButton");

mrcButton.addEventListener("click", function () {

    alert(
        "MRC ACCESS adalah akses khusus anggota UKM Multimedia."
    );

});