import { Routes, Route } from "react-router-dom";
import { UseState } from "./pages/UseState";
import { Counter } from "./hooks-lab/useState/Counter";
import { Forms } from "./hooks-lab/useState/Forms";
import { Toggle } from "./hooks-lab/useState/Toggle";

function App() {
  return (
    <div>
       <Routes>
       <Route path="/usestate" element={<UseState />} />
       <Route path="/usestate/counter" element={<Counter />} />
       <Route path="/usestate/forms" element={<Forms />} />
       <Route path="/usestate/toggles" element={<Toggle />} />
      </Routes>
    </div>
  );
}

export default App;
