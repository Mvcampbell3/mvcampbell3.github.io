const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');

wrapper.addEventListener('mouseover', () => {
    container.className = 'container black';
})

wrapper.addEventListener('mouseleave', () => {
    container.className = 'container';
})

wrapper.addEventListener('click', () => {
    window.location = 'https://www.mvcampbell3.com'
})