function inserir(x) {
    senha = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = senha + x;

}

function limpar() {
    document.getElementById('tela').innerHTML = '';
}

function salvar() {
    
    if(document.getElementById('tela').innerHTML == ""){
        alert("Insira a senha, por favor!")
    }else{
        alert("Senha aceita. Seja Bem-vindo(a)!");
        alert("Você será direcionado(a) ao painel de controle!");
        document.getElementById('tela').innerHTML = '';
    } 
}


