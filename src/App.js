
import LoginPage from "./Components/Authentication Pages/LoginPage";
import SearchPage from "./Components/SearchPage";
import SignupPage from "./Components/Authentication Pages/SignupPage";
import { Routes,Route } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



function App() {
  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
              <Route path="/" element={<SignupPage/>}/>
              <Route  path="/signup" element={<SignupPage/>}/>
              <Route  path="/login" element={<LoginPage/>}/>
              <Route path="/search" element={<SearchPage/>}/>
          </Routes>
      </LocalizationProvider>

    </div>
  );
}

export default App;
