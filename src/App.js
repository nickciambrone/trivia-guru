import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


import { MainMenu } from './components/main-menu/main-menu.component';
import NavExample from './components/navbar/navbar.component';
import { Route, Routes } from 'react-router-dom';
import Quiz from './components/quiz/quiz.component';
import Stats from './components/stats/stats.component';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{  document.title = 'Trivia Battle';
},[])

  return (
    <div className="App">

      <div className = 'nav-container' style={{textAlign:'center'}}>
      <NavExample/>
      </div>
      <div className='main-content-area'>
      <Routes>
        <Route  path="/" element={<MainMenu />}/>
        <Route path="/stats" element={<Stats />} />

          <Route path="/*" element={<Quiz />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
