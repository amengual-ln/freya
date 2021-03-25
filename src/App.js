import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Portafolios from "./pages/Portafolios";
import Proyectos from "./pages/Proyectos";
import Notas from "./pages/Notas";

function App() {
  return (
    <Router>
      <MainLayout>
        <Route exact path="/" component={Home} />
        <Route path="/portafolios" component={Portafolios} />
        <Route path="/proyectos" component={Proyectos} />
        <Route path="/notas" component={Notas} />
      </MainLayout>
    </Router>
  );
}

export default App;
