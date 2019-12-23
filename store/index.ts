import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

export const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

export type State = {
  lastUpdate: number;
  light: boolean;
  count: number;
};

export const actionTypes = {
  TICK: "TICK",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET"
};

// REDUCERS
export const reducer = (state = exampleInitialState, action: any) => {
  switch (action.type) {
    case actionTypes.TICK:
      return { ...state, lastUpdate: action.ts, light: !!action.light };
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: exampleInitialState.count };
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = (isServer: any) => (dispatch: any) =>
  dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });

export const startClock = (dispatch: any) =>
  setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
  }, 1000);

export const incrementCount = () => (dispatch: any) =>
  dispatch({ type: actionTypes.INCREMENT });

export const decrementCount = () => (dispatch: any) =>
  dispatch({ type: actionTypes.DECREMENT });

export const resetCount = () => (dispatch: any) =>
  dispatch({ type: actionTypes.RESET });

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
