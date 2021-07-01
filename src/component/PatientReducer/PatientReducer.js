import React, { useReducer } from 'react';
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'AddPatient':
      return {count: state.count + 1};
    case 'RemovePatient':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const PatientReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Manage Doctor Chamber</h1>
            <h1>Total Patient : {state.count}</h1>
            <button onClick={() => dispatch({type: 'AddPatient'})}>AddPatient</button>
            <button onClick={() => dispatch({type: 'RemovePatient'})}>RemovePatient</button>
        </div>
    );
};

export default PatientReducer;