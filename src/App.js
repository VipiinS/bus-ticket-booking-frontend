
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage"
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<SignupPage/>}/>
          <Route  path="/signup" element={<SignupPage/>}/>
          <Route  path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
