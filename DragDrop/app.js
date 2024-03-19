const boxes = document.querySelectorAll('.box');
const image = document.querySelector('.image');

boxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        box.classList.add('hovered');
        // console.log('dragged');
    });

    box.addEventListener('dragleave', () => {
        box.classList.remove('hovered');
    });

    box.addEventListener('drop', () => {
        box.appendChild(image);
    });
});