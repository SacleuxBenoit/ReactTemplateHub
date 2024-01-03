import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Main/Pages/Home';
import MainHeader from './Main/Components/MainHeader';
import PfirstNavBar from './LeftNavBar/firstNavBar/Pages/PfirstNavBar';
import PfirstHeader from './Header/firstHeader/Pages/PfirstHeader'

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/firstNavBar" element={<PfirstNavBar />} />
          <Route path="/firstHeader" element={<PfirstHeader />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
