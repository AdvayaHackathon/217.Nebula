const questions = [
    {
      text: "Welcome! What kind of traveler are you?",
      options: ["Solo Explorer", "Family Trip", "Backpacker", "Culture Seeker"]
    },
    {
      text: "Which region are you visiting?",
      options: ["North India", "South India", "East India", "West India", "North-East India"]
    },
    {
      text: "Are you interested in local festivals, food, or heritage?",
      options: ["Festivals", "Food", "Heritage", "All of them!"]
    },
    {
      text: "Would you like real-time safety alerts for the area you're exploring?",
      options: ["Yes, absolutely!", "Maybe later"]
    },
    {
      text: "Preferred language for cultural tips and AI agent interaction?",
      options: ["English", "Hindi", "Kannada", "Tamil", "Bengali"]
    },
    {
      text: "Would you like to receive custom itineraries with AI-guided cultural stops?",
      options: ["Yes!", "No, I’ll explore on my own"]
    }
  ];
  
  let currentQuestion = 0;
  
  function startJourney() {
    document.querySelector(".hero").classList.add("hidden");
    document.getElementById("story-section").classList.remove("hidden");
    loadQuestion();
  }
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question-text").innerText = question.text;
  
    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.innerHTML = '';
  
    question.options.forEach(option => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerText = option;
      btn.onclick = () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
          loadQuestion();
        } else {
          document.getElementById("question-box").innerHTML = "<h2>Thank you! We’re customizing your cultural journey ✨</h2>";
        }
      };
      buttonsContainer.appendChild(btn);
    });
  }
  