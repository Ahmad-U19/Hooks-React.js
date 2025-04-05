import './App.css';
import React from 'react';
import Context from './Components/Context';
//import DataFetching from './Components/DataFetching';
//import IntervalHook from './Components/IntervalHook';
//mport MouseContainer from './Components/MouseContainer';
//import HookCountertwo from './Components/HookCountertwo';
//import HooksEffectCounter from './Components/HooksEffectCounter';
//import MouseHooks from './Components/MouseHooks';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <HooksEffectCounter /> */}
      {/* <MouseContainer /> */}
      {/* <MouseHooks /> */}
      {/* <IntervalHook /> */}
      {/* <DataFetching /> */}
      <UserContext.Provider value={'Ahmad'}>
        <Context />
      </UserContext.Provider>
    </div>
  );
}

export default App;
