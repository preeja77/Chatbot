let chatbotMsgList = ["Hi", "Good Morning", "Good Evening", "How can I help you?", "Thank You", "Please tell about your query", "What you prefer to choose?", "Yes, you can proceed"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");


let chatListLength = chatbotMsgList.length;

function sendMsgToChatbot() {
    let userInputValue = userInputEl.value;

    let messageContainerEl = document.createElement("div");
    messageContainerEl.classList.add("message-container");
    chatContainerEl.appendChild(messageContainerEl);

    let userMessage = document.createElement("span");
    userMessage.classList.add("user-message");
    userMessage.textContent = userInputValue;
    messageContainerEl.appendChild(userMessage);

    userInputEl.value = "";
    replyFromChatbot();
}

function replyFromChatbot() {
    let messageContainerEl = document.createElement("div");
    messageContainerEl.classList.add("message-From-ChatbotContainer");
    chatContainerEl.appendChild(messageContainerEl);

    let chatbotMessage = document.createElement("span");
    chatbotMessage.classList.add("message-From-Chatbot");
    let randomNumber = Math.ceil(Math.random() * chatListLength);
    chatbotMessage.textContent = chatbotMsgList[randomNumber];
    messageContainerEl.appendChild(chatbotMessage);
}