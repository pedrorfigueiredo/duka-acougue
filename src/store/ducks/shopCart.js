// Action Types
export const Types = {
  ADD_ORDER: "shopCart/ADD_ORDER",
  REMOVE_ORDER: "shopCart/REMOVE_ORDER",
};

// Reducer
const initialState = {
  orders: [],
  semiTotal: 0,
  tax: 5
};

const reducer = (state = initialState, action) => {
  let newOrders;
  let newSemiTotal;
  switch (action.type) {
    case Types.ADD_ORDER:
      newOrders = [...state.orders, action.payload.order];
      newSemiTotal = state.semiTotal + action.payload.order.totalPrice;
      return { ...state, orders: newOrders, semiTotal: newSemiTotal};

    case Types.REMOVE_ORDER:
      const index = state.orders.findIndex(
        (order) => order.id === action.payload.orderId
      );
      newOrders = [
        ...state.orders.slice(0, index),
        ...state.orders.slice(index + 1, state.orders.length),
      ];
      newSemiTotal = state.semiTotal - state.orders[index].totalPrice;
      return { ...state, orders: newOrders, semiTotal: newSemiTotal};

    default:
      return state;
  }
};

// Action Creators
export const addOrder = (order) => {
  return {
    type: Types.ADD_ORDER,
    payload: {
      order,
    },
  };
};

export const removeOrder = (orderId) => {
  return {
    type: Types.REMOVE_ORDER,
    payload: {
      orderId,
    },
  };
};

export default reducer;
