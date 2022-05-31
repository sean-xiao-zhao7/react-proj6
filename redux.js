const redux = require("redux");

const reducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        };
    } else {
        return state;
    }
};

const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
};

store.subscribe(subscriber);
store.dispatch({ type: "increment" });
