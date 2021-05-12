import React from 'react';

const Button = ({answer, className}) => ( 
    <button 
    className={`bg-white p-8  text-blue-600  text-2xl font-semibold ${className}`}>
        {answer}</button>
);

const AnimalsQuiz = ({

    showAnswers, handleAnswer, handleNextQuestion, data: {question, correct_answer, 
        answers},
    }) => {
            return (
                <div className=" w-1/2 mt-10 absolute left-1/4 right-1/4">

                    <div className="flex flex-col pt-5">
                        <div className="bg-white text-blue-500 rounded p-10 text-center mt-5">
                            <h2 className="text-5xl font-bold" dangerouslySetInnerHTML={{ __html: question}}/>
                        </div>
                    
                        <div className="mt-5 grid grid-cols-2 gap-6  mt-6 text-3xl">
                            {answers.map((answer) => { 
                                const textColour = showAnswers 
                                ? answer === correct_answer 
                                ? 'text-green-500' 
                                : 'text-red-500' 
                                : 'text-blue-500';
                                //const textColour = showAnswers ? 'text-white' : 'text-white';
                                return (
                                <button 
                                className= {`bg-white ${textColour} p-4 font-semibold rounded shadow`}
                                onClick={() => handleAnswer
                                (answer)}dangerouslySetInnerHTML={{ __html: answer}}/>
                            )})}
                        
                        </div>
                        {showAnswers && (
                        <button
                            onClick={handleNextQuestion}
                            className="bg-blue-200 text-blue-700 p-4 font-semibold mt-6 rounded shadow w-1/5 ">
                                Next Question
                        </button>

                        )}
                    
                    </div>
                </div>
        )
};


export default AnimalsQuiz;
