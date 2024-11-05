import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/shared/Layout";
import Loginpage from "./components/pages/Loginpage/Loginpage";
import Pdfpage from "./components/pages/Pdfpage/Pdfpage";
import Signuppage from "./components/pages/Signuppage/Signuppage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/pdf" element={<Pdfpage />} />
    </Route>
  )
);
