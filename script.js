const chatLog = document.getElementById('chat-log');
const inputBox = document.querySelector('#chat-input input[type=text]');
const sendBtn = document.querySelector('#chat-input button');

function sendMessage() {
    const userInput = inputBox.value;
    inputBox.value = '';

    // Adiciona a mensagem do usuário ao log do chat
    chatLog.innerHTML += `
        <div class="message user-message">
            <p>${userInput}</p>
        </div>
    `;

    // Envia a mensagem do usuário para o ChatGPT e obtém a resposta do chatbot
    const botResponse = getBotResponse(userInput);

    // Adiciona a resposta do chatbot ao log do chat
    chatLog.innerHTML += `
        <div class="message bot-message">
            <p>${botResponse}</p>
        </div>
    `;

    // Role a página para exibir a última mensagem
    chatLog.scrollTop = chatLog.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
inputBox.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        sendMessage();
    }
});

function getBotResponse(message) {
    let botResponse;

    // Analisa a mensagem do usuário e define uma resposta do chatbot
    if (message.includes('olá') || message.includes('oi') || message.includes('oi tudo bem?')) {
        botResponse = 'Olá! Como posso ajudar?';
    } else if (message.includes('quem é você') || message.includes('qual é o seu nome') || message.includes('como você se chama')) {
        botResponse = 'Meu nome é watson. Sou um assistente virtual criado para ajudá-lo.';
    } else if (message.includes('obrigado') || message.includes('valeu')) {
        botResponse = 'De nada! Qualquer outra coisa que eu possa ajudar?';
    } else if (message.includes('qual a sua cor favorita') || message.includes('qual é a cor que você gosta')) {
        botResponse = 'Eu sou um chatbot e não tenho preferência por cores.';
    } else if (message.includes('voce é humano') || message.includes('voce é uma máquina')) {
        botResponse = 'Sou um chatbot programado para ajudá-lo, mas não sou um ser humano.';
    } else if (message.includes('voce é inteligente') || message.includes('voce sabe tudo')) {
        botResponse = 'Eu sou inteligente o suficiente para ajudá-lo a responder perguntas e fornecer informações.';
    } else if (message.includes('qual é o seu propósito') || message.includes('o que você faz')) {
        botResponse = 'Meu propósito é ajudar a responder suas perguntas e fornecer informações úteis.';
    } else {
        botResponse = 'Desculpe, não entendi. Pode reformular a sua pergunta?';
    }
    if (message.includes('olá') || message.includes('oi') || message.includes('oi tudo bem?')) {
        botResponse = 'Olá! Como posso ajudar?';
      } else if (message.includes('quem é você') || message.includes('qual é o seu nome') || message.includes('como você se chama')) {
        botResponse = 'Meu nome é Chatbot. Sou um assistente virtual criado para ajudá-lo.';
      } else if (message.includes('obrigado') || message.includes('valeu')) {
        botResponse = 'De nada! Qualquer outra coisa que eu possa ajudar?';
      } else if (message.includes('qual é a sua idade') || message.includes('há quanto tempo você existe') || message.includes('desde quando você existe')) {
        botResponse = 'Não tenho idade, fui programado para ajudá-lo a qualquer momento!';
      } else if (message.includes('você gosta de programar') || message.includes('qual é a sua linguagem de programação') || message.includes('quem é o seu programador')) {
        botResponse = 'Eu fui programado com JavaScript, e adoro ajudar as pessoas!';
      } else if (message.includes('quem criou você') || message.includes('quem te programou') || message.includes('quem é o seu criador')) {
        botResponse = 'Fui criado por uma equipe de desenvolvedores muito talentosos!';
      } else if (message.includes('você é humano') || message.includes('você é uma máquina') || message.includes('você é um robô')) {
        botResponse = 'Sou um assistente virtual programado para ajudá-lo. Embora não seja humano, adoro conversar com você!';
      } else if (message.includes('como posso te chamar') || message.includes('qual é o seu apelido') || message.includes('posso te chamar de algo')) {
        botResponse = 'Pode me chamar de Chatbot, esse é o meu nome!';
      } else if (message.includes('qual é a previsão do tempo') || message.includes('como está o tempo hoje') || message.includes('vai chover')) {
        botResponse = 'Desculpe, não tenho informações sobre o clima no momento.';
      } else if (message.includes('qual é a capital do Brasil') || message.includes('qual é a maior cidade do Brasil') || message.includes('quais são as cidades mais populares do Brasil')) {
        botResponse = 'A capital do Brasil é Brasília, e a maior cidade é São Paulo. Algumas das cidades mais populares são Rio de Janeiro, Belo Horizonte e Salvador!';
      } else if (message.includes('você gosta de esportes') || message.includes('qual é o seu esporte favorito') || message.includes('você pratica algum esporte')) {
        botResponse = 'Embora eu não possa praticar esportes, adoro assistir a jogos de futebol!';}

    return botResponse;
}
