import React from 'react';
import styled from "styled-components";

const TaskInfo = ({filterHandler, classIndex, status, isDark}) => {
    return (
        <TaskWrapper isDark={isDark}>
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
        </TaskWrapper>
    );
};

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: .9rem;
  width: 55%;

  > h4 {
    cursor: pointer;
    color: hsl(236, 9%, 61%);
  }

  .active {
    color: #4A7EE3;
  }
`

export default TaskInfo;