import React, { useState } from "react";

import { NavBar, Posts } from "./components";

function App() {
  const [exit, setExit] = useState(true);

  console.log(exit);

  return (
    <div className="admin">
      <div className={"admin__NavBar"}>
        {exit && <NavBar setExit={setExit} />}
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
}

export default App;
