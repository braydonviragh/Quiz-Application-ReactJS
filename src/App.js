import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AQuiz from './components/Animals/AQuiz';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import SQuiz from './components/Sports/SQuiz';
import TQuiz from './components/Television/TQuiz';



const App = () => {
    return (
        <Router className="App__container container">
            <Navbar/>
            <Switch>
                <Route path='/' exact component= {Home}/>
                <Route path='/Quiz' exact component= {Quiz}/>
                <Route path='/SportsQuiz' exact component= {SQuiz}/>
                <Route path='/AnimalsQuiz' exact component= {AQuiz}/>
                <Route path='/TVQuiz' exact component= {TQuiz}/>

            </Switch>
        </Router>
    )
}

export default App;
