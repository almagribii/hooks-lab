import { Routes, Route } from "react-router-dom";
import { UseState } from "./pages/UseState";
import { Counter } from "./hooks-lab/useState/Counter";
import { Forms } from "./hooks-lab/useState/Forms";
import { Toogle } from "./hooks-lab/useState/Toogle";

function App() {
  return (
    <div>
       <Routes>
       <Route path="/usestate" element={<UseState />} />
       <Route path="/usestate/counter" element={<Counter />} />
       <Route path="/usestate/forms" element={<Forms />} />
       <Route path="/usestate/toogles" element={<Toogle />} />
      </Routes>
    </div>
  );
}

export default App;
