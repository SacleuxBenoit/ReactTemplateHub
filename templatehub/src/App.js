import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import MainHeader from './Components/Header/MainHeader';
import PLNBecommerce from './Pages/LeftNavBar/PLNBecommerce';
import PHjournal from './Pages/Header/PHjournal';

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/PLNBecommerce" element={<PLNBecommerce />} />
          <Route path="/PHjournal" element={<PHjournal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
