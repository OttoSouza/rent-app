import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import {
  Content,
  Text,
  ContentTransactions,
  ContentIncome,
  ContentExpenses,
  TextTransactionsIncome,
  AmountTransactionsIncome,
  TextTransactionsExpenses,
  AmountTransactionsExpenses,
} from "./styles";
function Balance() {
  const { incomeTransactions, expensesTransactions } = useContext(
    GlobalContext
  );

  const incomeAmounts = incomeTransactions.map((income) => income.incomeAmount);

  const expensesAmounts = expensesTransactions.map(
    (expense) => expense.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((accumulator, item) => (accumulator += item), 0).toFixed(2)

  const totalExpense = expensesAmounts
    .reduce((accumulator, item) => (accumulator += item), 0).toFixed(2)

  const balance = (totalIncome - totalExpense).toFixed(2);

  console.log("Income" + incomeAmounts);
  console.log("Expense" + expensesAmounts);

  return (
    <Content>
      <Text>Your Balance R${balance}</Text>
      <ContentTransactions>
        <ContentIncome>
          <TextTransactionsIncome>Income</TextTransactionsIncome>
          <AmountTransactionsIncome>R$ +{totalIncome}</AmountTransactionsIncome>
        </ContentIncome>

        <ContentExpenses>
          <TextTransactionsExpenses>Expenses</TextTransactionsExpenses>
          <AmountTransactionsExpenses>
            R$ -{totalExpense}
          </AmountTransactionsExpenses>
        </ContentExpenses>
      </ContentTransactions>
    </Content>
  );
}

export default Balance;
