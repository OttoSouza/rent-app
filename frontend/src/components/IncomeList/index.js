import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MdDeleteSweep } from "react-icons/md";
import {
  Content,
  Text,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "./styles";

function IncomeList() {
  const { incomeTransactions, deleteIncome } = useContext(GlobalContext);

  return (
    <Content>
      <Text>Income List</Text>
      <List>
        {incomeTransactions.map((income) => (
          <ListItem key={income.id}>
            <ListItemText>{income.incomeName}</ListItemText>
            <ListItemText>{income.incomeAmount}</ListItemText>
            <ListItemButton onClick={() => deleteIncome(income.id)}>
              <MdDeleteSweep color="#222" size="20" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Content>
  );
}

export default IncomeList;
