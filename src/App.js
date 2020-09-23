import React, { useState } from "react";
import { Route } from "react-router-dom";

import { Login, NavBar, Posts } from "./components";

function App() {
  const [exit, setExit] = useState(true);

  console.log(exit);

  return (
    <div className="admin">
      {exit ? (
        <div className="admin__open">
          <div className={"admin__NavBar"}>
            <NavBar setExit={setExit} />
          </div>
          <div className={"admin__Posts"}>
            <Route exact path="/" render={() => <Posts />} />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
