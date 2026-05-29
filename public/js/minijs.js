document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navList');
    const navContainer = document.querySelector('.navContainer');

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        // Toggle 'active' on both the list and the button
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        const isClickInside = navContainer.contains(event.target);

        if (!isClickInside && navList.classList.contains('active')) {
            navList.classList.remove('active');
            menuToggle.classList.remove('active'); // Reset hamburger icon
        }
    });
});