import React from "react";
import { AppProvider } from "./appContext";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <AppProvider>
      <div>
        <Content />
        <Sidebar />
      </div>
    </AppProvider>
  );
}

export default App;
