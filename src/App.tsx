import { RecoilRoot } from "recoil";
import CatchCopyHeader from "./CatchCopyHeader";
import Comparison from "./Comparison/Comparison";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Header />
        <CatchCopyHeader />
        <Comparison />
      </RecoilRoot>
    </div>
  );
}

export default App;
