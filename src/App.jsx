import LandingPage from './Pages/LandingPage';
import PaymentPage from './Pages/PaymentPage';
import ProductPage from './Pages/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productPage" element={<ProductPage />} />

        <Route path="/shopping-cart" element={<PaymentPage />} />
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        toastOptions={{
          success: { duration: 1000 },
          icon: null,
          error: { duration: 5000 },
          style: { fontSize: '16px' },
          maxWidth: '500px',
          padding: '16px 24px',
          backgroundColor: '#E6F0E6',
          color: '#222121',
        }}
      />
    </Router>
  );
}

export default App;
