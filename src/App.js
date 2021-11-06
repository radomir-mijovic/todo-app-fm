import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Input from "./Components/Input";
import TaskList from "./Components/TaskList";
import lightPic from './assets/bg-desktop-light.jpg'
import darkPic from './assets/bg-desktop-dark.jpg'
import lightPicMobile from './assets/bg-mobile-light.jpg'
import darkPicMobile from './assets/bg-mobile-dark.jpg'
import {useTaskContext} from "./context/task_context";


function App() {
    const [isDark, setIsDark] = useState(false)
    const {fetchTasks} = useTaskContext()

    const themeSwitcher = () => {
        setIsDark(prevState => !prevState)
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <AppWrapper isDark={isDark}>
            <div className='inside'>
                <Header isDark={isDark} themeSwitcher={themeSwitcher}/>
                <Input isDark={isDark}/>
                <TaskList isDark={isDark}/>
            </div>
            <img className='desktop-img' src={isDark ? darkPic : lightPic} alt=""/>
            <img className='mobile-img' src={isDark ? darkPicMobile : lightPicMobile} alt=""/>
            <div style={{background: isDark ? 'hsl(235, 21%, 11%)' : '#FAFAFA'}} className='bottom'/>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .mobile-img {
    display: none;
  }

  .inside {
    position: absolute;
    height: 82vh;
    width: 38%;
    background: transparent;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .bottom {
    width: 100%;
    height: 100%;
  }

  .desktop-img {
    width: 100%;
  }

  @media (max-width: 1200px) {
    .inside {
      width: 50%;
    }
  }

  @media (max-width: 830px) {

    .mobile-img {
      display: block;
    }

    .desktop-img {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .inside {
      width: 70%;
    }

  ;
  }

  @media (max-width: 430px) {

    .inside {
      width: 85%;
      height: 93vh;
    }
  }
`

export default App;
