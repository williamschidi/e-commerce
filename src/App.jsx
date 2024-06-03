import LandingPage from './Pages/LandingPage';
import PaymentPage from './Pages/PaymentPage';
import ProductPage from './Pages/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
