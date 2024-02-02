import ReactDOM from "react-dom/client";
import { GymApp } from "./GymApp.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <BrowserRouter>
         <GymApp />
      </BrowserRouter>
   </Provider>
);
