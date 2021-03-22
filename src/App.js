import Classes from "./App.module.css";
import NavHeader from "./components/navHeader/NavHeader";
import Balance from "./components/balance/Balance";
import IncomeExpense from "./components/incomeExpense/IncomeExpense";
import TransactionList from "./components/transactionList/TransactionList";
import AddTransaction from "./components/addTransaction/AddTransaction";
import { GlobalProvider } from "./context/expenseTrackerGlobalState";
function App() {
  return (
    <GlobalProvider>
      <NavHeader />
      <div className={Classes.container}>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
