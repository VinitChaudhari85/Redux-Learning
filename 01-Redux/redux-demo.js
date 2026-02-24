//import redux
const redux = require('redux');

//A reducer function
const counterReduer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    }
}

//create the redux store 
const store = redux.createStore(counterReduer);

// console.log(store.getState())

//creating subscriber
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({type : 'increment'})