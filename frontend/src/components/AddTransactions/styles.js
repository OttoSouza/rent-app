import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: space-around;
`;

export const FormIncomeExpenses = styled.form`
  align-self: center;
`;
export const ContentIncomeExpenses = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputIncome = styled.input`
  width: 350px;
  height: 30px;
  margin-bottom: 20px;
  border: none;
  color: #eee;
  padding: 5px 5px 5px 0;
  background: transparent;
  border-bottom: 2px solid #97b2de;
  font-size: 1.1em;
  font-weight: 200;
  outline: none;
`;

export const InputIncomeSubmit = styled.input`
  width: 200px;
  border: none;
  outline: none;
  border-radius: 30px;
  font-weight: 700;
  letter-spacing: 10px;
  color: #eee;
  margin-top: 20px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  text-align: center;
  align-self: center;
  background-color: #97b2de;
  padding: 10px 0;
`;

export const InputExpenses = styled.input`
  width: 350px;
  height: 30px;
  margin-bottom: 20px;
  border: none;
  color: #eee;
  padding: 5px 5px 5px 0;
  background: transparent;
  border-bottom: 2px solid #f96167;
  font-size: 1.1em;
  font-weight: 200;
`;

export const InputExpensesSubmit = styled.input`
  width: 200px;
  border: none;
  outline: none;
  border-radius: 30px;
  font-weight: 700;
  letter-spacing: 10px;
  color: #eee;
  margin-top: 20px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.4);
  text-align: center;
  align-self: center;
  background-color: #f96167;
  padding: 10px 0;
`;
