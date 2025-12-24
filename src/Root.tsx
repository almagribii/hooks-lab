import { Routes, Route } from "react-router-dom";
import { UseState } from "./pages/UseState";
import { Counter } from "./hooks-lab/useState/Counter";
import { Forms } from "./hooks-lab/useState/Forms";
import { Toggle } from "./hooks-lab/useState/Toggle";
import { UseEffect } from "./pages/UseEffect";
import { Synchronization } from "./hooks-lab/useEffect/Synchronization";
import { Timer } from "./hooks-lab/useEffect/Timer";
import { FetchingData } from "./hooks-lab/useEffect/FetchingData";
import { EventListener } from "./hooks-lab/useEffect/EventListener";

function App() {
  return (
    <div>
       <Routes>
        {/* Use State Case */}
       <Route path="/usestate" element={<UseState />} />
       <Route path="/usestate/counter" element={<Counter />} />
       <Route path="/usestate/forms" element={<Forms />} />
       <Route path="/usestate/toggles" element={<Toggle />} />

       {/* Use Effect Case */}
       <Route path="/useeffect" element={<UseEffect />} />
       <Route path="/useeffect/synchronization" element={<Synchronization />} />
       <Route path="/useeffect/timer" element={<Timer />} />
       <Route path="/useeffect/fetchingdata" element={<FetchingData />} />
       <Route path="/useeffect/eventlistener" element={<EventListener />} />
      </Routes>
    </div>
  );
}

export default App;
