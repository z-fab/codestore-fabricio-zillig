import { NavigationMenuLink } from "./ui/navigation-menu";
import { NavLink } from "react-router-dom";

interface MenuListItemProps {
   title: string;
   to: string;
   children: React.ReactNode;
}

export function MenuListItem({ title, to, children }: MenuListItemProps) {
   return (
      <li>
         <NavigationMenuLink asChild>
            <NavLink
               to={to}
               className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
               </p>
            </NavLink>
         </NavigationMenuLink>
      </li>
   );
}
