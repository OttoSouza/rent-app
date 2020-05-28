import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 50vh;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentTransactions = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
`;
export const ContentIncome = styled.div`
  margin: 30px;
`;
export const ContentExpenses = styled.div`
  margin: 30px;
`;
export const Text = styled.h3`
  font-size: 2em;
  font-weight: 700;
  color: #eee;
`;

export const TextTransactionsIncome = styled.span`
  font-size: 1.8em;
  font-weight: 500;
  color: #97b2de;
`;

export const AmountTransactionsIncome = styled.p`
  text-align: center;
  font-size: 1.4em;
  font-weight: 300;
  color: #97b2de;
`;

export const TextTransactionsExpenses = styled.span`
  font-size: 1.8em;
  font-weight: 500;
  color: #f96167;
`;

export const AmountTransactionsExpenses = styled.p`
  text-align: center;
  font-size: 1.4em;
  font-weight: 300;
  color: #f96167;
`;
