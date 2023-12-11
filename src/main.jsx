import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "./fonts.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import { BrowserRouter } from "react-router-dom";
import {Toaster} from "react-hot-toast"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
      </QueryClientProvider>
      <Toaster position="bottom-right"
        reverseOrder={false}/>
    </BrowserRouter>
  </React.StrictMode>
);
