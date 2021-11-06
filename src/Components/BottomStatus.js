import React, {useState} from 'react';
import styled from "styled-components";
import {useTaskContext} from "../context/task_context";
import TaskInfo from "./TaskInfo";

const status = [
    {
        name: 'All'
    },
    {
        name: 'Active'
    },
    {
        name: 'Completed'
    }
]

const BottomStatus = ({isDark}) => {
    const {allTodos, activeTodos, completedTodos, todos, deleteCompletedTasks} = useTaskContext()
    const [classIndex, setClassIndex] = useState(0)

    const itemsLeft = todos.filter(todo => todo['completed'] === false).length

    const filterHandler = (event, index) => {
        event.preventDefault()
        setClassIndex(index)
        if (event.target.firstChild.data === 'Active') {
            activeTodos()
        }
        if (event.target.firstChild.data === 'Completed') {
            completedTodos()
        }
        if (event.target.firstChild.data === 'All') {
            allTodos()
        }
    }

    return (
        <>
            <StatusWrapper isDark={isDark}>
                <h5 className='items-left'>{itemsLeft} items left</h5>
                <div className='status'>
                    {status.map((item, index) => {
                        return (
                            <h4
                                key={index}
                                className={classIndex === index ? 'active' : null}
                                onClick={(event => filterHandler(event, index))}>
                                {item.name}
                            </h4>
                        )
                    })}
                </div>
                <h5 onClick={deleteCompletedTasks} className='clear-completed'>Clear completed</h5>
            </StatusWrapper>
            <BottomDiv isDark={isDark}>
                <TaskInfo
                    isDark={isDark}
                    classIndex={classIndex}
                    filterHandler={filterHandler}
                    status={status}/>
            </BottomDiv>
        </>
    );
};

const StatusWrapper = styled.div`
  height: 3.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#fff'};
  border: 1px solid ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#fff'};
  box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 5px 5px;
  color: hsl(236, 9%, 61%);

  & > h5 {
    font-weight: 400;
  }

  .clear-completed {
    cursor: pointer;
  }

  .status {
    display: flex;
    justify-content: space-between;
    font-size: .9rem;
    width: 11rem;
    margin: 0 2rem;

    > h4 {
      cursor: pointer;
    }

    .active {
      color: #4A7EE3;
    }
  }

  @media (max-width: 820px) {
    .status {
      display: none;
    }
  }
  
  @media (max-width: 600px) {
    
  }

  @media (max-width: 430px) {
    .items-left {
      margin-right: 5rem;
    }

    > h5 {
      font-size: .8rem;
    }
  }


`

const BottomDiv = styled.div`
  height: 3rem;
  width: 100%;
  background: ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#ffff'};
  box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 820px) {
    display: none;
  }
`

export default BottomStatus;