import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Tareas from "./pages/Tareas";
import Portafolios from "./pages/Portafolios";
import Proyectos from "./pages/Proyectos";
import Notas from "./pages/Notas";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Route exact path="/" component={Home} />
          <Route path="/tareas" component={Tareas} />
          <Route path="/portafolios" component={Portafolios} />
          <Route path="/proyectos" component={Proyectos} />
          <Route path="/notas" component={Notas} />
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;
