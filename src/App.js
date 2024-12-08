import { createRoot } from "react-dom/client";
import React, { useEffect, Component } from "react";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./Components/ui/provider";
//end of import

//imported CDNs

import "./CDN/bootstrap.min.css";
// import "./CDN/fontAwesomePro.css";

//end of import

//imported global style

import "./styles/main.css";

//end of import

import { Main } from "./Pages/about_us";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
