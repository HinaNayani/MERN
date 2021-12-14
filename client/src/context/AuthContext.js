import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "61b619f3767a702c50f0d9f9",
    username: "Chandler Bing ",
    email: "chandler123@gmail.com",
    profilePicture: "",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: [],
  },

  // user:JSON.parse(localStorage.getItem("user")) || null,
  // isFetching: false,
  // error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
