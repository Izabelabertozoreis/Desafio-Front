document.getElementById('nome').addEventListener('keyup', gerarLogin);
document.getElementById('sobrenome').addEventListener('keyup', gerarLogin);
document.getElementById('termostxt').addEventListener('scroll', habilitaCheckAceite);

function Login() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const login = nome.replace(/ /g, '') + "." + sobrenome.replace(/ /g, '');
    document.getElementById('login').value = login.toLowerCase();
}
function CheckPassword(senha) {
   
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])[0-9a-zA-Z!$*&@#]{8,}$/.test(senha)) {
        return true;
    }
    else {
        alert('A senha é fraca! Deve conter mínimo 8 caracteres com: ao menos uma letra minúscula, ao menos uma letra maiúscula, ao menos um caractere especial');
        return false;
    }
}

try {
    document.getElementById('cep').addEventListener('focusout', async function (e) {
        let dados = await fetch('https://viacep.com.br/ws/' + cep.value + '/json/');
        let vcep = await dados.json();

        if (vcep.erro == 'true') {
            alert("Cep inválido!");
        }
        else {

            document.getElementById('endereco').value = (vcep.logradouro);
            document.getElementById('complemento').value = (vcep.complemento);
            document.getElementById('bairro').value = (vcep.bairro);
            document.getElementById('cidade').value = (vcep.localidade);
            document.getElementById('estado').value = (vcep.uf);
        }
    });
}
catch (err) {
    window.alert("Indisponivel!");
}

document.getElementById('formulario').addEventListener('submit', function (form) {
    form.preventDefault();
    console.log('Submetido');
    document.getElementById('table').classList.remove('d-none');
    document.getElementById('cabValidacao').classList.remove('d-none');
    processaDocumento();
    window.alert("Dados Enviados");

});

function processaDocumento() {

    document.getElementById('termos').checked = false;
    x = document.getElementsByName('informacao');
    x[0].checked = true;
   
    document.getElementById('t-nome').innerHTML = document.getElementById('nome').value;
    document.getElementById('t-sobrenome').innerHTML = document.getElementById('sobrenome').value;
    document.getElementById('t-email').innerHTML = document.getElementById('email').value;
    document.getElementById('t-login').innerHTML = document.getElementById('login').value;
    document.getElementById('t-senha').innerHTML = document.getElementById('senha').value;
    document.getElementById('t-cep').innerHTML = document.getElementById('cep').value;
    document.getElementById('t-endereco').innerHTML = document.getElementById('endereco').value;
    document.getElementById('t-complemento').innerHTML = document.getElementById('complemento').value;
    document.getElementById('t-bairro').innerHTML = document.getElementById('bairro').value;
    document.getElementById('t-cidade').innerHTML = document.getElementById('cidade').value;
    document.getElementById('t-estado').innerHTML = document.getElementById('estado').value;

    document.getElementById('t-github').innerHTML = document.getElementById('github').value;
    document.getElementById('t-academia').innerHTML = document.getElementById('academia').value;
    document.getElementById('t-professor').innerHTML = document.getElementById('professor').value;

    document.getElementById('t-termos').innerHTML = document.getElementById('termos').value.replace('on', 'Sim');
    document.getElementById('t-aceite').innerHTML = document.querySelector('input[name=informacao]:checked').value

    document.getElementById('formulario').reset();

}


function habilitaCheckAceite() {
    var termosrolagem = document.getElementById('termostxt');
    if ((termosrolagem.scrollTop + termosrolagem.offsetHeight) >= termosrolagem.scrollHeight) {
        document.getElementById('termos').removeAttribute('disabled');
    }
}