
import LoginPage from "./Components/Authentication Pages/LoginPage";
import SearchPage from "./Components/SearchPage";
import SignupPage from "./Components/Authentication Pages/SignupPage";
import TestPage from "./Components/TestPage";

import { Routes,Route } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import{Provider} from 'react-redux'
import store from "./Components/Redux/store";



function App() {
  return (
    <div>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
              <Route path="/" element={<SignupPage/>}/>
              <Route  path="/signup" element={<SignupPage/>}/>
              <Route  path="/login" element={<LoginPage/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/test" element={<TestPage/>}/>
          </Routes>
      </LocalizationProvider>
      </Provider>

    </div>
  );
}

export default App;
