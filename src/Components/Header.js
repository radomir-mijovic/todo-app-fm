import React from 'react';
import styled from "styled-components";
import sunIcon from '../assets/icon-sun.svg'
import moonIcon from '../assets/icon-moon.svg'

const Header = ({themeSwitcher, isDark}) => {
    return (
        <HeaderWrapper>
            <h1>TODO</h1>
            {!isDark ?
                <img onClick={themeSwitcher} src={moonIcon} alt=""/> :
                <img onClick={themeSwitcher} src={sunIcon} alt=""/>
            }
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > h1 {
    font-size: 2.5rem;
    letter-spacing: 15px;
    color: #ffff;
  }

  > img {
    cursor: pointer;
  }
  
  @media (max-width: 700px) {
    > h1 {
      font-size: 1.8rem;
    }
    
    > img {
      height: 1.4rem;
      width: 1.4rem;
    }
  }

  @media (max-width: 430px) {
    margin-top: 1rem;
    > h1 {
      font-size: 1.6rem;
    }
    
    > img {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`

export default Header;