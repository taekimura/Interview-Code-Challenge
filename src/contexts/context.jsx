import React, { useReducer, useEffect, createContext, useState } from "react";
import axios from "axios";
import { initialState, updateTime } from "../constants";
import { apiReducer } from "../reducers/apiReducer";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);
  const [query, setQuery] = useState("");
  const [rowIndex, setRowIndex] = useState(0);
  const [recordIp4, setRecordIp4] = useState("");
  const [currentSurfaceId, setCurrentSurfaceId] = useState(9);
  const [currentServerId, setCurrentServerId] = useState(17594);

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
    }, updateTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        query,
        setQuery,
        rowIndex,
        setRowIndex,
        recordIp4,
        setRecordIp4,
        currentSurfaceId,
        setCurrentSurfaceId,
        currentServerId,
        setCurrentServerId,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
