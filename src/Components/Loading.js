import React from 'react';
import styled from "styled-components";

const Loading = () => {
    return (
        <LoadingWrapper>
            <div className='loader'>
                <div className="loader"/>
            </div>
        </LoadingWrapper>
    );
};

const LoadingWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;

  .loader {
    width: 100%;
    height: 100%;
    border: 1rem solid #162534;
    border-radius: 50%;
    border-top-color: #4A7EE3;
    border-bottom-color: #4A7EE3;
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: scale(1) rotate(360deg);
    }
    50% {
      transform: scale(.7) rotate(-360deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
  
  @media (max-width: 430px) {
    width: 5rem;
    height: 5rem;
  }
`

export default Loading;