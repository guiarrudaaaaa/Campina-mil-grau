/**
 * MOTOR INTEGRADO OTIMIZADO - CAMPINA MIL GRAU 2026
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

    // [2. FUNÇÃO: RENDERIZAR PORTAL]
    function renderPortal(filter = 'todos') {
        if (typeof noticias === 'undefined') return;

        if (featCont) featCont.innerHTML = '';
        if (newsCont) newsCont.innerHTML = '';

        // Renderiza o Carrossel Principal apenas no modo "Tudo"
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

            // Inicializa Swiper de Destaques
            new Swiper('.hero-slider', {
                loop: true,
                effect: 'fade',
                autoplay: { delay: 6000, disableOnInteraction: false },
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
            });
        }

        // Renderiza os Cards de Notícias
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

function initPartners() {
    const sliderEl = document.querySelector('.partners-slider');
    if (!sliderEl) return;

    const partnersSwiper = new Swiper('.partners-slider', {
        loop: true,
        speed: 5500,
        allowTouchMove: true,
        freeMode: true,
        loopedSlides: 12,
        slidesPerView: 'auto',
        spaceBetween: 70,
        autoplay: {
            delay: 0,
            disableOnInteraction: false, // Não deixa o usuário "matar" o autoplay
        },
        on: {
            // Se o loop parar por qualquer motivo de interação, isso aqui força ele a voltar
            touchEnd: function() {
                this.autoplay.run();
            },
            transitionEnd: function() {
                this.autoplay.run();
            }
        }
    });

    // Forçar a retomada manual se o pauseOnMouseEnter falhar
    sliderEl.addEventListener('mouseenter', () => partnersSwiper.autoplay.stop());
    sliderEl.addEventListener('mouseleave', () => partnersSwiper.autoplay.start());
}

    // [4. MENU MOBILE]
    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('active');
            const icon = btnMenu.querySelector('i');
            icon.className = menu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }

    // [5. EVENTOS DE FILTRO]
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortal(btn.dataset.category);
        });
    });

    // EXECUÇÃO IMEDIATA
    renderPortal();
    initPartners();
});

