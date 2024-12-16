import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { Home } from "./pages/Home";
import { Navbar } from "./Components/Navbar";
import { Cart } from "./pages/Cart";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const [productsArray, setProductsArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [filterCart, setFilterCart] = useState(cart);
  

  useEffect(() => {
    Axios.get("/data.json")
      .then((response) => {
        setProductsArray(response.data.products);
        setCategoryArray(response.data.products);
      })
      .catch((error) => {
        console.log("error : " + error);
      });
  }, []);

  function categoryFilter(value) {
    let filteredArray;
    if (value === "all") {
      filteredArray = categoryArray;
    } else {
      filteredArray = categoryArray.filter(
        (element) => value === element.category
      );
    }

    setProductsArray(filteredArray);
  }

  function addToCart(index) {
    let adding = [...cart, index];

    localStorage.setItem("cart", JSON.stringify(adding)) || [];

    setCart(adding);
  }

  function filterCartProducts(value) {
    let product;

    if (value === "all") {
      product = cart;
    } else {
      product = cart.filter((element) => value === element.category);
    }
    setFilterCart(product);
  }

  function removeFromCart(index) {
    let removeProduct = filterCart.filter((element, i) => i !== index);

    localStorage.setItem("cart", JSON.stringify(removeProduct)) || [];
    setFilterCart(removeProduct);
  }

  function sortByPrice(value) {
    let homeProduct = productsArray.sort((a, b) => {
      if (value === "low-to-high") {
        return a.price - b.price;
      } else if (value === "high-to-low") {
        return b.price - a.price;
      }
    });
    setCategoryArray([...homeProduct]);
  }

  function sortByPriceCart(value) {
    let cartSort = cart.sort((a, b) => {
      if (value === "low-to-high") {
        return a.price - b.price;
      } else if (value === "high-to-low") {
        return b.price - a.price;
      }
    });
    setFilterCart([...cartSort]);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={productsArray}
              categoryFilter={categoryFilter}
              addToCart={addToCart}
              sortByPrice={sortByPrice}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              data={filterCart}
              filterCartProducts={filterCartProducts}
              removeFromCart={removeFromCart}
              sortByPriceCart={sortByPriceCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
