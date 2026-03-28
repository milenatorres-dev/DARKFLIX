import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Buscamos os dados da "gaveta" (localStorage)
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // 2. Selecionamos os alvos no HTML
    const kidsLink = document.querySelector('.kids-link');
    const profileIcon = document.querySelector('.profile-icon');

    // 3. A MÁGICA: Só tentamos trocar se o elemento existir
    if (kidsLink) {
        // Se houver nome no localStorage, usa ele. Se não, usa um padrão.
        kidsLink.textContent = nomePerfil || "Membro Obscuro";
    }

    if (profileIcon && imagemPerfil) {
        profileIcon.src = imagemPerfil;
    }

    // --- Parte do Catálogo (mantemos igual, mas com proteção) ---
    const container = document.getElementById('main-content');
    if (container && categories) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});