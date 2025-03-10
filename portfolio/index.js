// Function to open the chatbot and send a greeting message
function openChatbot() {
    const chatbotBody = document.querySelector('.chat-box');
    
    // Send a greeting message immediately when the page loads
    chatbotBody.innerHTML += `<div class="chatbot-message">Hello! I'm here to help you with information about my portfolio. Ask me anything!</div>`;
}

// Function to send messages
function sendMessage() {
    const input = document.getElementById('chatbot-input').value;
    const chatbotBody = document.querySelector('.chat-box');
    
    // Display user's message
    chatbotBody.innerHTML += `<div class="chatbot-message user-message">${input}</div>`;
    
    // Get chatbot response
    const response = getChatbotResponse(input.toLowerCase());
    
    // Display chatbot's response
    chatbotBody.innerHTML += `<div class="chatbot-message">${response}</div>`;
    
    // Scroll to the bottom of the chat
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
    
    // Clear the input field
    document.getElementById('chatbot-input').value = '';
}

// Function to get chatbot's response based on the question
function getChatbotResponse(input) {
    let response = "";

    // Define responses based on common questions
    if (input.includes("tell us about yourself") || input.includes("who are you") || input.includes("what do you do") || input.includes("can you describe yourself")) {
        response = "I'm Luyanda Xhakaza, a self-motivated and goal-oriented graduand with a passion for technology. I have a Bachelor's and Honours Degree in Information & Communications Technology from Durban University of Technology. I enjoy working in challenging environments and constantly seek opportunities to learn and grow. In my free time, I participate in Capture The Flag (CTF) competitions and enjoy playing netball.";
    } else if (input.includes("education")) {
        response = "I hold a Bachelor's Degree in Information & Communications Technology from Durban University of Technology (2021-2023) and an Honours Degree in Information & Communications Technology (2024).";
    } else if (input.includes("projects")) {
        response = "Some of my notable projects include an AI Shopping System, where I collaborated on an AI-driven e-commerce platform, and my Machine Learning Research, where I developed and optimized ensemble learning models to predict heart disease.";
    } else if (input.includes("skills")) {
        response = "I have experience with JavaScript, Python, MySQL, PostgreSQL, HTML, and CSS. Additionally, I possess strong soft skills in problem-solving, teamwork, communication, and leadership.";
    } else if (input.includes("contact")) {
        response = "You can reach me via email at lloyiswa2003@gmail.com or phone at +27 66 065 2780.";
    } else {
        response = "Sorry, I don't understand that question. Please ask something else!";
    }
    return response;


    // Create a new message element and append it to the chatbot
    let userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.innerHTML = `<p>${userMessage}</p>`;
    chatbotBody.appendChild(userMessageElement);

    let chatbotMessageElement = document.createElement('div');
    chatbotMessageElement.classList.add('chatbot-message');
    chatbotMessageElement.innerHTML = `<p>${response}</p>`;
    chatbotBody.appendChild(chatbotMessageElement);

    // Clear the input field
    document.getElementById('chatbot-input').value = "";
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Auto-scroll to the bottom
}
