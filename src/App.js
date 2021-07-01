import logo from './logo.svg';
import './App.css';
import ExploreRef from './component/ExploreRef/ExploreRef'
import ReducerCount from './component/ReducerCount/ReducerCount'
import PatientReducer from './component/PatientReducer/PatientReducer'

function App() {
  return (
    <div className="App">
      <ExploreRef></ExploreRef>
      <ReducerCount></ReducerCount>
      <PatientReducer></PatientReducer>
    </div>
  );
}

export default App;
