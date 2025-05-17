import React from "react";
import SpiderCursor from "./components/SpiderCursor";
import Home from "./components/ui/Home";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <div className="position-relative z-10 bg-purple-800 text-white py-4">
        <Container>
          <Home />
        </Container>
      </div>
    </main>
  );
}

export default App;
