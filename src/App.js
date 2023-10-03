import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { MainMenu } from './components/main-menu/main-menu.component';
import NavExample from './components/navbar/navbar.component';

function App() {
  return (
    <div className="App">
      <div className = 'nav-container' style={{textAlign:'center'}}>
      <NavExample/>
      </div>
      <MainMenu />
    </div>
  );
}

export default App;
