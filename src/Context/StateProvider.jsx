import { StateContext } from "./amazon-context";
import { useReducer } from "react";

const amazonDefaultState = {
  basket: [],
  user: null,
  totalAmount: 0,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const amazonReduce = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      const updatedTotalAmount = state.totalAmount + +action.item.price.offer;

      return {
        ...state,
        totalAmount: updatedTotalAmount,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      const newUpdatedTotalAmount =
        state.totalAmount - +state.basket[index].price.offer;

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
        totalAmount: newUpdatedTotalAmount,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.username,
      };

    default:
      return state;
  }
};

export const StateProvider = (props) => {
  const [amazonState, amazonDispatch] = useReducer(
    amazonReduce,
    amazonDefaultState
  );

  const addItemToBasket = (item) => {
    amazonDispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        rating: item.rating,
      },
    });
    console.log(item);
  };

  const removeItemFromBasket = (id) => {
    amazonDispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const userSignedIn = (user) => {
    amazonDispatch({
      type: "SET_USER",
      username: user,
    });
  };

  const userSignedOut = (user) => {
    amazonDispatch({
      type: "SET_USER",
      username: null,
    });
  };

  const amazonContextValue = {
    basket: amazonState.basket,
    user: amazonState.user,
    totalAmount: amazonState.totalAmount,
    addToBasket: addItemToBasket,
    removeFromBasket: removeItemFromBasket,
    userSignedIn: userSignedIn,
    userSignedOut: userSignedOut,
  };

  return (
    <StateContext.Provider value={amazonContextValue}>
      {props.children}
    </StateContext.Provider>
  );
};
