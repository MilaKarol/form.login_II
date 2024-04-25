'use strict';

function validarAcesso(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(!email || !senha){
        alert("Campos de preenchimento obrigatório");
    }else{
        window.location.href = "bem-vindo.html";
    }

}
/*
//Função para validar se os campos de e-mail, senha e confirmar senha estão preenchidos
const validarFormulario = () => {
    const email = document.getElementById('gmail').value.trim();
    const senha = document.getElementById('Senha').value.trim();
    const confirmarSenha = document.getElementById('Confirme Senha').value.trim();

    // Verifica se algum campo está vazio
    if (email === '' || senha === '' || confirmarSenha === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; // Impede o envio do formulário
    }

    // Verifica se a senha e a confirmação de senha são iguais
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return false; // Impede o envio do formulário
    }

    return true; // Permite o envio do formulário se tudo estiver correto
};

// Adiciona um evento de submissão ao formulário
document.querySelector('form').addEventListener('submit', validarFormulario);
*/



