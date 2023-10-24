import { ReactReduxContext } from "react-redux"
import { GET_COUNT_FAILURE, GET_COUNT_REQUIEST, GET_COUNT_SUCCESS } from "./action"




const initstate={
    iserror:false,
    isloading:false,
    count:[]
}

export const reducer=(state=initstate,action)=>{
    switch(action.type){
        case GET_COUNT_REQUIEST:
            return({
                ...state,
                iserror:false,
                isloading:true
            })
            case GET_COUNT_SUCCESS:
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    count:action.payload
                })
                case GET_COUNT_FAILURE:
                    return({
                        ...state,
                        iserror:true,
                        isloading:false
                    })



                    default:
                        return({
                            ...state
                        })
    }
}