import { createContext,useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE={
    user:{
        _id: "622a03595557527308d9f74d",
        userName: "Eden",
        userLastName: "Tas",
        birthDate: "1994-12-11T22:00:00.000Z",
        email: "eden@gmail.com",
        password: "$2a$10$AUQQx1VQQ6.ZCPFHYn1VE.NzTNXHLNXfQrdSANon4dTvvB5ilZNya",
        profilePicture: "",
        coverPicture: "",
        followers: [
            "622b2255aa086d5555abea6a",
            "622b2272aa086d5555abea70"
        ],
        followings: [
            "622a03595557527308d9f74d",
            "6229dfbd96ab2cc29fe15c32"
        ],
        isAdmin: false,
    },
    // user:null,
    isFetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return(
       <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch}}>
        {children}
       </AuthContext.Provider>
    )
}