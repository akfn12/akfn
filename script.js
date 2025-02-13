const questions = [
    {
        images: [
            { src: 'images/1.png', type: 'ai' },
            { src: 'images/2.png', type: 'ai' },
            { src: 'images/3.png', type: 'human' },
            { src: 'images/4.png', type: 'ai' }
        ],
        answer: 'images/3.png'  // 사람이 그린 그림 (정답)
    },
    {
        images: [
            { src: 'images/1.png', type: 'ai' },
            { src: 'images/2.png', type: 'human' },
            { src: 'images/3.png', type: 'ai' },
            { src: 'images/4.png', type: 'ai' }
        ],
        answer: 'images/2.png'  // 사람이 그린 그림 (정답)
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const container = document.getElementById('image-container');
    container.innerHTML = '';
    document.getElementById('result').innerText = '';

    question.images.forEach(image => {
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('image-box');
        imgDiv.style.backgroundImage = `url(${image.src})`;
        imgDiv.onclick = () => checkAnswer(image.src);
        container.appendChild(imgDiv);
    });
}

function checkAnswer(selectedImage) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedImage === correctAnswer) {
        document.getElementById('result').innerText = '정답! 🎉';
    } else {
        document.getElementById('result').innerText = '오답 😢';
    }
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    }, 2000);
}

window.onload = loadQuestion;

function startGame() {
    document.getElementById('game-container').innerHTML = `
        <h1>AI vs Human 그림 맞추기</h1>
        <div id="image-container" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; justify-content: center;"></div>
        <p id="result"></p>
    `;
    loadQuestion();  // 첫 번째 문제 로드
}
