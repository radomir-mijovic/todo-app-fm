import React from 'react';
import styled from "styled-components";
import errorImg from '../assets/something_went_wrong.jpg'

const Error = () => {
    return (
        <ErrorWrapper>
            <img src={errorImg} alt=""/>
        </ErrorWrapper>
    );
};

const ErrorWrapper = styled.div`
  width: 100%;
  height: auto;
  
  > img {
    width: 100%;
    height: auto;
  }
`

export default Error;