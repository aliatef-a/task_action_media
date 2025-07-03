import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home, Layout } from "./LazyRouts";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={"error"}>
        <Route index element={<Home />} />
      </Route>
   
    </>
  )
);
