let currentPage = 0;
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active');
        if (i === index) {
            page.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

// Tampilkan halaman pertama saat halaman dimuat
showPage(currentPage);
