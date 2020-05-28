import React from "react";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import AddTransactions from "../../components/AddTransactions";
import IncomeList from "../../components/IncomeList";
import ExpenseList from "../../components/ExpenseList";
import GlobalContextProvider from "../../context/GlobalState";
import { ContainerHome, ContainerWrapper } from "./styles";
import { Grid, Container } from "@material-ui/core";
function PageHome() {
  return (
    <GlobalContextProvider>
      <ContainerHome>
        <ContainerWrapper>
          <Container maxWidth="xl">
            <Grid container justify="space-between">
              <Grid item xs={6}>
                <Header />
              </Grid>
              <Grid item xs={6}>
                <AddTransactions />
              </Grid>
              <Grid item xs={6}>
                <Balance />
              </Grid>
              <Grid item xs={6}>
                <Grid container justify="space-between">
                  <Grid item xs={6}>
                    <IncomeList />
                  </Grid>
                  <Grid item xs={6}>
                    <ExpenseList />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </ContainerWrapper>
      </ContainerHome>
    </GlobalContextProvider>
  );
}

export default PageHome;



