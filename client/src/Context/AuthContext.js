import { createContext, useEffect, useReducer } from "react";
import { LoginSuccess } from "./AuthAction";
import AuthReducer from "./AuthReducer";
import jwt_decode from "jwt-decode";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
      if(localStorage.user){
          const token = localStorage.getItem("user");
          const decoded = jwt_decode(token);
          dispatch(LoginSuccess(decoded._doc));
        }
  }, []);

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
