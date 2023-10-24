import axios from "axios"




export const GET_COUNT_REQUIEST="GET_COUNT_REQUIEST"
export const GET_COUNT_SUCCESS="GET_COUNT_SUCCESS"
export const GET_COUNT_FAILURE="GET_COUNT_FAILURE"


const getCountRequiest=()=>{
    return({
        type:GET_COUNT_REQUIEST
    })
}
const getCountSuccess=(data)=>{
    return({
        type:GET_COUNT_SUCCESS,
        payload:data
    })
}
const getCountFailure=()=>{
    return({
        type:GET_COUNT_FAILURE
    })
}



export const getCount=()=>(dispatch)=>{
    dispatch(getCountRequiest())
    return axios({
        url:'https://api.apis.guru/v2/list.json',
        method:"GET"
    })

    .then((res)=>{
        dispatch(getCountSuccess(res.data))
    })

    .catch((error)=>{
        dispatch(getCountFailure())
    })
}