function gerenciarVisibilidadeNavBar() {
    // Assumindo que os links a serem gerenciados estão dentro de um elemento <nav>
    // e que o link de login/logout tem uma classe específica para ser ignorado.
    const navLinks = document.querySelectorAll('nav a:not(.login-link)'); // Ajuste o seletor se necessário
    const path = window.location.pathname;

    // Páginas onde os links devem estar escondidos
    const paginasPublicas = ['/', '/login.html', '/register.html', '/index.html']; // Adicione as URLs exatas

    const estaEmPaginaPublica = paginasPublicas.some(p => path.endsWith(p));

    navLinks.forEach(link => {
        if (estaEmPaginaPublica) {
            link.style.display = 'none'; // Esconde os links
        } else {
            link.style.display = ''; // Mostra os links (restaura o padrão)
        }
    });
}

function setupLogoutButton() {
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            // Em uma aplicação real, aqui você limparia tokens ou sessões.
            alert('Você foi desconectado.');
            window.location.href = '/'; // Redireciona para a página de login
        });
    }
}


function setupcarrinho(){
    const carrinho = document.getElementById('carrinho-link')

    carrinho.addEventListener('click', (e) =>{
        e.preventDefault()
        if(!carrinho){
            console.log('carrinho não encontrado')
            return
        }
        window.location.href = ('/carrinho')
    })
}
function setupcatalogo(){
    const catalogo = document.querySelector('btn btn-primary')

    catalogo.addEventListener('click', (e) =>{
        e.preventDefault()
        if(!catalogo){
            console.log('catalogo não encontrado')
            return
        }
        window.location.href = ('/catalogo')
    })
}
async function loadFeaturedProducts() {
    try {
        const response = await fetch('data/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        const featuredGrid = document.getElementById('featured-grid');

        products.forEach(product => {
            const card = createProductCard(product);
            const swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');
            swiperSlide.appendChild(card);
            featuredGrid.appendChild(swiperSlide);
        });

        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 10,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    } catch (error) {
        console.error("Não foi possível carregar os produtos em destaque:", error);
    }
}

// Esta função precisa estar disponível para o main.js também
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  // Note: Para um projeto real, evite usar .innerHTML com dados dinâmicos por segurança (XSS).
  // A criação de elementos via document.createElement é mais segura.
  card.innerHTML = `
    <div class="product-image">
      <a href="produto.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}">
      </a>
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <h3><a href="produto.html?id=${product.id}">${product.name}</a></h3>
      <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
    </div>
    <div class="product-footer">
      <button class="add-to-cart-btn" data-product-id="${product.id}">
        <i class="fas fa-shopping-cart"></i>
        Adicionar
      </button>
    </div>
  `;
  return card;
}