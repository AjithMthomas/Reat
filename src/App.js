import './App.css';
import Sample  from './Components/probs';
import Nojsx from './Components/noJSX'
import List from './Components/list';
import State from './Components/state';
import Incriment from './Components/incriment';
import EventHandler from './Components/eHandler';
import ParentComponent from './Components/ParentComponent';
import UseEffect from './Components/UseEffect'
import UseRe from './Components/useRef';
import UseMem from './Components/UseMemo'
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <UseMem/> */}
      {/* <UseRe/> */}
      <UseEffect/>
      {/* <ParentComponent/> */}
       {/* <EventHandler/>  */}
      {/* <Incriment/>
     
      {/* <State/> */}
      {/* <Nojsx /> */}
      {/* <List/> */}
      {/* <Sample name="athul" lastName='k' />
      <h1>this is child</h1>
      <Sample/>
      <Sample name="aji" lastName='l'  />
      <Sample name="kiran" lastName='m'/> */}
    </div>
  );
}

export default App;
