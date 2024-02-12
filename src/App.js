
import LoginPage from "./Components/Authentication Pages/LoginPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import SignupPage from "./Components/Authentication Pages/SignupPage";

import { Routes,Route } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import{Provider} from 'react-redux'
import store from "./Components/Redux/store";
import Bus from "./Components/Bus/Bus";
import "./App.css"



function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
              <Route path="/" element={<SignupPage/>}/>
              <Route  path="/signup" element={<SignupPage/>}/>
              <Route  path="/login" element={<LoginPage/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/test" element={<Bus/>}/>
          </Routes>
      </LocalizationProvider>
      </Provider>

    </div>
  );
}

export default App;
