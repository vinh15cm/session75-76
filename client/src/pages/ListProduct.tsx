import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProduct } from "../store/reducers/productReducer";

export default function ListProduct() {
  const getData: any = useSelector((state) => state);
  console.log(getData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  //   console.log("getData:", getData);

  return (
    <div style={{ border: "2px solid red", width: "700px" }}>
      <h1>ListProduct</h1>
      {getData.product.product.map((item: any) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              margin: "10px",
              gap: "10px",
              border: "2px solid orange",
            }}
          >
            <img
              style={{ width: "140px", height: "140px" }}
              src={item.image}
            ></img>
            <div>
              <th>{item.name}</th>
              <p>{item.title}</p>
              <th>Total:{item.stock}</th>
            </div>
            <div>
              <input
                type="text"
                defaultValue={1}
                style={{ width: "70px", marginTop: "5px" }}
              />
              <p>Price: $ {item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                style={{
                  backgroundColor: "blue",
                  borderRadius: "4px",
                  border: "1px solid white",
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
