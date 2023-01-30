import { Route, Routes } from "react-router";
import "./App.scss";
import Quese from "./Page/Quese";
import Result from "./Page/Result";
import Home from "./Page/Home";
import Store from "./Store/Store";

function App() {
  return (
    <div className="container">
      <Store>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quese" element={<Quese />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </Store>
    </div>
  );
}

export default App;
