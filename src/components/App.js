import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  const [index,setIndex]=useState(0);
  //console.log({slides});
  const showTitle=()=>{
    return <h1 data-testid="title">{slides[index].title}</h1>
  }
  const showText=()=>{
    return <p data-testid="text">{slides[index].text}</p>
  }
  return (
    <>
    {showTitle()}
    {showText()}
    <button
    disabled={index==slides.length-1}
    onClick={()=>setIndex((i) => i+1)
    }
    data-testid="button-next">
      Next
    </button>
    <button
    disabled={index==0}
    onClick={()=>
      setIndex((i)=>i-1)}
    data-testid="button-prev">
      Prev
    </button>
    <button
    disabled={index==0}
    onClick={()=>setIndex((i)=>0)}
    data-testid="button-restart">
      Restart
    </button>

    </>
  )
}


export default App;
