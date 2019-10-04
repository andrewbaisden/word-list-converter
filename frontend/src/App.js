import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import { getWords } from './actions/wordActions';
import PropTypes from 'prop-types';

const App = ({word: {test}, getWords}) => {
    useEffect(() => {
        getWords("24");
    }, [])
    return(
        <Fragment>
            <h1>Hello from React</h1>
            <p>{test}</p>
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