import React from "react";
import { Route, Routes } from "react-router";

import Home from "./Page/Home";
import Store from "./Store/Store";
import Button from "./Components/button/Button";

import QuesePage from "./Page/Quese";
import ResultPage from "./Page/Result";

// const QuesePage = React.lazy(() => import("./Page/Quese"));
// const ResultPage = React.lazy(() => import("./Page/Result"));

function App() {
  return (
    <main className="container">
      <Store>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quese" element={<QuesePage />}></Route>
          <Route path="/result" element={<ResultPage />}></Route>
          <Route
            path="*"
            element={<Button content="Cancel" classes="btn-cancel" />}></Route>
        </Routes>
      </Store>
    </main>
  );
}

export default App;
