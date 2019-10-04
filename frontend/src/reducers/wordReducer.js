const intitalState = {
    test: "hello world"
}

export default (state = intitalState, action) => {
    switch(action) {
        default:
            return state;
    }
}