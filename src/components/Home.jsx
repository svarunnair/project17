import React, { useDebugValue, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCount } from '../pages/action'

function Home() {


    const count =useSelector((store)=>store.data.count)
    const dispatch=useDispatch()

    console.log("count",count)

    useEffect(()=>{
        dispatch(getCount())
    },[])

  return (
    <div>
Home

    </div>
  )
}

export default Home