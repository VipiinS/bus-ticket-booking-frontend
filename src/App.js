
import LoginPage from "./Components/Authentication Pages/LoginPage";
import SearchPage from "./Components/SearchPage";
import SignupPage from "./Components/Authentication Pages/SignupPage";
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<SignupPage/>}/>
          <Route  path="/signup" element={<SignupPage/>}/>
          <Route  path="/login" element={<LoginPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
