//create an initial state which you want to manage first
const initialState = { counter: 0 }

//which actions should be available for your state? 
//we have a counter here right? and obviously we would like to increment or decrement that counter 
//so make a reducer function which would do something for us, for that it will take two things: 
//state and then the task/action to perform on it
const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return { counter: state.counter + 1 }
    }
    if(action.type === 'decrement'){
        return { counter: state.counter - 1 }
    }
    return state
}

//Now create the store for this
const redux = require('redux')

//connect your reducer function to the redux store that you made
const store = redux.createStore(counterReducer);

//Now the store is live.
//NOTE: Redux automatically runs the reducer once to initialize the state.

//Now we want to know the state changes. because when it changes, we want to react to it/ do something.
//to get the updates, you need to subscribe to the store.

//So we create a subscriber which will subscribe to the store and give us the updates, 
//it will get the latest State and give it to us
const ourSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(ourSubscriber)

//Now that everyone's role is decided, we dispatch actions on the store
store.dispatch({type: 'increment'})