import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PhoneWords = ({word: {words, phoneKeys}}) => {

    if(!words){
        return(
            <div className="phone-display"></div>
        )
    }

    return (
        <div>
            <ul className="phone-display">{words.words.map(word => (
            <li key={word}>{word}</li>
        ))}</ul></div>
        
    )
}

PhoneWords.propTypes = {
    word: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    word: state.word
})

export default connect(mapStateToProps)(PhoneWords);