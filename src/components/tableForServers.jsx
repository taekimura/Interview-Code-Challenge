import React, { useContext } from "react";
import { Table } from "antd";
import { DataContext } from "../App";

const TableForServers = () => {
  const dataContext = useContext(DataContext);
  const columns = [
    {
      title: "Ip4",
      dataIndex: ["server", "ip4"],
      width: "40%",
    },
    {
      title: "Dns",
      dataIndex: ["server", "dns"],
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataContext.state.data}
        pagination={false}
        scroll={{ y: "73vh" }}
      />
      <div style={{ textAlign: "center" }}>
        Total:{dataContext.state.data.length}
      </div>
    </>
  );
};

export default TableForServers;
