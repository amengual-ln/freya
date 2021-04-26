import { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import { useDispatch } from "react-redux";
import { fetchDocs } from "./store/reducers/docs";

import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const Tareas = lazy(() => import("./pages/Tasks"));
const Portafolios = lazy(() => import("./pages/Briefcases"));
const Portafolio = lazy(() => import("./pages/Briefcase"));
const Proyectos = lazy(() => import("./pages/Projects"));
const Docs = lazy(() => import("./pages/Docs"));
const Doc = lazy(() => import("./pages/Doc"));
const Recursos = lazy(() => import("./pages/Resources"));

export const history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDocs());
  });

  return (
    <Router history={history}>
      <MainLayout>
        <Suspense fallback={<div></div>}>
          <Route exact path="/" component={Home} />
          <Route path="/tasks" component={Tareas} />
          <Route path="/briefcases" component={Portafolios} />
          <Route path="/briefcase/:id" component={Portafolio} />
          <Route path="/projects" component={Proyectos} />
          <Route path="/docs" component={Docs} />
          <Route path="/doc/:id" component={Doc} />
          <Route path="/resources" component={Recursos} />
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
