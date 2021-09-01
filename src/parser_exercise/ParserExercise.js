import React, {Component} from "react";
import Exercise from "../exercise/Exercise";
import {Card} from 'react-bootstrap';
import button from '../docs/button.png';

const ParserExercise = () => {
  return (
    <div className="parser">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/2"
        title="Parser Exercise"
      />
    </div>
  );
};

export default ParserExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  return <div>

    <Simpletextarea/>
    <ShowParse/>
    Add solution here
    </div>;
};


class Simpletextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
        string:""
    };
    this.stringChange = this.stringChange.bind(this);
  }

  stringChange(e) {
        this.setState({
            string: e.target.value  
		});
    }
  render() {
    return (
      <div>
        <label>Phrase </label>
        <input type="textarea" name="str" onChange={this.stringChange}/>
        <div>
            <button type="button" onClick={this.stringChange.bind(this)} className="btn">
                 <img src={button} width='200px' alt="Start button"/>
            </button>
         </div>
      </div>
    );
  }
}


const ShowParse =() =>{
    const [showResults, setShowResults]= React.useState(false);
    const onClick= () => setShowResults(true);

    return(
     <div>  
        {showResults ? <Parser/> : null}
       </div>
	)
}
let str = Simpletextarea.stringChange;
console.log(str);
const Parser = () => {
  
  const data = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  const upper = [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
  let count = 0;
  let index = 0;
  let ch;
  let counts = [];
  for(index; index <= data.length; ++index){
       for(var i = 0; i <str.length; i++){
          ch = str.charAt(i);
          if(data[index]===ch || upper[index]===ch){
            count++;
		  }
	   }  
       counts.push(count);
       count = 0;

  }
  return (
    <div>

    <div className="parse">
      {data.map((char,i) => (
        <div className="parse" key="{i}">{char}</div>
      ))}
      {counts.map((temps, i2 ) => (
        <div className="parse" key="{i2}">{temps}</div>
      ))}
    </div>
    </div>
  );
};




