const questions = [
    {
        question: "Who was the first President of Nigeria?",
        options: ["Nnamdi Azikiwe", "Olusegun Obasanjo", "Muhammadu Buhari", "Goodluck Jonathan"],
        answer: 0
    },
    {
        question: "In which year did Nigeria gain independence from Britain?",
        options: ["1957", "1960", "1963", "1966"],
        answer: 1
    },
    {
        question: "What was the first military coup in Nigeria's history?",
        options: ["1966", "1975", "1983", "1993"],
        answer: 0
    },
    {
        question: "Which Nigerian leader was known for the Biafran secession?",
        options: ["Nnamdi Azikiwe", "Odumegwu Ojukwu", "Yakubu Gowon", "Sani Abacha"],
        answer: 1
    },
    {
        question: "Who was the military ruler of Nigeria from 1985 to 1993?",
        options: ["Sani Abacha", "Muhammadu Buhari", "Ibrahim Babangida", "Olusegun Obasanjo"],
        answer: 2
    },
    {
        question: "In which year was the Nigerian Civil War officially ended?",
        options: ["1967", "1968", "1969", "1970"],
        answer: 3
    },
    {
        question: "What was the main currency of Nigeria before the Naira?",
        options: ["Pound Sterling", "Shilling", "Franc", "Dollar"],
        answer: 0
    },
    {
        question: "Which Nigerian leader is known for the 'War Against Indiscipline' campaign?",
        options: ["Ibrahim Babangida", "Sani Abacha", "Olusegun Obasanjo", "Muhammadu Buhari"],
        answer: 1
    },
    {
        question: "What was the primary purpose of the National Youth Service Corps (NYSC)?",
        options: ["Promote national unity", "Improve education", "Enhance military training", "Support economic development"],
        answer: 0
    },
    {
        question: "Who was the Nigerian President during the transition to civilian rule in 1999?",
        options: ["Olusegun Obasanjo", "Ibrahim Babangida", "Muhammadu Buhari", "Goodluck Jonathan"],
        answer: 0
    },
    {
        question: "Which region of Nigeria was predominantly involved in the oil industry?",
        options: ["Northern Nigeria", "Western Nigeria", "Eastern Nigeria", "Southern Nigeria"],
        answer: 3
    },
    {
        question: "What year was the current Nigerian constitution adopted?",
        options: ["1993", "1995", "1999", "2000"],
        answer: 2
    },
    {
        question: "Which Nigerian leader was known for the introduction of the Structural Adjustment Program (SAP)?",
        options: ["Olusegun Obasanjo", "Ibrahim Babangida", "Muhammadu Buhari", "Sani Abacha"],
        answer: 1
    },
    {
        question: "What was the major focus of the Nigerian government during the 1970s oil boom?",
        options: ["Economic development", "Infrastructure projects", "Military expansion", "Educational reform"],
        answer: 0
    },
    {
        question: "Who was the first military Head of State of Nigeria?",
        options: ["Yakubu Gowon", "Aguiyi Ironsi", "Olusegun Obasanjo", "Sani Abacha"],
        answer: 1
    },
    {
        question: "Which city served as the capital of Nigeria before Abuja?",
        options: ["Lagos", "Ibadan", "Enugu", "Kaduna"],
        answer: 0
    },
    {
        question: "Which Nigerian leader was known for the 'Hope '93' campaign?",
        options: ["Olusegun Obasanjo", "Moshood Abiola", "Ibrahim Babangida", "Sani Abacha"],
        answer: 1
    },
    {
        question: "What was the main goal of the Odua People's Congress (OPC) when it was formed?",
        options: ["Secession from Nigeria", "Promotion of Yoruba culture", "Economic development", "Religious conversion"],
        answer: 1
    },
    {
        question: "Who was the leader of the Nigerian government during the 1983 coup?",
        options: ["Shehu Shagari", "Muhammadu Buhari", "Ibrahim Babangida", "Sani Abacha"],
        answer: 0
    },
    {
        question: "What was the primary cause of the Nigerian Civil War?",
        options: ["Economic differences", "Ethnic tensions", "Religious conflicts", "Colonial legacy"],
        answer: 1
    },
    {
        question: "What year did Nigeria experience its first military coup?",
        options: ["1960", "1963", "1966", "1970"],
        answer: 2
    },
    {
        question: "Which Nigerian leader was instrumental in the establishment of the Federal Capital Territory (FCT)?",
        options: ["Yakubu Gowon", "Murtala Mohammed", "Olusegun Obasanjo", "Muhammadu Buhari"],
        answer: 1
    },
    {
        question: "Who was the leader of the People's Democratic Party (PDP) in the early 2000s?",
        options: ["Bola Ahmed Tinubu", "Atiku Abubakar", "Olusegun Obasanjo", "Goodluck Jonathan"],
        answer: 3
    },
    {
        question: "Who was the head of the Federal Government during the 1976 reforms?",
        options: ["Yakubu Gowon", "Murtala Mohammed", "Olusegun Obasanjo", "Ibrahim Babangida"],
        answer: 1
    },
    {
        question: "What was the primary focus of the 1993 Nigerian presidential elections?",
        options: ["Transition from military to civilian rule", "Anti-corruption reforms", "Electoral reforms", "Economic stabilization"],
        answer: 0
    },
    {
        question: "Which major event did Nigeria host in 1999?",
        options: ["OAU Summit", "Commonwealth Games", "FIFA World Cup", "African Nations Cup"],
        answer: 0
    },
    {
        question: "Who was the first female Nigerian lawyer?",
        options: ["Margaret Ekpo", "Flora Nwapa", "Sefiya Sowemimo", "Gani Fawehinmi"],
        answer: 2
    },
    {
        question: "Which organization did Nigeria help to establish in 1963?",
        options: ["African Union", "Economic Community of West African States (ECOWAS)", "United Nations", "Commonwealth of Nations"],
        answer: 1
    },
    {
        question: "Which Nigerian ruler is associated with the creation of the National Assembly?",
        options: ["Ibrahim Babangida", "Olusegun Obasanjo", "Muhammadu Buhari", "Goodluck Jonathan"],
        answer: 0
    },
    {
        question: "Which Nigerian leader was known for the 'Economic Recovery Plan'?",
        options: ["Olusegun Obasanjo", "Ibrahim Babangida", "Muhammadu Buhari", "Goodluck Jonathan"],
        answer: 0
    },
    {
        question: "What is the significance of the 1993 presidential election in Nigeria?",
        options: ["It was annulled", "It was the first democratic election", "It marked the end of military rule", "It led to the creation of new states"],
        answer: 0
    },
    {
        question: "Who was Nigeria’s Head of State during the implementation of the 'War Against Indiscipline'?",
        options: ["Sani Abacha", "Muhammadu Buhari", "Ibrahim Babangida", "Olusegun Obasanjo"],
        answer: 0
    },
    {
        question: "Which Nigerian region was most affected by the oil-related conflicts in the 2000s?",
        options: ["Northern Nigeria", "Western Nigeria", "Eastern Nigeria", "Southern Nigeria"],
        answer: 3
    },
    {
        question: "What was a significant effect of the military regime of Ibrahim Babangida?",
        options: ["Introduction of Structural Adjustment Program", "Restoration of civilian rule", "Establishment of the EFCC", "Economic boom"],
        answer: 0
    },
    {
        question: "Which event marked the beginning of Nigeria's Fourth Republic?",
        options: ["The 1999 elections", "The 1993 elections", "The 1979 elections", "The 1963 Constitution"],
        answer: 0
    },
    {
        question: "Who was the leader of the 2015 Presidential election in Nigeria?",
        options: ["Goodluck Jonathan", "Muhammadu Buhari", "Olusegun Obasanjo", "Atiku Abubakar"],
        answer: 1
    },
    {
        question: "What was the main feature of the 1963 Nigerian Constitution?",
        options: ["Federalism", "Unitary system", "Confederation", "Presidential system"],
        answer: 0
    },
    {
        question: "Which Nigerian leader is known for the introduction of the Naira currency?",
        options: ["Nnamdi Azikiwe", "Olusegun Obasanjo", "Muhammadu Buhari", "Goodluck Jonathan"],
        answer: 1
    },
    {
        question: "Who was the Nigerian President during the end of apartheid in South Africa?",
        options: ["Goodluck Jonathan", "Olusegun Obasanjo", "Muhammadu Buhari", "Sani Abacha"],
        answer: 1
    },
    {
        question: "Which Nigerian leader was known for promoting the 'Nigeria Vision 2020' plan?",
        options: ["Olusegun Obasanjo", "Muhammadu Buhari", "Ibrahim Babangida", "Goodluck Jonathan"],
        answer: 3
    },
    {
        question: "Who was the leader of Nigeria during the establishment of the Nigerian National Petroleum Corporation (NNPC)?",
        options: ["Yakubu Gowon", "Murtala Mohammed", "Olusegun Obasanjo", "Ibrahim Babangida"],
        answer: 2
    },
    {
        question: "What was the main focus of the 1979 Nigerian Constitution?",
        options: ["Establishing a federal system", "Creating a military government", "Promoting regional autonomy", "Enhancing presidential powers"],
        answer: 0
    },
    {
        question: "Which Nigerian state is known for its role in the cocoa industry?",
        options: ["Oyo", "Lagos", "Ondo", "Enugu"],
        answer: 2
    },
    {
        question: "What was the main purpose of the 1999 Nigerian Presidential elections?",
        options: ["Transition to civilian rule", "Electing a new military leader", "Ending the Biafran conflict", "Promoting economic reforms"],
        answer: 0
    },
    {
        question: "Which organization was established to promote economic integration among West African states?",
        options: ["African Union", "Economic Community of West African States (ECOWAS)", "United Nations", "Nigerian Economic Council"],
        answer: 1
    },
    {
        question: "What year did Nigeria transition from military to civilian rule?",
        options: ["1993", "1995", "1999", "2000"],
        answer: 2
    },
    {
        question: "Which Nigerian leader was instrumental in the creation of the Federal Capital Territory (FCT)?",
        options: ["Yakubu Gowon", "Murtala Mohammed", "Olusegun Obasanjo", "Goodluck Jonathan"],
        answer: 1
    },
    {
        question: "Which Nigerian state is known for its significant role in the oil industry?",
        options: ["Rivers", "Kano", "Benue", "Ekiti"],
        answer: 0
    },
    {
        question: "What was the main focus of the 1989 Nigerian Constitution?",
        options: ["Military rule", "Civilian rule", "Regional autonomy", "Economic reform"],
        answer: 1
    },
    {
        question: "Who was the first Nigerian woman to become a professor?",
        options: ["Grace Alele-Williams", "Ngozi Okonjo-Iweala", "Chinua Achebe", "Wole Soyinka"],
        answer: 0
    },
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function loadQuestion(index) {
    const quizDiv = document.getElementById('quiz');
    const question = questions[index];
    let optionsHtml = '';

    question.options.forEach((option, i) => {
        optionsHtml += `<label><input type="radio" name="option" value="${i}"> ${option}</label><br>`;
    });

    quizDiv.innerHTML = `
        <div class="question">${index + 1}. ${question.question}</div>
        <div class="options">${optionsHtml}</div>
    `;

    document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'inline';
    document.getElementById('nextBtn').style.display = index === questions.length - 1 ? 'none' : 'inline';
    document.getElementById('submitBtn').style.display = index === questions.length - 1 ? 'inline' : 'none';
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        saveAnswer();
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        saveAnswer();
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value, 10);
    }
}

function submitQuiz() {
    saveAnswer(); // Save the last answer
    calculateScore();
    displayScore();
    document.getElementById('quiz').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
}

function calculateScore() {
    score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });
}

function displayScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.innerHTML = `Your score is ${score} out of ${questions.length}`;
    scoreDiv.style.display = 'block';
}

window.onload = () => {
    loadQuestion(currentQuestionIndex);
};