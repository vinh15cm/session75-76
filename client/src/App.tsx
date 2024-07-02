import ListProduct from "./pages/ListProduct";
import ShoppingCart from "./pages/ShoppingCart";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <ListProduct></ListProduct>
      <ShoppingCart></ShoppingCart>
    </div>
  );
}
