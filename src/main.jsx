import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Restaurant"
import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./Home";
import RestMenu from "./RestMenu";
import Search from "./Search";
import SecHome from "./SecHome";
import { CartStore } from "./CartStore";
import { Provider } from "react-redux";
import Checkout from "./Checkout";
function App() {
  return(
    <>
      <Provider store={CartStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
              <Route element={<SecHome></SecHome>}>
                  <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                  <Route path="/city/kolkata/:id" element={<RestMenu></RestMenu>}></Route>
                  <Route path="/city/kolkata/:id/search" element={<Search></Search>}></Route>
              </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)