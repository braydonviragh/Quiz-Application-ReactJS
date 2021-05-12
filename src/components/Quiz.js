import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import AnimeQuiz from './AnimeQuiz';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=31&type=multiple';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex ] = useState(0);
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => { 
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => { 
            const questions = data.results.map((question) => 
            ({
                ...question, 
                answers: [
                    question.correct_answer,
                    ...question.incorrect_answers
                ].sort(() => Math.random() -0.5)
            }))

            setQuestions(questions);
        });
    }, []);
    
    const handleAnswer = (answer) => { 
        if(!showAnswers) { 
        
            if(answer === questions[currentIndex].correct_answer) {
                setScore(score +1);
            }
        }
        setShowAnswers(true);
    }

    const handleNextQuestion = () => { 
        setCurrentIndex(currentIndex + 1);
        setShowAnswers(false);
        }
  
    return questions.length > 0 ? (
        <div className="container text-center flex">
            {currentIndex >= questions.length ? (
                
            <div className=" w-1/2 mt-10 absolute left-1/4 right-1/4 top-1/4">
                <h1 className="text-3xl font-bold text-white text-center">
                Game Ended, Score: {score} <br/><NavLink exact to="/"><button className="bg-blue-200 text-blue-700 p-4 font-semibold mt-6 rounded shadow">Click Here to Play again</button></NavLink></h1>
            </div>
            ) : ( 
                <AnimeQuiz data={questions[currentIndex]} 
                showAnswers={showAnswers}
                handleNextQuestion={handleNextQuestion}
                handleAnswer={handleAnswer} />
            )}
        </div>
    ) : (  
            <h2>Loading...</h2>
        );
}

export default Quiz
