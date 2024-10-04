// Função para abrir/fechar o balão de chat
function toggleChat() {
    const chatBubble = document.getElementById('chat-bubble');
    if (chatBubble.style.display === 'none' || chatBubble.style.display === '') {
        chatBubble.style.display = 'flex';
    } else {
        chatBubble.style.display = 'none';
    }
}

// Fechar o chat ao clicar no botão de fechar
document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('chat-bubble').style.display = 'none';
});