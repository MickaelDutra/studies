// document.addEventListener('DOMContentLoaded', function() {
//     const modalOverlay = document.getElementById('modal-overlay');
//     const openLinks = document.querySelectorAll('.open-modal-link'); // Pega todos os links
//     const modalTitle = document.getElementById('modal-title');
//     const modalBody = document.getElementById('modal-body');
//     const modalPoster = document.getElementById('modal-poster');

//     openLinks.forEach(link => {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();

//             // 1. Pega o ID do filme (do elemento pai do link, ou do próprio link)
//             const itemId = link.closest('.filmography__item').dataset.filmeId;
//             const data = filmeData[itemId];

//             if (data) {
//                 // 2. Preenche os elementos do modal com os dados
//                 modalTitle.textContent = data.titulo;
//                 modalBody.innerHTML = `<p>${data.sinopse}</p>`;
//                 modalPoster.src = data.poster;

//                 // 3. Abre o modal
//                 modalOverlay.classList.add('--is-active');
//             }
//         });
//     });

//     function openModal(event) {
//         event.preventDefault(); // Evita que o link # mude a URL
//         modalOverlay.classList.add('active');
//     }

//     // Função para fechar o modal
//     function closeModal() {
//         modalOverlay.classList.remove('--is-active');
//     }

//     // 1. ABRIR ao clicar no link
//     openLinks.addEventListener('click', openModal);

//     // 2. FECHAR ao clicar no botão X (opcional)
//     if (closeBtn) {
//         closeBtn.addEventListener('click', closeModal);
//     }

//     // 3. FECHAR ao clicar FORA do pop-up (O SEGREDO)
//     modalOverlay.addEventListener('click', function (event) {
//         // Se o clique for DIRETAMENTE no overlay (e não em um filho do modal-content)
//         // usamos o !event.target.closest para verificar se o elemento clicado (target)
//         // está DENTRO do modal-content.
//         if (!event.target.closest('.modal-content')) {
//             closeModal();
//         }
//     });
// });
