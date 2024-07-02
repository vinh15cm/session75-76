import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsInCart } from "../store/reducers/productReducer";

export default function ShoppingCart() {
  const cartData = useSelector((state: any) => state.product.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  //   console.log(cartData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsInCart());
  }, [dispatch]);

  useEffect(() => {
    // console.log("Cart data:", cartData);
    calculateTotalPrice();
  }, [cartData]);

  const calculateTotalPrice = () => {
    let total = 0;
    cartData.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };
  return (
    <div>
      <div style={{ border: "2px solid red", width: "700px" }}>
        <h1>Shopping Cart</h1>
        {cartData.map((item: any) => {
          return (
            <div>
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "30px",
                  border: "2px solid yellow",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <img
                    style={{ width: "135px", height: "135px" }}
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <th>{item.tile}</th>
                  <input
                    defaultValue={item.quantity}
                    type="text"
                    style={{ width: "100px", marginTop: "10px" }}
                  />
                  <p>Quantity:{item.quantity}</p>
                </div>
                <div>
                  <p>${item.price}</p>
                  <button>Update</button>
                  <br />
                  <button style={{ marginTop: "10px" }}>remove</button>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}
