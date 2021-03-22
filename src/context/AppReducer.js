import * as ActionsType from "./ActionsType";
export const AppReducer = (state, action) => {
  switch (action.type) {
    case ActionsType.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case ActionsType.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
