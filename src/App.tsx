import { Cosy } from "./components/Cosy";
import { Hot } from "./components/Hot";
import { Juicy } from "./components/Juicy";
import { Navbar } from "./components/Navbar";
import { RedBorder } from "./components/RedBorder";



function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar/>
      <Hot/>
      <RedBorder/>
      <Juicy/>
      <RedBorder/>
      <Cosy/>
    
    </div>
  );
}

export default App;
