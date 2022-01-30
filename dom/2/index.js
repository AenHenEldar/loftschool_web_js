const body = document.body;
const modalContent = body.querySelector('#modalContent');
const btnOpen = body.querySelector('.modal__btn')
const overlay = setModalContent('Hello, Modal!')

btnOpen.addEventListener('click', () => {
    body.append(overlay);
})

function setModalContent(content) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    overlay.innerHTML = modalContent.innerHTML;
    const btnClose = overlay.querySelector('.close');

    overlay.addEventListener('click', function(e) {
        if(e.target === overlay || e.target === btnClose) {
            body.removeChild(overlay)
        }
    })

    const contentElement = overlay.querySelector('.content');
    contentElement.innerHTML = content;

    return overlay;
}




