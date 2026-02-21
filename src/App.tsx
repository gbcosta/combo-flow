import FlowCanvas from "./components/flowCanvas";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen w-full font-inter flex overflow-hidden">
      <Sidebar />
      <FlowCanvas />
    </div>
  );
}

export default App;
