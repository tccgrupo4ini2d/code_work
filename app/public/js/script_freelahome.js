function trocarAba(aba) {
    const btnPropostas = document.getElementById('btn-propostas');
    const btnProjetos = document.getElementById('btn-projetos');

    const telaPropostas = document.getElementById('tela-propostas');
    const telaProjetos = document.getElementById('tela-projetos');

    if (aba === 'propostas') {
        btnPropostas.classList.add('active');
        btnProjetos.classList.remove('active');

        telaPropostas.classList.remove('escondido');
        telaProjetos.classList.add('escondido');
    } else {
        btnProjetos.classList.add('active');
        btnPropostas.classList.remove('active');

        telaProjetos.classList.remove('escondido');
        telaPropostas.classList.add('escondido');
    }
}

function marcarFiltro(botao) {
    const botoes = document.querySelectorAll('.filtro');
    botoes.forEach(item => item.classList.remove('active'));
    botao.classList.add('active');
}