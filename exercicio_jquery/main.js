$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val().trim();

        if (nomeTarefa) {
            const novoItem = $(`
                <li>
                    <input type="checkbox" class="check" title="Marcar como concluído"> <label>${nomeTarefa}</label>
                </li>
            `).hide();

            $('#tarefas').append(novoItem);
            novoItem.fadeIn(500);

            novoItem.find('.check').on('change', function() {
                $(this).next('label').toggleClass('finished');
            });

            $('#nome-tarefa').val('');
        }
    });
});