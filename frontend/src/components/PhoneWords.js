import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PhoneWords = ({word: {words, phoneKeys}}) => {

    if(!words){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div>{words.words.map(word => (
            <p key={word}>{word}</p>
        ))}</div>
    )
}

PhoneWords.propTypes = {
    word: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    word: state.word
})

export default connect(mapStateToProps)(PhoneWords);