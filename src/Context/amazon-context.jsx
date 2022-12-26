import React, { useContext } from "react";

// Prepares the dataLayer
export const StateContext = React.createContext({
  basket: [],
  user: null,
  addToBasket: () => {},
  removeFromBasket: () => {},
});

// Pull information from the data layer
export const useStateValue = () => {
  return useContext(StateContext);
};
