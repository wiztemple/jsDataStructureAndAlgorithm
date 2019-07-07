// Insurance Company modelling with React
// Action creators

// people dropping off a form (action creators)
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}
const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}
const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
}

// Reducers (Departments)
const claimsHistory = (oldListsOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM)
    return [...oldListsOfClaims, action.payload];
  }
  // we don't care about this action
  return oldListsOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amountOfMoneyToCollect
  }
  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}

const { createStore, combineReducers } = Redux;

const allDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(allDepartments);

const action = createPolicy('Sullivan', 30000);

store.dispatch(action);

console.log(store.getState());

// Redux sample implementation
const createStore = (initialReducer, initialState = {}, enhancer) => {
  if (enhancer) {
    return enhancer(createStore)(initialReducer, initialState)
  }
  let reducer = initialReducer;
  let subscribers = [];
  let state = reducer({}, { type: '__INIT__'});
  return {
    getState() {
      return state;
    },
    dispatch() {
      state = reducer(state, action);
      subscribers.forEach(subscriber => subscriber())
    },
    subscribe(listener) {
      subscribers.push(listener);
      return () => {
        subscribers = subscribers.filter(subscriber => subscriber !== listener);
      }
    },
    replaceReducer(newReducer) {
      reducer = newReducer;
      this.dispatch({ type: '__REPLACE__'})
    }
  }
}
