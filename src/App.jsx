import React, { useReducer, useEffect } from "react";
import axios from "axios";
import TabsForAside from "./components/tabsForAside";
import "./App.css";

export const DataContext = React.createContext();

const initialState = {
  loading: true,
  error: "",
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        data: [],
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(
        "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project"
      )
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, []);

  return (
    <DataContext.Provider value={{ state: state, dispatch: dispatch }}>
      <TabsForAside />
    </DataContext.Provider>
  );
}
export default App;
