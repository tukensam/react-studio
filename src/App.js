import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0)

  const handleOnClick = (item) => {
    return () => {
      const key = item.name
      let newCart = structuredClone(cart)
      if (key in cart) {
        newCart[key] += 1
      } else {
        newCart[key] = 1
      }
      setCart(newCart)
      setTotal(total + item.price)
    }
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} onClick={handleOnClick(item)}></BakeryItem>
      ))}

      <div>
        <h2>Cart</h2>
        {Object.keys(cart).map((item) => (
          <p>{cart[item]}x {item}</p>
        ))}
        <p>Total: ${Math.floor(total * 100) / 100}</p>
      </div>
    </div>
  );
}

export default App;
