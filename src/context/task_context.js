import React, {useReducer, useContext} from "react";
import {task_reducer} from "../reducer/task_reducer";
import axios from "axios";

const initialValues = {
    todos: [],
    filtered_todos: [],
    isLoading: true,
    isError: false
}

const taskUrl = 'https://frontend-mentor-backend.herokuapp.com/api/todos/'
const updateDeleteTaskUrl = 'https://frontend-mentor-backend.herokuapp.com/api/update-delete/'
const deleteCompletedTasksUrl = 'https://frontend-mentor-backend.herokuapp.com/api/delete-completed-todos/'

const TaskContext = React.createContext()

export const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(task_reducer, initialValues)

    const fetchTasks = async () => {
        dispatch({
            type: 'LOADING'
        })
        try {
            const response = await axios.get(taskUrl)
            dispatch({
                type: 'FETCH_TODOS',
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR'
            })
        }
    }

    const postTask = async (name) => {
        try {
            const response = await axios.post(taskUrl, {
                name,
                completed: false
            })
            dispatch({
                type: 'FETCH_TODOS',
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR'
            })
        }
    }

    const updateTask = async (id, completed) => {
        let updatedTask = null
        if (completed === false) {
            updatedTask = true
        }
        if (completed === true) {
            updatedTask = false
        }
        try {
            const response = await axios.put(`${updateDeleteTaskUrl}${id}/`, {
                completed: updatedTask
            })
            dispatch({
                type: 'FETCH_TODOS',
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR'
            })
        }
    }

    const deleteTask = async (id) => {
        try {
            const response = await axios.delete(`${updateDeleteTaskUrl}${id}/`)
            dispatch({
                type: 'FETCH_TODOS',
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR'
            })
        }
    }

    const deleteCompletedTasks = async () => {
        try {
            const response = await axios.delete(deleteCompletedTasksUrl)
            dispatch({
                type: 'FETCH_TODOS',
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR'
            })
        }
    }

    const allTodos = () => {
        dispatch({
            type: 'ALL_TODOS'
        })
    }

    const activeTodos = () => {
        dispatch({
            type: 'ACTIVE_TODOS'
        })
    }

    const completedTodos = () => {
        dispatch({
            type: 'COMPLETED_TODOS'
        })
    }

    return (
        <TaskContext.Provider value={{
            ...state,
            fetchTasks,
            postTask,
            updateTask,
            deleteTask,
            deleteCompletedTasks,
            allTodos,
            activeTodos,
            completedTodos
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => {
    return useContext(TaskContext)
}