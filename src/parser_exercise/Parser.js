import React, {useState, useEffect, Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import button from '../docs/button.png';


const Parser = props => {
  const string = props;
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
       for(var i = 0; i <string.length; i++){
          ch = string.charAt(i);
          if(data[index]===ch || upper[index]===ch){
            count++;
		  }
	   }  
       counts.push(count);
       count = 0;

  }
  return (
     <div>
        <label>Phrase </label>
        <input type="textarea" value={string}/>
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


Parser.propTypes = {
    string: PropTypes.string.isRequired,
};
export default Parser;

