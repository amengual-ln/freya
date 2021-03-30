import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const Tareas = lazy(() => import("./pages/Tareas"));
const Portafolios = lazy(() => import("./pages/Portafolios"));
const Proyectos = lazy(() => import("./pages/Proyectos"));
const Notas = lazy(() => import("./pages/Notas"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<h1>Loading</h1>}>
          <MainLayout>
            <Route exact path="/" component={Home} />
            <Route path="/tareas" component={Tareas} />
            <Route path="/portafolios" component={Portafolios} />
            <Route path="/proyectos" component={Proyectos} />
            <Route path="/notas" component={Notas} />
          </MainLayout>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
