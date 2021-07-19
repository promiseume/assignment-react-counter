import './App.css';
import Counter from "./component/counter"
import Clock from "./component/clock"
import Button from './component/button'
import Color from './component/color'
function App() {
  return (
    <div className="App">
      <Counter/>
      <Clock/>
      <Button/>
      <Color/>
    </div>
  );
}

export default App;
