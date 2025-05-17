import { useState } from "react";
import SpiderCursor from "./components/SpiderCursor";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <SpiderCursor />
      <div className="position-relative z-10">
        <Header />
      </div>
    </main>
  );
}

export default App;
