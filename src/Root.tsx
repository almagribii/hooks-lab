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
import { UseContext } from "./pages/UseContext";
import { UseCallback } from "./pages/UseCallback";
import { UseMemo } from "./pages/UseMemo";
import { UseReducer } from "./pages/UseReducer";
import { UseRef } from "./pages/UseRef";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Dashboard/>} />
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


       <Route path="/usecontext" element={<UseContext />} />
       <Route path="/usecallback" element={<UseCallback/>} />
       <Route path="/usememo" element={<UseMemo/>} />
       <Route path="/usereducer" element={<UseReducer/>} />
       <Route path="/useref" element={<UseRef/>} />


      </Routes>
    </div>
  );
}

export default App;
