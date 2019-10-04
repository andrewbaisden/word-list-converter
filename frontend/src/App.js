import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import { getWords } from './actions/wordActions';
import PropTypes from 'prop-types';
import PhoneWords from './components/PhoneWords';

const App = ({word: {words, phoneKeys}, getWords}) => {
    
   const myArray = []

   const seeArr = () => {
       
            const newArry = myArray.toString().replace(/,/g,"");
            console.log(newArry)
            getWords(newArry)

            if(newArry.length === 3){
                console.log(newArry.slice(0, 2))
            }
       
      

       
   }

    return(
        <Fragment>
            <h1>T9 Phone keypad App</h1>
            
            <PhoneWords />
            <button onClick={() => seeArr()}>See array</button>
            <button onClick={() => myArray.push("2")}>2</button>
            <button onClick={() => myArray.push("3")}>3</button>
            <button onClick={() => myArray.push("4")}>4</button>
            <button onClick={() => myArray.push("5")}>5</button>
            <button onClick={() => myArray.push("6")}>6</button>
            <button onClick={() => myArray.push("7")}>7</button>
            <button onClick={() => myArray.push("8")}>8</button>
            <button onClick={() => myArray.push("9")}>9</button>
            <button onClick={() => myArray.pop()}>Remove from end</button>
      
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