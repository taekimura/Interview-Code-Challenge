import React, { useReducer, useEffect } from "react";
import axios from "axios";
import TabsForAside from "./components/tabsForAside";

export const DataContext = React.createContext();

const initialState = {
  loading: true,
  error: "",
  data: [],
  isSearchActive: false,
  foundWords: [],
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
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = () => {
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
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DataContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      <TabsForAside />
    </DataContext.Provider>
  );
};
export default App;
