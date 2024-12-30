import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom';
import ComponentRoutes from "./Components/Routes/ComponentRoutes";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <div className="bg">
      <Register />
      </div> */}
      <Router>
        <ComponentRoutes />
      </Router>
    </>
  );
}

export default App;
