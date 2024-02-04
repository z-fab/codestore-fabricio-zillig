import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Details />} />
         </Route>
      </Routes>
   );
}
