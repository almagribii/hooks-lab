import { Routes, Route } from "react-router-dom";
import { UseState } from "./pages/UseState";
import { Counter } from "./hooks-lab/useState/Counter";

function App() {
  return (
    <div>
       <Routes>
       <Route path="/usestate" element={<UseState />} />
       <Route path="/usestate/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
