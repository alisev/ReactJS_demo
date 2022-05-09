import Navigation from './components/Navigation';
import { Outlet } from "react-router-dom";
//sākuma lapa

function App() {
  return (
    <div>
      <Navigation/>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
