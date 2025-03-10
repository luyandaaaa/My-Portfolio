document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // Ensure no automatic call to openChatbot here
});

function openChatbot() {
    console.log("openChatbot called");
    document.getElementById('chatbot-window').style.display = 'block';
    const chatbotBody = document.querySelector('.chatbot-body');
    chatbotBody.innerHTML += `<div class="chatbot-message bot-message">Hello! I'm here to help you with information about my portfolio. Ask me anything!</div>`;
}

function closeChatbot() {
    console.log("closeChatbot called");
    document.getElementById('chatbot-window').style.display = 'none';
}

function sendMessage() {
    console.log("sendMessage called");
    const inputField = document.getElementById('chatbot-input');
    const userMessage = inputField.value.trim();
    const chatbotBody = document.querySelector('.chatbot-body');

    if (userMessage === "") return;
    
    // Display user's message
    chatbotBody.innerHTML += `<div class="chatbot-message user-message">${userMessage}</div>`;
    
    // Get chatbot response
    const response = getChatbotResponse(userMessage.toLowerCase());
    
    // Display chatbot's response
    chatbotBody.innerHTML += `<div class="chatbot-message bot-message">${response}</div>`;
    
    // Scroll to the bottom of the chat
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
    
    // Clear the input field
    inputField.value = '';
}

function sendQuestion(question) {
    console.log("sendQuestion called");
    const chatbotBody = document.querySelector('.chatbot-body');
    
    // Display user's question
    chatbotBody.innerHTML += `<div class="chatbot-message user-message">${question}</div>`;
    
    // Get chatbot response
    const response = getChatbotResponse(question.toLowerCase());
    
    // Display chatbot's response
    chatbotBody.innerHTML += `<div class="chatbot-message bot-message">${response}</div>`;
    
    // Scroll to the bottom of the chat
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function getChatbotResponse(userMessage) {
    console.log("getChatbotResponse called with message:", userMessage);
    let response = "";

    // Define responses based on common questions
    if (userMessage.includes("tell us about yourself") || userMessage.includes("who are you") || userMessage.includes("what do you do") || userMessage.includes("can you describe yourself")) {
        response = "I'm Luyanda Xhakaza, a self-motivated and goal-oriented graduand with a passion for technology. I have a Bachelor's and Honours Degree in Information & Communications Technology from Durban University of Technology. I enjoy working in challenging environments and constantly seek opportunities to learn and grow. In my free time, I participate in Capture The Flag (CTF) competitions and enjoy playing netball.";
    } else if (userMessage.includes("education")) {
        response = "I hold a Bachelor's Degree in Information & Communications Technology from Durban University of Technology (2021-2023) and an Honours Degree in Information & Communications Technology (2024).";
    } else if (userMessage.includes("projects")) {
        response = "Some of my notable projects include an AI Shopping System, where I collaborated on an AI-driven e-commerce platform, and my Machine Learning Research, where I developed and optimized ensemble learning models to predict heart disease.";
    } else if (userMessage.includes("skills")) {
        response = "I have experience with JavaScript, Python, MySQL, PostgreSQL, HTML, and CSS. Additionally, I possess strong soft skills in problem-solving, teamwork, communication, and leadership.";
    } else if (userMessage.includes("contact")) {
        response = "You can reach me via email at lloyiswa2003@gmail.com or phone at +27 66 065 2780.";
    } else {
        response = "Sorry, I don't understand that question. Please ask something else!";
    }
    return response;
}

// Ensure the chatbot opens only when the user clicks the icon
document.getElementById('chatbot-icon').addEventListener('click', openChatbot);