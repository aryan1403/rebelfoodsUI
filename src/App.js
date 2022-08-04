import { register } from './API/loginapi';
import './App.css';
import NavBar from './Components/navBar';
import LoginPage from './Pages/loginPage';
import RegisterPage from './Pages/registerPage';
import TestPage from './Pages/testPage';

function App() {
  return (
    <>
    <NavBar/>
    <RegisterPage/>
    </>
  );
}

export default App;
