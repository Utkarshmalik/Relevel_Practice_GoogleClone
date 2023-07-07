import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<SearchPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
