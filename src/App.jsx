import { lazy, Suspense } from "react";
import { useSelector } from 'react-redux'
import { getIsLoading } from './store/selectors/resources'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { CompatRouter } from "react-router-dom-v5-compat"

import MainLayout from "./layouts/MainLayout";
import { Loading } from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Tareas = lazy(() => import("./pages/Tasks"));
const Portafolios = lazy(() => import("./pages/Briefcases"));
const Portafolio = lazy(() => import("./pages/Briefcase"));
const Proyectos = lazy(() => import("./pages/Projects"));
const Proyecto = lazy(() => import("./pages/Project"))
const Docs = lazy(() => import("./pages/Docs"));
const Doc = lazy(() => import("./pages/Doc"));
const Links = lazy(() => import("./pages/Links"));

export const history = createBrowserHistory();

function App() {
  let status = useSelector((state) => getIsLoading(state))

  return (
    <Router history={history}>
      <CompatRouter>
      { status > 0 ? <Loading /> :
        <MainLayout>
          <Suspense fallback={<></>}>
            <Route exact path="/" component={Home} />
            <Route path="/tasks" component={Tareas} />
            <Route path="/briefcases" component={Portafolios} />
            <Route path="/briefcase/:id" component={Portafolio} />
            <Route path="/projects" component={Proyectos} />
            <Route path="/project/:id" component={Proyecto} />
            <Route path="/docs" component={Docs} />
            <Route path="/doc/:id" component={Doc} />
            <Route path="/links" component={Links} />
          </Suspense>
        </MainLayout>
      }
      </CompatRouter>
    </Router>
  );
}

export default App;
