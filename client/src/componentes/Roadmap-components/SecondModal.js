import React from 'react';
import Carousel from './Carousel';
import SecondCarousel from './SecondCarousel';
import '../../Css/SecondModal.css';

function SecondModal() {
  return (
    <div className="secondmodal-container">
      <div className="secondmodal-overlay">
        <div className="secondmodal">
          <h2></h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

function ThirdModal() {
  return (
    <div className="secondmodal-container">
      <div className="secondmodal-overlay">
        <div className="secondmodal">
          <h2></h2>
          <SecondCarousel />
        </div>
      </div>
    </div>
  );
}

export { SecondModal, ThirdModal };
