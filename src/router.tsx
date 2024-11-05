import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Homepage from "./components/pages/Homepage/Homepage";
import Layout from "./components/shared/Layout";
import Loginpage from "./components/pages/Loginpage/Loginpage";
import Signuppage from "./components/pages/Signuppage/Signuppage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
    </Route>
  )
);
