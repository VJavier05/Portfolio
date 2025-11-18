import React from 'react';
import styled from 'styled-components';
import Lanyard from './three/Lanyard';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
          {/* Left side: About Me */}
          <div className="card__left">
            <h2 className="card__title">About Me</h2>
            <p className="card__text">
              I'm Javier – a frontend-focused developer who blends clean UI, creative animations,
              and performant code into products that delight users. I specialize in React, Framer Motion,
              and polished UI/UX for web and mobile experiences.
            </p>
          </div>

          {/* Right side: React lanyard (3D Canvas) */}
          <div className="card__right">
            <div className="canvas-wrapper">
              <Lanyard />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;

  .card {
    width: 100%;
    height: 550px;
    border-radius: 20px;
    padding: 10px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card:hover {
    transform: scale(1.02);
  }

  .card__content {
    background: rgb(5, 6, 45);
    border-radius: 17px;
    width: 100%;
    height: 100%;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .card__left {
    flex: 1;
    text-align: left;
  }

  .card__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background-image: linear-gradient(to right, #fff, #6f6fbe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card__text {
    font-size: 1rem;
    line-height: 1.5;
    color: rgba(255,255,255,0.85);
  }

  .card__right {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .canvas-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
  }

  .canvas-wrapper canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

export default Card;
