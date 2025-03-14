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
    "Describe yourself",
    "Tell me about your education",
    "What projects have you worked on?",
    "What skills do you have?",
    "How can I contact you?",
    "Tell me about your work experience?",
    "What is your career progression?",
    "How have these certifications impacted your career or skillset?",
    "What books do you enjoy reading?",
    "What kind of problems do you solve in Capture The Flag competitions?",
    "Which programming language do you prefer, JavaScript or Python, and why?",
    "how old are you?",
    "are you still studying"
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
    chatbotBody.innerHTML += `
    <div class="chatbot-message bot-message">
        <img src="/bot.jpg" alt="Bot" />
        <p>Hello! I'm here to help you with information about my portfolio. Ask me anything!</p>
    </div>`;

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
    
   // Display user's message with icon
   chatbotBody.innerHTML += `
   <div class="chatbot-message user-message">
     <img src="/user.jpg" alt="User" />
     <p>${userMessage}</p>
   </div>
    `;

 // Get chatbot response
    const response = getChatbotResponse(userMessage.toLowerCase());

 // Display chatbot's response with icon
    chatbotBody.innerHTML += `
   <div class="chatbot-message bot-message">
     <img src="/bot.jpg" alt="Bot" />
     <p>${response}</p>
   </div>
    `;

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

    // Regular expressions to match more diverse user inputs
    if (/who (are|is) you|describe yourself/i.test(userMessage)) { 
        response = "I'm Luyanda Xhakaza, a self-motivated and goal-oriented graduand with a passion for technology. I have a Bachelor's and Honours Degree in Information & Communications Technology from Durban University of Technology. I thrive in challenging environments and enjoy learning new technologies. Beyond tech, I love playing netball, reading books and participating in Capture The Flag (CTF) competitions to sharpen my problem-solving skills.";
    } else if (/tell me about your education/i.test(userMessage)) {
        response = "I hold a Bachelor's Degree in Information & Communications Technology from Durban University of Technology completed in 2023 and an Honours Degree in Information & Communications Technology completed in 2024 both of which I graduated with cum laude.";
    } else if (/what (projects|tasks) have you worked on/i.test(userMessage)) {
        response = "Some of notable projects/tasks I have worked on include an AI Shopping System, where I collaborated with group members on our honours ASDM project, as well as my Machine Learning Research, where I developed and optimized ensemble learning models to predict heart disease. I have also worked on projects like developing a navigation system for DUT, creating a game using Unity, and building mobile applications using Android Studio.";
    } else if (/what skills do you have/i.test(userMessage)) {
        response = "I have experience with JavaScript, Python, MySQL, PostgreSQL, HTML, and CSS. Additionally, I possess strong soft skills in problem-solving, teamwork, communication, and leadership.";
    } else if (/how can I contact you/i.test(userMessage)) {
        response = "You can reach me via email at lloyiswa2003@gmail.com or phone at +27 66 065 2780.";
    } else if (/tell me about your work experience/i.test(userMessage)) {
        response = "Throughout the previous years, I have been volunteering on different projects to gain experience. Currently, I am working at CAPACITI under the Software Development Programme.";
    } else if (/what is your career progression/i.test(userMessage)) {         
        response = "In the coming years, I see myself progressing into a Software Development role where I can further hone my technical expertise. I aspire to take on leadership responsibilities, mentoring junior developers, and leading innovative projects that drive substantial impact in the industry.";
    } else if (/how have these certifications impacted your career/i.test(userMessage)) {         
        response = "These certifications have played a pivotal role in enhancing my skills, helping me transition from a basic understanding to an intermediate level of proficiency in areas like coding practices, cybersecurity, and system design.";
    } else if (/what books do you enjoy reading/i.test(userMessage)) {         
        response = "I enjoy reading novels, especially fiction, which allows me to explore different perspectives and enhances my creative thinking. I also enjoy personal development books that help me improve both professionally and personally.";
    } else if (/what kind of problems do you solve in capture the flag/i.test(userMessage)) {         
        response = "In Capture The Flag competitions, I solve challenges related to Cryptography, Forensics, Web Exploitation, and Network Forensics. These challenges push me to think critically and creatively, sharpening my problem-solving and analytical skills.";
    } else if (/how old are you/i.test(userMessage)) {         
        response = "I am 21 years old, excited about the opportunities and experiences that come with this age as I continue to grow both personally and professionally.";
    } else if (/are you still studying/i.test(userMessage)) {         
        response = "Currently, I am not studying formally. However, I’m constantly learning through hands-on projects, online courses, and certifications to stay up-to-date with the latest trends and technologies.";
    } else if (/which programming language do you prefer/i.test(userMessage)) {         
        response = "I prefer Python over JavaScript due to its simplicity, readability, and versatility. Python's syntax is clean and easy to understand, which makes it a great choice for a wide range of projects, especially in data analysis, machine learning, and web development.";
    } else {
        response = "Sorry, I don't understand that question. Could you try asking something else?"; 
    }

    console.log("Response:", response);
    return response; 
}

// Ensure the chatbot opens only when the user clicks the icon
document.getElementById('chatbot-icon').addEventListener('click', openChatbot);