/**
 * MOTOR INTEGRADO - CAMPINA MIL GRAU
 */

document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.hero-slider .swiper-wrapper');
    const featCont = document.getElementById('featuredContainer');
    const newsCont = document.getElementById('noticiasContainer');
    const buttons = document.querySelectorAll('.cat-pill');
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');

    // [1. FUNÇÃO: GERAR CARD HTML]
    function createCard(n) {
        return `
            <article class="news-card">
                <div class="card-img-container">
                    <span class="card-category">${n.categoria}</span>
                    <a href="noticia.html?id=${n.id}">
                        <img src="${n.imagem}" alt="${n.titulo}" loading="lazy">
                    </a>
                </div>
                <div class="news-content">
                    <a href="noticia.html?id=${n.id}" style="text-decoration:none;">
                        <h3 class="news-title">${n.titulo}</h3>
                    </a>
                    <p class="news-resumo">${n.resumo}</p>
                    <div class="news-footer">
                        <span><i class="far fa-calendar-alt"></i> ${n.data}</span>
                        <a href="noticia.html?id=${n.id}" class="read-more-link">Ler Mais →</a>
                    </div>
                </div>
            </article>`;
    }

    // [2. FUNÇÃO: RENDERIZAR TUDO]
    function renderPortal(filter = 'todos') {
        if (typeof noticias === 'undefined') return;

        if (featCont) featCont.innerHTML = '';
        if (newsCont) newsCont.innerHTML = '';

        // Renderiza o Carrossel (Só se for "todos")
        if (filter === 'todos' && swiperWrapper) {
            const carrosselData = noticias.filter(n => n.noCarrossel);
            swiperWrapper.innerHTML = carrosselData.map(n => `
                <div class="swiper-slide hero" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('${n.imagem}');">
                    <div class="container hero-content">
                        <p class="hero-tagline">${n.categoria.toUpperCase()}</p>
                        <h1>${n.titulo}</h1>
                        <p class="hero-subtitle">${n.resumo.substring(0, 160)}...</p>
                        <div class="hero-btns">
                            <a href="noticia.html?id=${n.id}" class="btn btn-red">LER REPORTAGEM COMPLETA</a>
                        </div>
                    </div>
                </div>
            `).join('');

            // Reinicia Swiper para carregar as novas lâminas
            new Swiper('.hero-slider', {
                loop: true,
                effect: 'fade',
                autoplay: { delay: 6000, disableOnInteraction: false },
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            });
        }

        // Renderiza Grades
        noticias.forEach(n => {
            if (filter !== 'todos' && n.categoria.toLowerCase() !== filter.toLowerCase()) return;
            if (filter === 'todos' && n.noCarrossel) return;

            const html = createCard(n);
            if (n.destaque && filter === 'todos') {
                if (featCont) featCont.innerHTML += html;
            } else {
                if (newsCont) newsCont.innerHTML += html;
            }
        });
    }

    // [3. FILTROS E MENU]
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortal(btn.dataset.category);
        });
    });

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('active');
            const icon = btnMenu.querySelector('i');
            icon.className = menu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }

    renderPortal();
});