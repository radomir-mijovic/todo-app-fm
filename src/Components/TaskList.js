import React from 'react';
import styled from "styled-components";
import BottomStatus from "./BottomStatus";
import {useTaskContext} from "../context/task_context";
import checkIcon from '../assets/icon-check.svg'
import crossIcon from '../assets/icon-cross.svg'
import Loading from "./Loading";
import Error from "./Error";

const TaskList = ({isDark}) => {
    const {filtered_todos, updateTask, deleteTask, isLoading, isError} = useTaskContext()

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    if (isError) {
        return (
            <Error/>
        )
    }

    return (
        <ParentWrapper>
            {filtered_todos.map((todo, index) => {
                const {id, name, completed} = todo;

                return (
                    <TaskListWrapper completed={completed} key={index} isDark={isDark}>
                        <div className="circle">
                            {completed && <img src={checkIcon} alt=""/>}
                        </div>
                        <h4 onClick={() => updateTask(id, completed)}>{name}</h4>
                        <img
                            onClick={() => deleteTask(id)}
                            className='cross-icon'
                            src={crossIcon}
                            alt=""/>
                    </TaskListWrapper>
                )
            })}
            <BottomStatus isDark={isDark}/>
        </ParentWrapper>
    );
};

const ParentWrapper = styled.div`
   margin-bottom: 3rem;

  & > :first-child {
    border-radius: 5px 5px 0 0;
  }
`

const TaskListWrapper = styled.div`
  background: ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#ffff'};
  height: 4rem;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#ffff'};
  border-bottom: 1px solid ${props => props.isDark ? 'hsl(0,2%,37%)' : '#E6E5EA'};
  //box-shadow: 0 0 40px 3px rgba(0,0,0,0.1);
  position: relative;
  
  .cross-icon {
    position: absolute;
    right: 1rem;
    cursor: pointer;
  }

  .circle {
    border: 1px solid ${props => props.isDark ? 'hsl(236, 23%, 28%)' : '#E6E5EA'};
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#ffff'};
    margin: 0 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    > img {
      background: linear-gradient(to bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
      border-radius: 50%;
      padding: 1rem;
    }
  }

  & > h4 {
    font-weight: 400;
    font-size: 1.1rem;
    text-decoration: ${props => props.completed ? 'line-through' : null};
    text-decoration-color: ${props => props.isDark ? '#4D4F64' : '#BFBEC3'};
    cursor: pointer;
    color: ${props => {
      if (props.completed && !props.isDark) {
        return '#BFBEC3'
      } else if (props.completed && props.isDark) {
        return '#4D4F64'
      } else if (props.isDark) {
        return '#B3B5CE'
      } else if (!props.isDark) {
        return 'hsl(235, 19%, 35%)'
      }
    }};

  }
  
  @media (max-width: 430px) {
    height: 3.3rem;
    
    .circle {
      height: 20px;
      width: 20px;
      margin: 0 .8rem;
    }
    
    .cross-icon {
      height: .7rem;
      width: .7rem;
    }
    
    > h4 {
      font-size: .7rem;
    }
  }
`

export default TaskList;