import {BrowserRouter,Routes,Route,Link} from "react-router"
import Terms from "./pages/Terms"
import PriceList from "./pages/PriceList"
import Hamburger from "./pages/Hamburger";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="logo">
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="logo"
          />
        </div>
        <nav className="top-nav">
          <Link to="/terms">Terms</Link>
          <Link to="/pricelist">Pricelist</Link>
          
        </nav>
        <Hamburger/>
        
        
      </header>

      <main>
        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/" element={<Terms />} />
        </Routes>
      </main>
      </BrowserRouter>
    
  );
}

export default App;
