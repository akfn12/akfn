<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI vs Human 그림 맞추기</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }
        #image-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 400px;
            margin: 20px auto;
        }
        .image-box {
            width: 180px;
            height: 180px;
            background-size: cover;
            background-position: center;
            border: 2px solid #000;
            cursor: pointer;
        }
        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>AI vs Human 그림 맞추기</h1>
    <div id="image-container"></div>
    <p id="result"></p>

    <script>
        const questions = [
            {
                images: [
                    { src: 'images/ai1.jpg', type: 'ai' },
                    { src: 'images/ai2.jpg', type: 'ai' },
                    { src: 'images/human1.jpg', type: 'human' },
                    { src: 'images/ai3.jpg', type: 'ai' }
                ],
                answer: 'images/human1.jpg'
            },
            {
                images: [
                    { src: 'images/ai4.jpg', type: 'ai' },
                    { src: 'images/human2.jpg', type: 'human' },
                    { src: 'images/ai5.jpg', type: 'ai' },
                    { src: 'images/ai6.jpg', type: 'ai' }
                ],
                answer: 'images/human2.jpg'
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
    </script>
</body>
</html>
