import React from 'react';
import '../../Css/Carousel.css'
import img_gob1 from '../../assets/img/img_gob1.jpg';
import img_gob2 from '../../assets/img/img_gob2.png';
import img_intentente from '../../assets/img/img_intentente.png';
import img_team from '../../assets/img/img_team.png';
import img_team2 from '../../assets/img/img_team2.png';

function Carousel() {
  return (
    <div className="carousel_container">
      <div className="carousel-elementos">
        <input type="radio" id="carousel-1" name="carousel[]" defaultChecked />
        <input type="radio" id="carousel-2" name="carousel[]" />
        <input type="radio" id="carousel-3" name="carousel[]" />
        <input type="radio" id="carousel-4" name="carousel[]" />
        <input type="radio" id="carousel-5" name="carousel[]" />
        <ul className="carousel__items">
          <li className="carousel__item">
          <img src={img_gob1} alt="" />
          </li>
          <li className="carousel__item">
          <img src={img_gob2} alt="" />
          </li>
          <li className="carousel__item">
          <img src={img_intentente} alt="" />
          </li>
          <li className="carousel__item">
          <img src={img_team} alt="" className="carousel__img" />
          </li>
          <li className="carousel__item">
          <img src={img_team2} alt="" />
          </li>
        </ul>
        <div className="carousel__prev">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
          <label htmlFor="carousel-4"></label>
          <label htmlFor="carousel-5"></label>
        </div>
        <div className="carousel__next">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
          <label htmlFor="carousel-4"></label>
          <label htmlFor="carousel-5"></label>
        </div>
        <div className="carousel__nav">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
          <label htmlFor="carousel-4"></label>
          <label htmlFor="carousel-5"></label>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
