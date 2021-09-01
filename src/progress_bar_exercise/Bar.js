import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from 'styled-components';
import LinearGradient from 'react';


const minColor = '#fcaf60 0%';
    const maxColor = '#f90847 100%';
const Container= styled.div`
    progress[value]{
     width: ${props=> props.width};
     appearance: none; 
     -webkit-appearance:none;
     -moz-appearance:none;

     ::-webkit-progress-bar{
      height: 6px;
      border-radius: 20px;
      background-color: #eee;
	 }

     ::-webkit-progress-value{
      height:6px;
      border-radius: 20px;
      background: ${props => props.color};
	 }

     ::-moz-progress-bar{
      height: 6px;
      border-radius: 20px;
      background-color: #eee;
	 }

     ::-moz-progress-value{
      height:6px;
      border-radius: 20px;
      background: ${props => props.color};
	 }
	}
`;
const ProgressBar = props => {
    const {value, max, color, width} = props;
    return(
   <Container color={color} width={width} >
        <progress value={value} max={max} style={{}} />
        <span>{(value/max)*100}%</span>        
    </Container>
    )
};




ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string
};

ProgressBar.defaultProps = {
    max: 100,
    color: 'linear-gradient(to right, #ff9959, #fcaf60, #f90847) ',
    width: '100%'
};

export default ProgressBar;