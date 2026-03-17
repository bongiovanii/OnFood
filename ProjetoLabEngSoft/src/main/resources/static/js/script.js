document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('ingredient-input');
    const tagsContainer = document.querySelector('.tags-container');

    // Função para criar a estrutura HTML da nova tag
    function createTag(ingredientName) {
        // Cria o container da tag (span)
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('tag');
        tagSpan.textContent = ingredientName + ' '; // Espaço antes do 'x'

        // Cria o botão de remover
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-tag');
        removeBtn.innerHTML = '&times;'; // Símbolo de 'x'

        // Monta a tag e joga na tela
        tagSpan.appendChild(removeBtn);
        tagsContainer.appendChild(tagSpan);
    }

    // 1. Adicionar tag ao apertar "Enter"
    inputField.addEventListener('keypress', function(event) {
        // Verifica se a tecla pressionada foi o Enter
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita que o Enter recarregue a página
            
            const value = inputField.value.trim(); // Pega o valor e remove espaços extras
            
            // Só adiciona se o campo não estiver vazio
            if (value !== '') {
                createTag(value);
                inputField.value = ''; // Limpa o input para o próximo ingrediente
            }
        }
    });

    // 2. Remover tag clicando no 'x' (Delegação de Eventos)
    tagsContainer.addEventListener('click', function(event) {
        // Verifica se o elemento clicado tem a classe 'remove-tag'
        if (event.target.classList.contains('remove-tag')) {
            // Remove o elemento pai (o span com a classe 'tag')
            event.target.parentElement.remove();
        }
    });
});