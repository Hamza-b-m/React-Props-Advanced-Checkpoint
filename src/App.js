import React from "react";
import ProductTable from "./component/ProductTable";

function App() {
  let products = [
    { Name: "Laptop", category: "Electronics", price: 1000 },
    { Name: "T-shirt", category: "Clothes", price: 18 },
    { Name: "Shoes", category: "Clothes", price: 50 },
  ];
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <ProductTable products={products} />
    </div>
  );
}

export default App;
