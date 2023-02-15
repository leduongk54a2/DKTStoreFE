import "./App.css";
import { Suspense } from "react";
import Routers from "./router/router";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./router";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          {Routers.map((router) => {
            return (
              <Route
                key={router.path}
                path={router.path}
                exact
                element={<router.component />}
              ></Route>
            );
          })}
          <Route
            path="/"
            exact
            element={<Navigate to={ROUTES.HOME} replace />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
