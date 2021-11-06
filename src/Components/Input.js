import React, {useState} from 'react';
import styled from "styled-components";
import {useTaskContext} from "../context/task_context";

const Input = ({isDark}) => {
    const {postTask, isError} = useTaskContext()
    const [value, setValue] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        postTask(value)
        setValue('')
    }

    return (
        <InputWrapper isDark={isDark}>
            <div className='circle'/>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    name='name'
                    placeholder={isError ? 'Something went wrong': 'Create a new todo...'}
                    disabled={!!isError}
                />
            </form>
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background: ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#ffff'};
  border-radius: 5px;
  margin-top: 2.2rem;
  margin-bottom: 1.5rem;

  .circle {
    border: 1px solid ${props => props.isDark ? 'hsl(236, 23%, 28%)' : '#E6E5EA'};
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#ffff'};
    margin: 0 1.3rem;
  }
  
  > form {
    width: 70%;
  }

  & form > input {
    width: 100%;
    height: 4rem;
    background: ${props => props.isDark ? 'hsl(235, 24%, 19%)' : '#ffff'};
    border: none;
    outline: none;
    font-size: 1.1rem;
    color: ${props => props.isDark ? 'hsl(236, 33%, 92%)' : ''};
  }
  
  @media (max-width: 600px) {
    & > form > input {
      font-size: .9rem;
    }
  }
  
  @media (max-width: 430px) {
    
    margin-bottom: 1rem;
    
    & form > input {
      height: 3rem;
      font-size: .7rem;
    }
    
    .circle {
      height: 20px;
      width: 20px;
    }
  }
`

export default Input;