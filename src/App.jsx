import React from "react";
import { DataProvider } from "./contexts/context";
import LeftTabs from "./components/leftTabs";
import "./App.css";

export const DataContext = React.createContext();

const App = () => {
  return (
    <DataProvider>
      <LeftTabs />
    </DataProvider>
  );
};
export default App;
