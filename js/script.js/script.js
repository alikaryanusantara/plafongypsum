document.addEventListener('DOMContentLoaded', function() {
    // Fungsionalitas Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Fungsionalitas Smooth Scrolling untuk link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default dari link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Tutup menu hamburger jika terbuka (untuk mobile)
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }

                // Scroll ke elemen target
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Efek smooth scroll
                });
            }
        });
    });

    // Opsional: Menambahkan kelas 'scrolled' ke header saat scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Setelah scroll 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Anda bisa menambahkan fungsionalitas JavaScript lainnya di sini di masa mendatang
    // Contoh: validasi formulir, slider gambar, dll.
});