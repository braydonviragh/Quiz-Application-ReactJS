import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AQuiz from './components/Animals/AQuiz';
import GQuiz from './components/General/GQuiz';
import HQuiz from './components/History/HQuiz';
import Home from './components/Home';
import MQuiz from './components/Movies/MQuiz';
import MusQuiz from './components/Music/MusQuiz';
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
                <Route path='/GeneralQuiz' exact component= {GQuiz}/>
                <Route path='/MoviesQuiz' exact component= {MQuiz}/>
                <Route path='/HistoryQuiz' exact component= {HQuiz}/>
                <Route path='/TVQuiz' exact component= {TQuiz}/>
                <Route path='/MusicalQuiz' exact component={MusQuiz}/>

            </Switch>
        </Router>
    )
}

export default App;
