import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Main/Pages/Home';
// NavBar
import PfirstNavBar from './LeftNavBar/firstNavBar/Pages/PfirstNavBar';
// Header
import MainHeader from './Main/Components/MainHeader';
import PfirstHeader from './Header/firstHeader/Pages/PfirstHeader'
// Card
import PfirstCard from './Card/firstCard/Pages/PfirstCard';

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Routes>
          <Route path="*" element={<Home />} />
          {/* NavBar */}
          <Route path="/firstNavBar" element={<PfirstNavBar />} />
          {/* Header */}
          <Route path="/firstHeader" element={<PfirstHeader />} />
          {/* Card */}
          <Route path="/firstCard" element={<PfirstCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
