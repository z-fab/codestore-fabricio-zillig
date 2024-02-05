import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Category } from "./pages/Category";

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/category/:cat" element={<Category />} />
         </Route>
      </Routes>
   );
}
