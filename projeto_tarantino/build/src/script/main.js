document.addEventListener('DOMContentLoaded', () => {
    const filmItens = document.querySelectorAll(".open-modal-link");

    filmItens.forEach(item => {
        item.addEventListener('click', function () {
            openModel(this);
        })
    })

    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.addEventListener('click', closeModel);
})


function openModel(clickedElement) {
    const tittle = clickedElement.getAttribute("data-tittle");
    const synopsis = clickedElement.getAttribute("data-synopsis");
    const imgSrc = clickedElement.getAttribute("data-img-src");
    console.log(imgSrc);

    const modalTitleEl = document.getElementById("modal-title");
    const modalBodyEl = document.getElementById("modal-body");
    const modalImageEl = document.getElementById("modal-image");
    const modalOverlayEl = document.querySelector(".modal-overlay");

    modalTitleEl.textContent = tittle;
    modalBodyEl.textContent = synopsis;
    modalImageEl.src = imgSrc;
    modalImageEl.alt = tittle;

    modalOverlayEl.style.display = "block";
}


function closeModel() {
    const overlay = document.getElementById("model");
    overlay.style.display = "none";
}
