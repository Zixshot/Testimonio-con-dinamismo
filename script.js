document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('testimonialModal');
    const closeButton = document.querySelector('.close-button');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    // Elementos del modal para actualizar contenido
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalAuthorImage = document.getElementById('modalAuthorImage');
    const modalAuthorName = document.getElementById('modalAuthorName');
    const modalAuthorStatus = document.getElementById('modalAuthorStatus');

    testimonialCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extraer datos de la tarjeta clickeada
            const title = card.querySelector('.testimonial-title').textContent;
            const body = card.querySelector('.testimonial-body').textContent;
            const authorImgSrc = card.querySelector('.profile-img').src;
            const authorName = card.querySelector('.name').textContent;
            const authorStatus = card.querySelector('.status').textContent;

            // Actualizar contenido del modal
            modalTitle.textContent = title;
            modalBody.textContent = body;
            modalAuthorImage.src = authorImgSrc;
            modalAuthorImage.alt = authorName; // Actualizar alt para accesibilidad
            modalAuthorName.textContent = authorName;
            modalAuthorStatus.textContent = authorStatus;
            
            // Aplicar color de borde de imagen de perfil del modal basado en la tarjeta
            const cardProfileImg = card.querySelector('.profile-img');
            const cardProfileImgBorderColor = window.getComputedStyle(cardProfileImg).borderColor;
            modalAuthorImage.style.borderColor = cardProfileImgBorderColor;


            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera de su contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Cerrar el modal con la tecla Escape
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});
