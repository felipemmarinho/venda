// função que deixa invisível os botões incluir,alterar,excluir,localizar,imprimir,retornar
function modoEdicao() {

    document.getElementById('btn-gravar').classList.remove('d-none');
    document.getElementById('btn-cancelar').classList.remove('d-none');

    document.getElementById('btn-incluir').classList.add('d-none');    
    document.getElementById('btn-localizar').classList.add('d-none');
    document.getElementById('btn-imprimir').classList.add('d-none');
    document.getElementById('btn-retornar').classList.add('d-none');
};

// função que deixa invisível os botões gravar e cancelar
function modoGravacao() {

    document.getElementById('btn-gravar').classList.add('d-none');
    document.getElementById('btn-cancelar').classList.add('d-none');

    document.getElementById('btn-incluir').classList.remove('d-none');
    
    document.getElementById('btn-localizar').classList.remove('d-none');
    document.getElementById('btn-imprimir').classList.remove('d-none');
    document.getElementById('btn-retornar').classList.remove('d-none');
};



function mostraCadastro(){
    document.getElementById('id_cadastro').classList.remove('d-none');
    document.getElementById('id_procura').classList.add('d-none');
};

function mostraProcura(){
    document.getElementById('id_procura').classList.remove('d-none');    
    document.getElementById('id_cadastro').classList.add('d-none');
};

document.getElementById('btn-incluir').addEventListener('click', modoEdicao);
document.getElementById('btn-cancelar').addEventListener('click', modoGravacao);
document.getElementById('btn-gravar').addEventListener('click', modoGravacao);
document.getElementById('btn-localizar').addEventListener('click', mostraProcura);
document.getElementById('id_retornar').addEventListener('click', mostraCadastro);



