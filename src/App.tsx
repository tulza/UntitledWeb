import "@styles/styles.css";
import "@styles/fonts.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from "./components/route/AnimatedRoute";
import PermaTestNavigation from "./components/navigations/PermaTestNavigation";

function App() {
  return (
    <Router basename="/UntitledWeb">
      <PermaTestNavigation />
      <AnimatedRoute />
    </Router>
  );
}

export default App;
