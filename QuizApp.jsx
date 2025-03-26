import React, { useState } from "react";

const quizData = [
    { questionNumber: 1, question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris", mark: 1 },
    { questionNumber: 2, question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars", mark: 1 },
    { questionNumber: 3, question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: "Blue Whale", mark: 1 },
    { questionNumber: 4, question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "HO2"], answer: "H2O", mark: 1 },
    { questionNumber: 5, question: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare", mark: 1 },
    { questionNumber: 6, question: "What is the speed of light?", options: ["299,792,458 m/s", "150,000,000 m/s", "3,000,000 m/s", "30,000 m/s"], answer: "299,792,458 m/s", mark: 1 },
    { questionNumber: 7, question: "Which gas do plants primarily use for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", mark: 1 },
    { questionNumber: 8, question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: "7", mark: 1 },
    { questionNumber: 9, question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: "Albert Einstein", mark: 1 },
    { questionNumber: 10, question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond", mark: 1 }
];

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: option });
    };

    const handleNext = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        quizData.forEach((q, index) => {
            console.log(q,index);
            
            if (selectedAnswers[index] === q.answer) {
                calculatedScore += q.mark;
            }
        });
        setScore(calculatedScore);
    };

console.log(selectedAnswers);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            {score === null ? (
                <div>
                    <h2>Question {quizData[currentQuestion].questionNumber}</h2>
                    <p>{quizData[currentQuestion].question}</p>
                    <div>
                        {quizData[currentQuestion].options.map((option, index) => (
                            <div key={index}>
                                <input 
                                    type="radio" 
                                    name="option" 
                                    value={option} 
                                    checked={selectedAnswers[currentQuestion] === option} 
                                    onChange={() => handleOptionSelect(option)}
                                />
                                {option}
                            </div>
                        ))}
                    </div>
                    <div>
                        <button onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
                        {currentQuestion < quizData.length - 1 ? (
                            <button onClick={handleNext} disabled={!selectedAnswers[currentQuestion]}>Next</button>
                        ) : (
                            <button onClick={handleSubmit} disabled={!selectedAnswers[currentQuestion]}>Submit</button>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Your Score: {score} / {quizData.length}</h2>
                </div>
            )}
        </div>
    );
};

export default QuizApp;
