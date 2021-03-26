import React, { useContext } from "react";
import { DataContext } from "../contexts/context";
import { Card } from "antd";

const DetailsBox = () => {
  const { state, rowIndex } = useContext(DataContext);

  const showDetail = () => {
    return (
      <>
        <p>Venue Name : {state.data[rowIndex].venueName}</p>
        <p>Surface Name : {state.data[rowIndex].surfaceName}</p>
        <p>Status : {state.data[rowIndex].status}</p>
        <p>Sport : {state.data[rowIndex].sport}</p>
        <p>ServerIP : {state.data[rowIndex].server.ip4}</p>
      </>
    );
  };
  return (
    <Card
      title="Detail"
      style={{
        height: "100vh",
        marginTop: "39px",
      }}
    >
      {showDetail()}
    </Card>
  );
};

export default DetailsBox;
