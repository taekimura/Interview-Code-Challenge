import React from "react";
import { DataProvider } from "./contexts/context";
import LeftTabsForEntirePage from "./components/leftTabsForEntirePage";
import "./App.css";

export const DataContext = React.createContext();

const App = () => {
  return (
    <DataProvider>
      <LeftTabsForEntirePage />
    </DataProvider>
  );
};
export default App;
