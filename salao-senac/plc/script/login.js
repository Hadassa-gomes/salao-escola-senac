function validarDadosPessoais() {
    console.clear()
    let formularioValido = true;
    
    let nome = document.getElementById('uname').value.trim();
    let email = document.getElementById('floatingInput').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let data = document.getElementById('data').value;
    let senha = document.getElementById('floatingPassword').value;
    let confirmar = document.getElementById('confirmarSenhaInput').value;
    

    console.log('nome: ' + (nome))
    console.log('email: ' + email)
    console.log('telefone: ' + telefone)
    console.log('data: ' + data)
    console.log('senha: ' + senha)
    console.log('confirmar senha: ' + confirmar)

    // - nome
    if (nome === "") {
        alert('Preencha esse campo obrigatório: ' + 'Nome');
        formularioValido = false;
    }
    else {
            if (nome.length <= 3) {
                alert('Nome ' + 'deve ter pelo menos 4 digitos.');
                formularioValido = false;
            }
    }
    
    // - email
    if (email === "") {
        alert('Preencha esse campo obrigatório: ' + 'Email');
        formularioValido = false;
    }
    else {
            if (email.length <= 3) {
                alert('Email ' + 'deve ter pelo menos 4 digitos.');
                formularioValido = false;
            }
    }

    // - telefone
    if (telefone === "") {
        alert('Preencha esse campo obrigatório: ' + 'Telefone');
        formularioValido = false;
    }
    else {
            if (telefone.length <= 8) {
                alert('Telefone ' + 'deve ter pelo menos 9 digitos.');
                formularioValido = false;
            }
    }

    // - data
    if (data === "") {
        alert('Preencha esse campo obrigatório: ' + 'data');
        formularioValido = false;
    }

    // - senha
    if (senha === "") {
        alert('Preencha esse campo obrigatório: ' + 'Senha');
        formularioValido = false;
    }
    else {
            if (senha.length <= 7) {
                alert('Senha ' + 'deve ter pelo menos 8 digitos.');
                formularioValido = false;
            }
    }

    //confirmar senha
    if (confirmar === "") {
        alert('Preencha esse campo obrigatório: ' + 'Digite a senha novamente');
        formularioValido = false;
    }
    else {
            if (confirmar != senha) {
                alert('A Senha ' + 'não está igual');
                formularioValido = false;
            }
    }

    if (formularioValido === true) {
        alert('Formulário enviado com sucesso!, verifique no console')

        setTimeout(() => {
            window.location.href = "adm.html";
          }, 5000);
    }
}