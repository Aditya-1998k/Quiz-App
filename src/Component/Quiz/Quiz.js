import Data from "../Data/data";
import { useState } from "react";
import "./Quiz.css"
import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';

const Quiz=()=>{

    const [currentQuestion, setCurrentQuestion]=useState(0);
    const [score, setScore]=useState(0);
    const [showScore, setShowScore]=useState(false)

    const handleAnswerButtonClick=(isCorrect)=>{
            if(isCorrect){
                setScore(score+1)
              }

    if(currentQuestion<Data.length-1 ){
         const nextquestion=currentQuestion+1;
         setCurrentQuestion(nextquestion)
    }
    else{
      setShowScore(true)
    }
  }

  return(
    <>
    <div className="quiz-main">
          <div className='app'>{showScore ? (<div className='score-section'>
            <>
              <div style={{backgroundColor:"white", margin:"50px",height:"40px",width:"38%",position:"relative", left:"25%"}}><h1>Your Score is : {score}</h1></div>
              <div>
                <Button variant="contained" style={{backgroundColor:"black", color:"white"}}><Link style={{textDecoration:"none"}} to="/"><h1 style={{margin:"40px"}}>{score>6 ? (<span>बहुत अच्छा<br/>Home</span>) :(<span>पुनः कोशिश करे</span>)}</h1></Link></Button>
              </div>
              <div style={{backgroundColor:"white", color:"black", margin:"30px", width:"70%", height:"40%", position:"relative", left:"15%"}}>
                <h2>आजादी के 75 वे  वर्षगाठ पर इंडिया पोस्ट देवरियां डिवीज़न आप सभी देश वासियो से आग्रह करता है की हर घर तिरंगा अभियान से जुड़ कर देश के एकता और अखंडता को प्रदर्शित करे ।
                    <br/>स्वंत्रता दिवस की हार्दिक शुभकामनाये  </h2>
              </div>
              
            </>
          </div>) :
          (
            <>
                <div className='question-section' style={{backgroundColor:"white"}}>
                  {currentQuestion+1}<span style={{margin:"2px"}}>.</span><h1>{Data[currentQuestion].questionText}</h1>
                </div>
                <div className='answer-section'>
                      {Data[currentQuestion].answerOptions.map((answer, index)=>{
                        return(
                        <Button variant="contained" key={index} style={{display:"block", margin:"10px" , backgroundColor:"white",color:"black"}} onClick={()=>handleAnswerButtonClick(answer.isCorrect)}><h2>{answer.answerText}</h2></Button>
                      )})}
                </div>
              </>
            )}
          </div>
    </div>
    </>
  )
}
export default Quiz