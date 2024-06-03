import { HiTrendingUp } from 'react-icons/hi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { FaBookReader } from 'react-icons/fa';
import './Desire.css';

function Desire() {
  return (
    <section className="desire-container">
      <header className="desire-header">
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between </p>
      </header>
      <main className="desire-main">
        <div className="desire-card">
          <FaBookReader className="desire-icon" />
          <h2>Easy Wins</h2>
          <p>Get your best looking smile now!</p>
        </div>
        <div className="desire-card">
          <HiOutlineBookOpen className="desire-icon" />
          <h2>Concrete</h2>
          <p>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div className="desire-card">
          <HiTrendingUp className="desire-icon" />
          <h2>Hack Growth</h2>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </main>
    </section>
  );
}

export default Desire;
