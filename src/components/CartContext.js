import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);



  const addToCart = (product) => {
    // Check if the product is already in the cart
    const index = cart.find((item) => item.id === product.id)?.id ?? -1;

    if (index !== -1) {
      // If the product is already in the cart, increment its count
      const updatedCart = cart.map((item, i) => {
        if (item.id === index) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with count 1
      setCart((prevCart) => [...prevCart, { ...product, count: 1 }]);
    }
  };




    const removeCompletelyFromCart = (productId) => {
      console.log(productId);
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };




  const removeFromCart = (product) => {
    const productId = product.id;

    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          if (item.count === 1) {
            // If count is 1, remove the item from the cart
            return null;
          } else {
            // Decrease the count by 1
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      })
      .filter(Boolean); // Filter out null values (items to be removed)

    setCart(updatedCart);
  };


  return (
    <CartContext.Provider value={{ setCart, cart, addToCart, removeFromCart, removeCompletelyFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
