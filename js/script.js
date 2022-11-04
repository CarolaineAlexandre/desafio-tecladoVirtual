function inserir(x) {
    senha = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = senha + x;

}

function tam() {
    const tamanho = document.getElementById("tela").innerText 
    console.log(tamanho.length)
    if (tamanho.length > 6) {
        document.getElementById("tela").innerHTML = tamanho.substring( 0, tamanho.length - 1)
        alert("A senha só pode conter 6 números")
    }
}

function limpar() {
    document.getElementById('tela').innerHTML = '';
}

function salvar() {

    if (document.getElementById('tela').innerHTML == "") {
        alert("Insira a senha, por favor!")
    } else {
        alert("Senha aceita. Seja Bem-vindo(a)!");
        alert("Você será direcionado(a) ao painel de controle!");
        document.getElementById('tela').innerHTML = '';
    }
}


