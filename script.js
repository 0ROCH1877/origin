const openai = require('/Users/gabri/OneDrive/Área de Trabalho/Nova pasta/gpt-3-rest-api-node');

const apiKey = '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';
const apiEndpoint = 'https://api.openai.com/v1/';

openai.apiKey = apiKey;
openai.apiBase = apiEndpoint;

async function getResponseFromOpenAI(input) {
  const prompt = `Usuário: ${input}\nBot: `;
  const model = 'davinci';
  const maxTokens = 150;

  const completions = await openai.Completion.create({
    engine: model,
    prompt: prompt,
    maxTokens: maxTokens
  });

  const message = completions.choices[0].text.trim();
  return message;
}

const chatLog = document.getElementById('chat-log');
const inputBox = document.querySelector('#chat-input input[type=text]');
const sendBtn = document.querySelector('#chat-input button');

async function sendMessage() {
    const userInput = inputBox.value;
    inputBox.value = '';

    // Adiciona a mensagem do usuário ao log do chat
    chatLog.innerHTML += `
        <div class="message user-message">
            <p>${userInput}</p>
        </div>
    `;

    // Envia a mensagem do usuário para o ChatGPT e obtém a resposta do chatbot
    const botResponse = await getResponseFromOpenAI(userInput);

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

