import { RecoilRoot } from "recoil";
import Comparison from "./Comparison/Comparison";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Comparison />
      </RecoilRoot>
    </div>
  );
}

export default App;
