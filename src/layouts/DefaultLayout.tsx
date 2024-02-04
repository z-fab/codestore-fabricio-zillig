import { Outlet } from "react-router-dom";
import { Menu } from "@/components/Menu";

export function DefaultLayout() {
   return (
      <main>
         <Menu />
         <Outlet />
      </main>
   );
}
