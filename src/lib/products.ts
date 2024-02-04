import { v4 as uuidv4 } from "uuid";

export const productsList = Array.from({ length: 8 }).map((_, i) => {
   return {
      id: uuidv4(),
      category: "Plantas",
      product_name: "Espada de São Jorge " + i,
      sub_name: "Dracaena trifasciata",
      price: 59.9,
      stock: 10,
      image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   };
});