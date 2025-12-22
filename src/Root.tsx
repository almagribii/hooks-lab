import { Routes, Route } from "react-router-dom";
import { UseState } from "./pages/UseState";

function App() {
  return (
    <div>
       <Routes>
       <Route path="/usestate" element={<UseState />} />
      </Routes>
    </div>
  );
}

export default App;
