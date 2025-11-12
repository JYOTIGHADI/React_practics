import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./redux/store.js";
import CalculatorProvider from "./pages/30-08/assignment/CalcContext/CalculatorContext.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CalculatorProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CalculatorProvider>

    </Provider>
  </React.StrictMode>
);


