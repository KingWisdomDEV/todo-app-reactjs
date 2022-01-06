const logger = (reducer) => {
    return (prevState, action) => {
        console.group(action.type);
        console.log('Prev state :>> ', prevState);

        const newState = reducer(prevState, action)
        
        console.log('Next state :>> ', newState);
        console.groupEnd();
        return newState
    }
}

export default logger