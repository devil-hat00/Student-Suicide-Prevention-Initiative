document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatBody = document.getElementById('chat-body');

  const botResponses = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hello! How can I assist you?",
    "help": "I'm here to help. Please tell me more about your situation.",
    "what is this initiative about": "Our initiative, Open Arms, is dedicated to supporting students through life's challenges and preventing suicides. We provide resources, stories, and tools to foster hope and resilience.",
    "how can I face academic stress": "Here are some tips to manage academic stress: 1. Create a study schedule. 2. Take regular breaks. 3. Stay organized. 4. Practice mindfulness or meditation. 5. Seek support from friends, family, or counselors.",
    "how can I get help": "You can reach out to our support team via the 'Reach out Now' button on our home page, or contact mental health professionals at your institution. Remember, seeking help is a sign of strength.",
    "thank you": "You're welcome! Is there anything else I can help with?",
    "bye": "Goodbye! Take care and remember, you are not alone."
    
  };

  sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      addMessage('user', userMessage);
      userInput.value = '';
      generateBotResponse(userMessage);
    }
  });

  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });

  function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(`${sender}-message`);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
  }

  function generateBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    const botMessage = botResponses[lowerCaseMessage] || "I'm not sure I understand. Can you please elaborate?";

    setTimeout(() => {
      addMessage('bot', botMessage);
    }, 1000); // Simulate response delay
  }
});
