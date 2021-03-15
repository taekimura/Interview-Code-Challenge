import React, { useReducer, useEffect, createContext } from "react";
import axios from "axios";
import { initialState } from "../constants";
import { reducer } from "../reducers/reducer";

export const DataContext = createContext();

export const DataProvider = (props) => {
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
            payload: error,
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
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
