import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowseRouter>
    
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowseRouter>
);