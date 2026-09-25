// Плавная анимация появления карточек по очереди
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.role-card');
    cards.forEach((card, i) => {
        card.style.animationDelay = `${i * 0.08}s`;
    });
});