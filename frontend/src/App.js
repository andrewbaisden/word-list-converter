import React, {Fragment} from 'react';
import {connect} from 'react-redux';

const App = ({word: {test}}) => {
    return(
        <Fragment>
            <h1>Hello from React</h1>
            <p>{test}</p>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    word: state.word
})

export default connect(mapStateToProps)(App);