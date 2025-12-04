const from = document.getElementById('form-mercadoria');
const descricao = document.getElementById('form-mercadoria-nome');
let formEValidio = false;

function validaDescricao(descricao) {
    const descricaoComoArray = descricao.split(' ');
    return descricaoComoArray.length <= 2 && descricaoComoArray.length > 0;
};

function validaEstoqueEVenda(estoque, venda){
    let vendaValida = false;
    if(estoque >= venda){
        return vendaValida = true;
    } else {
        return vendaValida = false;
    }
    
}

addEventListener('change', function (e) {
    formEValidio = validaDescricao(e.target.value);
    
    if(formEValidio){
        console.log('FUNCIONOU')
    }else{
        console.log('opcao invalida')
    }
});


addEventListener('submit', function(e) {
    e.preventDefault();
    const estoque = document.getElementById('form-mercadoria-estoque').value;
    console.log(estoque)
    const venda = document.getElementById('form-mercadoria-venda').value;
    console.log(venda)
    formEValidio = validaEstoqueEVenda(estoque, venda);
    
    if(formEValidio){
        return alert('Venda cadastrada')
    }else{
        return alert('Estoque insuficiente!')
    }
    
})