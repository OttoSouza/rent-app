import React, { useState, useContext } from "react";
import { v1 as uuiv1 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import {
  Content,
  FormIncomeExpenses,
  ContentIncomeExpenses,
  InputIncome,
  InputIncomeSubmit,
  InputExpenses,
  InputExpensesSubmit,
} from "./styles";

function AddTransactions() {
  const { addIncome, addExpenses} = useContext(GlobalContext);

  const [incomeText, setIncomeText] = useState({
    incomeName: "",
    incomeAmount: 0,
  });

  const [expensesText, setExpensesText] = useState({
    expenseName: "",
    expenseAmount: 0,
  });

  const handleChangeIncome = (event) => {
    event.preventDefault();
    setIncomeText({ ...incomeText, [event.target.name]: event.target.value });
  };

  const handleChangeExpense = (event) => {
    event.preventDefault();
    setExpensesText({
      ...expensesText,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitIncome = (event) => {
    event.preventDefault();

    const newIncome = {
      id: uuiv1(),
      incomeName: incomeText.incomeName,
      incomeAmount: incomeText.incomeAmount * 1,
    };

    addIncome(newIncome);
  };

  const handleSubmitExpense = (event) => {
    event.preventDefault();

    const newIncome = {
      id: uuiv1(),
      expenseName: expensesText.expenseName,
      expenseAmount: expensesText.expenseAmount * 1,
    };

    addExpenses(newIncome);
  };

  return (
    <Content>
      <FormIncomeExpenses onSubmit={handleSubmitIncome}>
        <ContentIncomeExpenses>
          <InputIncome
            placeholder="Add Income"
            type="text"
            onChange={handleChangeIncome}
            name="incomeName"
            value={incomeText.incomeName}
          />
          <InputIncome
            placeholder="Amount"
            type="number"
            onChange={handleChangeIncome}
            name="incomeAmount"
            value={incomeText.incomeAmount}
          />
          <InputIncomeSubmit value="Submit" type="submit" />
        </ContentIncomeExpenses>
      </FormIncomeExpenses>

      <FormIncomeExpenses onSubmit={handleSubmitExpense}>
        <ContentIncomeExpenses>
          <InputExpenses
            placeholder="Add Expenses"
            type="text"
            name="expenseName"
            onChange={handleChangeExpense}
            value={expensesText.expenseName}
          />
          <InputExpenses
            placeholder="Amount"
            type="number"
            name="expenseAmount"
            onChange={handleChangeExpense}
            value={expensesText.expenseAmount}
          />
          <InputExpensesSubmit value="Submit" type="submit" />
        </ContentIncomeExpenses>
      </FormIncomeExpenses>
    </Content>
  );
}

export default AddTransactions;
