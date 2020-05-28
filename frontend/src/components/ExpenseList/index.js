import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MdDeleteSweep } from "react-icons/md";
import {
  Content,
  Text,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "./styles";

function ExpenseList() {
  const { expensesTransactions, deleteExpenses } = useContext(GlobalContext);

  return (
    <Content>
      <Text>Expense List</Text>
      <List>
        {expensesTransactions.map((expense) => (
          <ListItem key={expense.id}>
            <ListItemText>{expense.expenseName}</ListItemText>
            <ListItemText>{expense.expenseAmount}</ListItemText>
            <ListItemButton onClick={() => deleteExpenses(expense.id)}>
              <MdDeleteSweep color="#222" size="20" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Content>
  );
}

export default ExpenseList;
