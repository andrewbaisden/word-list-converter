import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import { getWords } from './actions/wordActions';
import PropTypes from 'prop-types';
import PhoneWords from './components/PhoneWords';
import styled, { createGlobalStyle } from 'styled-components';
import phone from './img/phone-alt-solid.svg';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
:root {
  --primary-colour: #343436; /* Example CSS Variable */
}
html {
  font-size: 62.5%; /* font-size 1rem = 10px on default browser settings */
}
* {
	margin: 0;
	padding: 0;
  box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  display: grid;
  justify-content: center;
}

h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
}

.container {
    padding: 5rem;
    max-width: 120rem; /* 1200px */
    background: black;
    height: 80rem;
}

button {
    border-radius: 100%;
    font-size: 3.5rem;
    text-align: center;
    background: #333333;
    border: 0;
    color: white;
    padding: 2rem;
}
button:hover {
    background: #7b7b7b;
    cursor: pointer;
}
.phone-keypad {
    margin-top: 20rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
}

.btn-call {
    background: #67ce67;
}
.phone-icon {
    height: 4rem;
}
.phone-display {
    color: white;
}

.phone-display li {
    display: inline-block;
    font-size: 2rem;
    padding-right: 0.3rem;
}
`

const App = ({word: {words, phoneKeys}, getWords}) => {
    
   const myArray = []

   const seeArr = () => {
    console.log(myArray)
        if(myArray.length === 2) {
            const newArry = myArray.toString().replace(/,/g,"");
            console.log(newArry)
            getWords(newArry)

            if(newArry.length === 3){
                console.log(newArry.slice(0, 2))
            }
        }  
   }

    return(
        <Fragment>
            <GlobalStyle />
            <h1>T9 Phone Keypad App</h1>
            <div className="container">
                <PhoneWords />
                <div className="phone-keypad">
               
                <button>1</button>
                <button onClick={() => myArray.push("2")}>2</button>
                <button onClick={() => myArray.push("3")}>3</button>
                <button onClick={() => myArray.push("4")}>4</button>
                <button onClick={() => myArray.push("5")}>5</button>
                <button onClick={() => myArray.push("6")}>6</button>
                <button onClick={() => myArray.push("7")}>7</button>
                <button onClick={() => myArray.push("8")}>8</button>
                <button onClick={() => myArray.push("9")}>9</button>
                <button>*</button>
                <button>0</button>
                <button>#</button>
                <button className="btn-call" onClick={() => seeArr()}><img src={phone} alt="Phone Call" className="phone-icon" /></button>
                <button onClick={() => myArray.pop()}>x</button>
                </div>
            </div>
        </Fragment>
    )
}

App.propTypes = {
    word: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    word: state.word
})

export default connect(mapStateToProps, {getWords})(App);