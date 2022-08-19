import './App.css';
import LoginComponent from "./components/LoginComponent"
import {RegisterComponent,SuccessfulComponent} from './components/RegisterComponent';
import {Routes,Route} from "react-router-dom"
import AuthComponent from './components/AuthComponent';
function App() {
  return (

    <div className="App">
      <Routes >
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="/signup" element={<RegisterComponent/>}/>
        <Route path="/auth" element={<AuthComponent/>}/>
        <Route path="/successful" element={<SuccessfulComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
