export function initToasts() {
  // Inicialização caso precise no futuro, mas o uso principal será via showToast global.
}

export function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  // Auto remover após 3 segundos
  setTimeout(() => {
    toast.dataset.state = 'closing';
    
    // Aguardar o final da animação para remover do DOM
    toast.addEventListener('animationend', () => {
      toast.remove();
      // Remove container se estiver vazio
      if (container.children.length === 0) {
        container.remove();
      }
    });
  }, 3000);
}
