import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <BaseRouter />
      </Router>
    </div>
  );
}

export default App;
