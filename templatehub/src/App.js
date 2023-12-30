import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import MainHeader from './Components/Header/MainHeader';
import PLNBecommerce from './Pages/LeftNavBar/PLNBecommerce';

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/PLNBecommerce" element={<PLNBecommerce />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
