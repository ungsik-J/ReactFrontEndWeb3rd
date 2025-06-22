import React, { useState, useReducer } from 'react'


const style ={
    width: "100%",
    height: "100px",
    backgroundColor: 'black',
    border: "1px solid black",
    color: "white",
}

const initialState = {color: 'black'}

const colorReducer = (state, action) => {
    switch(action.type){
        case "RED": 
            return {...state, color:'red'}
        case "BLUE":
            return {...state, color: 'blue'}

        default:
            return state;
    }
}


const ChangeColor = () => {
    const [state, dispatch] = useReducer(colorReducer, initialState);
    const handleClick = (param) => {
        param === "red" ? dispatch({type:"RED"}) : dispatch({type:"BLUE"})
    }

  return (
    <>
        <div style={{...style, backgroundColor: state.color}}>버튼을 클릭 하면 색상 변경하기</div>
        <button onClick={()=>handleClick('red')}>red</button>
        <button onClick={()=>handleClick('blue')}>blue</button>
        
    </>
  )
}

export default ChangeColor;