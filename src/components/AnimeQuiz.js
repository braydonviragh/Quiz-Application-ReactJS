import React from 'react';

const Button = ({answer, className}) => ( 
    <button 
    className={`bg-white p-8  text-blue-600  text-2xl font-semibold ${className}`}>
        {answer}</button>
);

const AnimeQuiz = ({

    showAnswers, handleAnswer, handleNextQuestion, data: {question, correct_answer, 
        answers},
    }) => {
            return (
                <div className=" lg:w-1/2 md:w-full sm:w-full mx-auto p-11  pt-5">

                    <div className="flex flex-col">
                        <div className="bg-white text-blue-800 rounded p-5 text-center mt-3">
                            <h2 className="md:text-2xl sm:text-lg font-bold" dangerouslySetInnerHTML={{ __html: question}}/>
                        </div>
                    
                        <div className="mt-5 grid grid-cols-2 gap-6 mt-1 md:text-lg sm:text-md">
                            {answers.map((answer) => { 
                                const textColour = showAnswers 
                                ? answer === correct_answer 
                                ? 'text-green-500' 
                                : 'text-red-500' 
                                : 'text-blue-800';
                                //const textColour = showAnswers ? 'text-white' : 'text-white';
                                return (
                                <button 
                                className= {`bg-white ${textColour} p-4 font-semibold rounded shadow`}
                                onClick={() => handleAnswer
                                (answer)}dangerouslySetInnerHTML={{ __html: answer}}/>
                            )})}
                        
                        </div>
                        {showAnswers && (
                       <div className="flex justify-center mt-5">
                            <button
                                onClick={handleNextQuestion}
                                className="bg-blue-200 p-5 text-blue-700  font-semibold mt-2 rounded shadow ">
                                    Next Question
                            </button>
                         </div>

                        )}
                    
                    </div>
                </div>
        )
};


export default AnimeQuiz;
