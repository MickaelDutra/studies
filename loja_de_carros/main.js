$(document).ready(function () {
    $('#carrosel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true
            },
            veiculo_interesse: {
                required: false
            }
        },
        messages: {
            nome: 'Este campo deve ser preenchido com o seu nome',
            telefone: 'Este campo deve ser preenchido com seu telefone',
            email: 'Este campo deve ser preenchido com seu E-mail',
            veiculo_interesse: 'Este campo deve ser preenchido com o veículo que se interessou',
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos)
                alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    });
    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})