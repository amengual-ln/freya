import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const Tareas = lazy(() => import("./pages/Tasks"));
const Portafolios = lazy(() => import("./pages/Briefcases"));
const Proyectos = lazy(() => import("./pages/Projects"));
const Docs = lazy(() => import("./pages/Docs"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div></div>}>
          <MainLayout>
            <Route exact path="/" component={Home} />
            <Route path="/tasks" component={Tareas} />
            <Route path="/briefcases" component={Portafolios} />
            <Route path="/projects" component={Proyectos} />
            <Route path="/docs" component={Docs} />
          </MainLayout>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
