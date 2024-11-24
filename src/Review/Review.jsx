import React from 'react';
import './Review.css';
import teslaImage from './img/tesla.jpg';
import bmwImage from './img/bmw.jpg';
import johnImage from './img/john.jpg';
import janeImage from './img/jane.jpg';
import { Rate } from "antd";

function Review() {
  return (
    <div className="review-container">
      <h1 className="review-title">Reviews</h1>
      <div className="review-section">
        <h2>Our Review</h2>
        <div className="review-grid">
          <div className="review-card">
            <img src={teslaImage} alt="Tesla Model S" className="review-img" />
            <div className="review-info">
              <h3>Tesla Model S</h3>
              <p><Rate allowHalf defaultValue={4.5} /></p>
              <p>
                The Tesla Model S is a remarkable electric vehicle with impressive 
                performance, cutting-edge technology, and a sleek design. It offers 
                a long driving range and quick acceleration, making it a top choice 
                for electric car enthusiasts.
              </p>
            </div>
          </div>
          <div className="review-card">
            <img src={bmwImage} alt="BMW i8" className="review-img" />
            <div className="review-info">
              <h3>BMW i8</h3>
              <p><Rate allowHalf defaultValue={5} /></p>
              <p>
                The BMW i8 is a stunning hybrid sports car that combines performance 
                and efficiency. Its futuristic design and advanced features make it 
                a standout in the luxury car market.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="review-section">
        <h2>Customer Review</h2>
        <div className="review-grid">
          <div className="review-card">
            <img src={johnImage} alt="John Doe" className="review-img" />
            <div className="review-info">
              <h3>John Doe</h3>
              <p><Rate allowHalf defaultValue={4} /></p>
              <p>
                I recently purchased the Tesla Model S, and I couldn't be happier. 
                The performance is outstanding, and the technology is truly 
                impressive. Highly recommend!
              </p>
            </div>
          </div>
          <div className="review-card">
            <img src={janeImage} alt="Jane Smith" className="review-img" />
            <div className="review-info">
              <h3>Jane Smith</h3>
              <p><Rate allowHalf defaultValue={4.5} /></p>
              <p>
                The BMW i8 is an amazing car. It's not only beautiful but also 
                delivers great performance. The hybrid technology is a game-changer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;