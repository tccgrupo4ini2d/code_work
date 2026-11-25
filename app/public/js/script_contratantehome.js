const abas = document.querySelectorAll('.aba');
const paineis = document.querySelectorAll('.painel');
const pills = document.querySelectorAll('.pill');
const filtroSecundario = document.getElementById('filtro-secundario');

const btnVerPerfil = document.getElementById('btn-ver-perfil');
const modalPerfil = document.getElementById('modal-perfil');
const btnFecharModal = document.getElementById('btn-fechar-modal');

abas.forEach((aba) => {
  aba.addEventListener('click', () => {
    // Remove "ativa" de todas as abas e marca a clicada
    abas.forEach((item) => item.classList.remove('ativa'));
    aba.classList.add('ativa');

    // Esconde todos os painéis e mostra o escolhido
    const alvoId = aba.dataset.alvo;
    paineis.forEach((painel) => {
      painel.classList.toggle('ativo', painel.id === alvoId);
    });

    // Ajusta o texto do segundo filtro conforme a aba
    if (alvoId === 'painel-projetos') {
      filtroSecundario.textContent = 'Feitos';
    } else {
      filtroSecundario.textContent = 'Aceitos';
    }
  });
});

pills.forEach((pill) => {
  pill.addEventListener('click', () => {
    pills.forEach((item) => item.classList.remove('ativo'));
    pill.classList.add('ativo');
  });
});

// Abre o modal de perfil sobreposto ao clicar em "Ver perfil"
if (btnVerPerfil && modalPerfil) {
  btnVerPerfil.addEventListener('click', () => {
    modalPerfil.classList.add('aberto');
    modalPerfil.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
}

// Fecha o modal pelo botão "×"
function fecharModalPerfil() {
  if (!modalPerfil) return;
  modalPerfil.classList.remove('aberto');
  modalPerfil.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (btnFecharModal) {
  btnFecharModal.addEventListener('click', fecharModalPerfil);
}

// Fecha se clicar fora da caixa do modal ou apertar Esc
if (modalPerfil) {
  modalPerfil.addEventListener('click', (evento) => {
    if (evento.target === modalPerfil) {
      fecharModalPerfil();
    }
  });
}

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && modalPerfil && modalPerfil.classList.contains('aberto')) {
    fecharModalPerfil();
  }
});