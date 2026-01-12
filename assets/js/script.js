/**
 * MOTOR DE RENDERIZAÇÃO DINÂMICA - CAMPINA MIL GRAU
 * ----------------------------------------------------------------
 * Desenvolvedor: Guilherme Arruda De Souza
 * Atualizado com Menu Mobile e WhatsApp
 * ----------------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {
    // [SELEÇÃO DE ELEMENTOS - NOTÍCIAS]
    const featCont = document.getElementById('featuredContainer');
    const newsCont = document.getElementById('noticiasContainer');
    const buttons = document.querySelectorAll('.cat-pill');
    const destaqueSection = document.getElementById('destaques-section');

    // [SELEÇÃO DE ELEMENTOS - MENU MOBILE]
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');

    /**
     * [FUNÇÃO: GERAR CARD HTML]
     */
    function createCard(n) {
        return `
            <article class="news-card" style="opacity: 0; transform: translateY(20px); animation: fadeInUp 0.5s forwards;">
                <div style="overflow:hidden;">
                    <a href="noticia.html?id=${n.id}">
                        <img src="${n.imagem}" alt="${n.titulo}" 
                             onerror="this.src='https://images.unsplash.com/photo-1585829365234-781fcd50330b?q=80&w=800'">
                    </a>
                </div>
                <div class="news-content">
                    <div>
                        <span class="news-category">${n.categoria}</span>
                        <a href="noticia.html?id=${n.id}" style="text-decoration:none; color:inherit;">
                            <h3 class="news-title">${n.titulo}</h3>
                        </a>
                        <p style="font-size:14px; color:#555; margin-bottom:15px; line-height:1.4;">${n.resumo}</p>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; border-top:1px solid #eee; padding-top:10px; margin-top:auto;">
                        <span><i class="far fa-calendar-alt"></i> ${n.data}</span>
                        <span style="color:#c41e3a; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">Ler Mais →</span>
                    </div>
                </div>
            </article>`;
    }

    /**
     * [FUNÇÃO: RENDERIZAR INTERFACE]
     */
    function render(filter = 'todos') {
        if (typeof noticias === 'undefined') return;

        if (filter === 'todos') {
            const feat = noticias.filter(n => n.destaque);
            if (featCont) featCont.innerHTML = feat.map(createCard).join('');
            if (destaqueSection) destaqueSection.style.display = 'block';

            const list = noticias.filter(n => !n.destaque);
            if (newsCont) newsCont.innerHTML = list.map(createCard).join('');
        } else {
            if (destaqueSection) destaqueSection.style.display = 'none';
            const list = noticias.filter(n => n.categoria.toLowerCase() === filter.toLowerCase());
            
            if (newsCont) {
                if (list.length === 0) {
                    newsCont.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 50px; color: #888;">Nenhuma notícia encontrada.</p>`;
                } else {
                    newsCont.innerHTML = list.map(createCard).join('');
                }
            }
        }
    }

    // [EVENTOS DE CLIQUE - FILTROS]
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (newsCont) {
                newsCont.style.opacity = '0';
                setTimeout(() => {
                    render(btn.dataset.category);
                    newsCont.style.opacity = '1';
                }, 200);
            }
        });
    });

    // [LÓGICA DO MENU HAMBÚRGUER]
    if (btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('active');
            const icon = btnMenu.querySelector('i');
            
            if (menu.classList.contains('active')) {
                icon.className = 'fas fa-times'; // Ícone de fechar
                document.body.style.overflow = 'hidden'; // Trava o fundo
            } else {
                icon.className = 'fas fa-bars'; // Ícone de menu
                document.body.style.overflow = 'auto'; // Destrava o fundo
            }
        });

        // Fecha o menu ao clicar em qualquer link (importante para navegação)
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                btnMenu.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Inicialização
    render();
});

// [HEADER AO ROLAR]
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (header) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, { passive: true });

// Animação CSS Dinâmica
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
    #noticiasContainer { transition: opacity 0.3s ease; }
`;
document.head.appendChild(style);