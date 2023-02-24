import './App.css';
import MainPage from './components/MainPage';
import AdminPage from './components/AdminPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage/>} />
                    <Route path='/mainPage' element={<MainPage/>} />
                    <Route path='/adminPage' element={<AdminPage/>} />
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;
