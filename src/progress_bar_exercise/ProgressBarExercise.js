import React, {useState, useEffect, useCallback, Component} from "react";
import ReactDOM from "react-dom";
import Exercise from "../exercise/Exercise";
import ProgressBar from "./Bar";
import button from './button.png';
import loadbutton from './loadbutton.png';
import finish from './finish.png';
import "../shared_styles/resets.scss"

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {    
    return ( 
        <div> 
            <ShowBar/>
        </div>
    )
};
const image = {
    startbutton: "./button.png",
    loadbtn: "./loadbutton.png"
}

const ShowBar =() =>{
    const [showResults, setShowResults]= React.useState(false);
    const onClick= () => setShowResults(true);

    return(
     <div>  
        {showResults ? <BarValue/> : null}
        <button value="ShowBar" onClick={onClick}>
             <img src={button} width='200px' alt="Start button" onClick={changeImage}/>
            </button>
       </div>
	)
}

const BarValue = () =>{
     const [value, setValue]= React.useState(0);
     const [endResults, setEndResults] = React.useState(true);
    const onClick= useCallback(() => setEndResults(end => !end)
        , []);
  

    React.useEffect(() => {
        if(!endResults){
            setValue (oldValue => {
                    const newValue = 90;
                
                    if(newValue >= 100) {
                        clearInterval(interval);        
				    }

                    return newValue;
                    }); 
            return
		}
            const interval = setInterval(() => {
                setValue(oldValue => {
                    const newValue = oldValue + 10;
                
                    if(newValue === 100) {
                        clearInterval(interval);        
				    }

                    return newValue;
                    });
            },1500);
        
	},[endResults]);
    return(
     <div>
        <ProgressBar  value={value}/>
        <span>
            <button value="EndBar" onClick={onClick}>
             <img src={finish} width='200px' alt="Finish Request"/>
            </button>
        </span>
     </div>
	)
}




function changeImage(e) {
  e.target.setAttribute( 'src', loadbutton);
  e.target.setAttribute('alt', 'loading');
}
  




