import { LuAlarmClock } from 'react-icons/lu';
import { IoBarChart } from 'react-icons/io5';
import { HiChevronRight } from 'react-icons/hi';
import img1 from '../../images/img01.png';
import img2 from '../../images/img02.png';
import img3 from '../../images/img03.png';
import './Post.css';

function Post() {
  return (
    <section className="post-container">
      <div className="post-header">
        <p>Practice Advice</p>
        <h1>Featured Posts</h1>
      </div>
      <div className="post-main">
        <div className="post-detail-container">
          <div className="img-container">
            <img src={img1} alt="pic-01" className="post-img" />
          </div>
          <div className="post-detail">
            <ul className="post-nav">
              <li>Google</li>
              <li>Trending</li>
              <li>News</li>
            </ul>
            <h3>Loudest à la Madison #1 (Lintegral)</h3>
            <p>
              We focus on ergonomics and meeting you where you work. Its only a
              keystroke away.
            </p>
            <div className="post-time-container">
              <div className="post-time">
                <LuAlarmClock className="post-icon" />
                <span>22 April 2021</span>
              </div>
              <div className="post-comment">
                <IoBarChart className="post-icon" />
                <span>10 comments</span>
              </div>
            </div>
            <button className="post-btn">
              <span>Learn More</span> <HiChevronRight className="post-icon" />
            </button>
          </div>
        </div>
        <div className="post-detail-container">
          <div className="img-container">
            <img src={img2} alt="pic-02" className="post-img" />
          </div>
          <div className="post-detail">
            <ul className="post-nav">
              <li>Google</li>
              <li>Trending</li>
              <li>News</li>
            </ul>
            <h3>Loudest à la Madison #1 (Lintegral)</h3>
            <p>
              We focus on ergonomics and meeting you where you work. Its only a
              keystroke away.
            </p>
            <div className="post-time-container">
              <div className="post-time">
                <LuAlarmClock className="post-icon" />
                <span>22 April 2021</span>
              </div>
              <div className="post-comment">
                <IoBarChart className="post-icon" />
                <span>10 comments</span>
              </div>
            </div>
            <button className="post-btn">
              <span>Learn More</span> <HiChevronRight className="post-icon" />
            </button>
          </div>
        </div>
        <div className="post-detail-container">
          <div className="img-container">
            <img src={img3} alt="pic-03" className="post-img" />
          </div>
          <div className="post-detail">
            <ul className="post-nav">
              <li>Google</li>
              <li>Trending</li>
              <li>News</li>
            </ul>
            <h3>Loudest à la Madison #1 (Lintegral)</h3>
            <p>
              We focus on ergonomics and meeting you where you work. Its only a
              keystroke away.
            </p>
            <div className="post-time-container">
              <div className="post-time">
                <LuAlarmClock className="post-icon" />
                <span>22 April 2021</span>
              </div>
              <div className="post-comment">
                <IoBarChart className="post-icon" />
                <span>10 comments</span>
              </div>
            </div>
            <button className="post-btn">
              <span>Learn More</span> <HiChevronRight className="post-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
