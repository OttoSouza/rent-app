export default (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [...state.incomeTransactions, action.payload],
      };
    case "ADD_EXPENSES":
      return {
        ...state,
        expensesTransactions: [...state.expensesTransactions, action.payload],
      };

    case "DELETE_INCOME":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (income) => income.id !== action.payload
        ),
      
      };

    case "DELETE_EXPENSES":
      return {
        ...state,
        expensesTransactions: state.expensesTransactions.filter(
          (expense) => expense.id !== action.payload
        ),
      
      };




    default:
      return state;
  }
};
