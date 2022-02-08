import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./Navbar";
import Orders from "./orders";

function Routes() {
return(
  <BrowserRouter>
  <Navbar />
     <switch>
       <Route path="/orders">
         <Orders />
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </switch>
  </BrowserRouter>
)
}


export default Routes;