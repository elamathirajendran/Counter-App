import { Counter } from "./Counter";
import { DebounceInput } from "./DebounceInput";
import { Fetch } from "./Fetch";

function App() {
  return (
    <div className="App">
    <h1>Counter App</h1>
    <DebounceInput/>
    <Counter/>
    <Fetch />
    </div>
  );
}

export default App;
