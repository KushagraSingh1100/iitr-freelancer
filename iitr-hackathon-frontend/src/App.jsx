import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Fragment } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Navbar />
                <Home />
              </Fragment>
            }
          />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
