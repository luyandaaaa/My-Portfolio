// Open modal with the clicked image
function openModal(imageSrc) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = imageSrc;
}

// Close modal when clicking outside the image
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

//chatbot
// Predefined questions
const questions = [
    "Who are you?",
    "What do you do?",
    "Describe yourself",
    "Tell me about your education",
    "What projects have you worked on?",
    "What skills do you have?",
    "How can I contact you?",
    "Tell me about your work experience",
    "What is your career progression?",
    "Can you tell me more about your experience at Durban University of Technology?",
    "How have these certifications impacted your career or skillset?",
    "What books do you enjoy reading?",
    "What kind of problems do you solve in Capture The Flag competitions?",
    "Which programming language do you prefer, JavaScript or Python, and why?"
  ];
  
  // Add event listener to the input field
  document.getElementById('chatbot-input').addEventListener('input', showSuggestions);
  
  function showSuggestions() {
    const inputField = document.getElementById('chatbot-input');
    const userInput = inputField.value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions-container');
  
    // Clear previous suggestions
    suggestionsContainer.innerHTML = '';
  
    if (userInput) {
      // Filter questions based on user input
      const filteredQuestions = questions.filter(question => question.toLowerCase().includes(userInput));
  
      // Display suggestions
      filteredQuestions.forEach(question => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = question;
        suggestionItem.addEventListener('click', () => selectSuggestion(question));
        suggestionsContainer.appendChild(suggestionItem);
      });
    }
  }
  
  function selectSuggestion(suggestion) {
    const inputField = document.getElementById('chatbot-input');
    inputField.value = suggestion;
    document.getElementById('suggestions-container').innerHTML = '';
  }
  

function openChatbot() {
    console.log("openChatbot called");
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotBody = document.querySelector('.chatbot-body');

    // Clear previous messages
    chatbotBody.innerHTML = "";

    // Display the greeting message
    chatbotBody.innerHTML += `<div class="chatbot-message bot-message">Hello! I'm here to help you with information about my portfolio. Ask me anything!</div>`;

    chatbotWindow.style.display = 'block';

    // Scroll to the bottom of the chat
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function closeChatbot() {
    console.log("closeChatbot called");
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotBody = document.querySelector('.chatbot-body');
    
    chatbotWindow.style.display = 'none';

    // Erase the entire conversation
    chatbotBody.innerHTML = "";
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


function getChatbotResponse(userMessage) { 
    console.log("getChatbotResponse called with message:", userMessage); 
    let response = ""; 
    userMessage = userMessage.toLowerCase().trim(); 
    console.log("Normalized message:", userMessage); 

    if (userMessage.includes("yourself") || userMessage.includes("who are you") || userMessage.includes("what do you do") || userMessage.includes("describe yourself")) { 
        response = "I'm Luyanda Xhakaza, a self-motivated and goal-oriented graduand with a passion for technology. I have a Bachelor's and Honours Degree in Information & Communications Technology from Durban University of Technology. I thrive in challenging environments and enjoy learning new technologies. Beyond tech, I love playing netball, reading books and participating in Capture The Flag (CTF) competitions to sharpen my problem-solving skills.";
    } else if (userMessage.includes("education")) {
        response = "I hold a Bachelor's Degree in Information & Communications Technology from Durban University of Technology completed in 2023 and an Honours Degree in Information & Communications Technology completed in 2024 both which i graduated with cum laude.";
    } else if (userMessage.includes("projects")) {
        response = "Some of notable projects/tasks i have worked on include an AI Shopping System, where I collaborated group members for our honours ASDM project where we had to come up with a comprehensive documentation of a working system, and my Machine Learning Research, where I developed and optimized ensemble learning models to predict heart disease.","As well as collaborating with group for developing a navigation system for DUT, developing a game using UNITY as well as a mobile application using Android studio";
    } else if (userMessage.includes("skills")) {
        response = "I have experience with JavaScript, Python, MySQL, PostgreSQL, HTML, and CSS. Additionally, I possess strong soft skills in problem-solving, teamwork, communication, and leadership.";
    } else if (userMessage.includes("contact")) {
        response = "You can reach me via email at lloyiswa2003@gmail.com or phone at +27 66 065 2780.";
    } else if (userMessage.includes("experience")) {
        response = "throughout the previous years i have been volunteering on diffrent projects to get experince and currently i am working at CAPACITI under the Software Development Programme";
        response = "How do you ensure effective communication and collaboration within a team?";
    } else if (userMessage.includes("career progression")) {
        response = "In the next five years, I see myself growing into a Software Development role where I can mentor others and lead innovative projects that drive significant impact";
    } else if (userMessage.includes("Can you tell me more about your experience at Durban University of Technology")) {
        response = "My experience at DUT was nothing other than not easy but because i was determined i defeated the odds. throughout my academic Journey each year was fu//";//
    } else if (userMessage.includes("How have these certifications impacted your career or skillset")) {
        response = "What emerging technologies are you most excited about and why?";//
    } else if (userMessage.includes("What books do you enjoy reading")) {
        response = "Why do you think you are a good fit for this position?";//
    } else if (userMessage.includes("What kind of problems do you solve in Capture The Flag competitions")) {
        response = "What do you know about our company and why do you want to work here?";//
    } else if (userMessage.includes("What books do you enjoy reading")) {
        response = "What are your greatest strengths and weaknesses?";//
    } else if (userMessage.includes("Which programming language do you prefer, JavaScript or Python, and why")) {
        response = "How do you see your career progressing in the next five years?";//
    } else { 
        response = "Sorry, I don't understand that question. Could you try asking something else?"; 
    }
    
    console.log("Response:", response);
    return response; 
}
// Ensure the chatbot opens only when the user clicks the icon
document.getElementById('chatbot-icon').addEventListener('click', openChatbot);