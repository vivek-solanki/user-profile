import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/userReducer"
const AppContext = createContext();

const API ="https://panorbit.in/api/users.json";

const initialState ={
    isLoading:false,
    isError:false,
    users: [],
    isSingleLoading:false,
    singleUser: {},
}

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const getUsers = async (url) =>{
        dispatch({type: "SET_LOADING"})
        try {
            const res = await axios.get(url);
            const users = await res.data.users;
            dispatch({type: "USERS_LIST", payload: users});
        } catch (error) {
            dispatch({type: "USERS_API_ERROR"})
        }
    }

    const getSingleUser = async (url) =>{
        dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url);
            const singleUser = await res.data.users;
            dispatch({type: "SINGLE_USER", payload: singleUser});
        } catch (error) {
            dispatch({type: "SINGLE_USER_ERROR"})
        }
    }

    useEffect(()=>{
        getUsers(API)
    },[])

    return (
        <AppContext.Provider value={{...state, getSingleUser    }}>{children}</AppContext.Provider>
    )
    
}

const useUserContext = () =>{
    return useContext(AppContext)
}
export {AppProvider, AppContext, useUserContext}