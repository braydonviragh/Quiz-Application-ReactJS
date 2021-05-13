import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
       <div className="">
        
        <div className="container grid  md:grid-cols-2 sm:grid-cols-1 gap-6 pt-3 mt-3 text-white md:text-1xl">
            
            <div className="flex justify-center flex-col w-full justify-center items-start py-10 p-10 ">
                <h1 className="font-bold text-3xl my-4">YOU THINK YOU CAN QUIZ?</h1>
                <p className="leading-normal mb-4">Well, do you ? Below are several skill testing quizzes supplied by the Open Trivia Database API. Each quiz comes with 10 multiple choice questions in each listed category. <br/> HOW TO PLAY: Choose topic below, read question and click on 1 of 4 answers provided. </p>
                <div className="container md:text-lg mt-5 flex flex-wrap justify-around ">
                <NavLink exact to="/Quiz">
                        <button className="bg-white hover:bg-blue-500 text-blue-700 w-full font-semibold hover:text-white py-2 m-2 px-6 border border-blue-500 hover:border-transparent rounded">
                        Anime
                        </button>
                    </NavLink>
                    <NavLink exact to="/AnimalsQuiz">
                        <button className="bg-white hover:bg-blue-500 text-blue-700 w-full font-semibold hover:text-white py-2 m-2 px-6 border border-blue-500 hover:border-transparent rounded">
                        Animals
                        </button>
                    </NavLink>
                    <NavLink exact to="/GeneralQuiz">
                        <button className="bg-white hover:bg-blue-500 text-blue-700 w-full font-semibold hover:text-white py-2 m-2 px-6 border border-blue-500 hover:border-transparent rounded">
                        General
                        </button>
                    </NavLink>
                    <NavLink exact to="/HistoryQuiz">
                        <button className="bg-white hover:bg-blue-500 text-blue-700 w-full font-semibold hover:text-white py-2 m-2 px-6 border border-blue-500 hover:border-transparent rounded">
                        History
                        </button>
                    </NavLink>
                    <NavLink exact to="/MoviesQuiz">
                        <button className="bg-white hover:bg-blue-500 text-blue-700 w-full font-semibold hover:text-white py-2 m-2 px-6 border border-blue-500 hover:border-transparent rounded">
                        Movies
                        </button>
                    </NavLink>
                    <NavLink exact to="/MusicalQuiz">
                        <button className="bg-white hover:bg-blue-500 text-blue-700 w-full font-semibold hover:text-white py-2 m-2 px-6 border border-blue-500 hover:border-transparent rounded">
                        Music
                        </button>
                    </NavLink>
                    <NavLink exact to="/SportsQuiz">
                        <button className="bg-white hover:bg-blue-500 text-blue-700 w-full font-semibold hover:text-white py-2 m-2 px-6 border border-blue-500 hover:border-transparent rounded">
                        Sports
                        </button>
                    </NavLink>
                    <NavLink exact to="/TVQuiz">
                        <button className="bg-white hover:bg-blue-500 text-blue-700 w-full font-semibold hover:text-white py-2 m-2 px-6 border border-blue-500 hover:border-transparent rounded">
                        Television
                        </button>
                    </NavLink>
                    
                </div>
            </div>

            <div className=" p-5 mt-5 ml-5 pl-10 content-center justify-end">
                <img className="w-full" src="images/checklist.svg"/>
            </div>

        </div>
            


            
           
        </div>
       
    )
}

export default Home
