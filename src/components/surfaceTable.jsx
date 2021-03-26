import React, { useContext } from "react";
import { DataContext } from "../contexts/context";
import { surfaceColumns } from "../constants";
import { Table } from "antd";

const SurfaceTable = () => {
  const {
    state,
    query,
    setRowIndex,
    currentSurfaceId,
    setCurrentSurfaceId,
    setCurrentServerId,
  } = useContext(DataContext);

  const filterQuery = (items) => {
    return items.filter(
      (item) =>
        item.venueName.toLowerCase().indexOf(query) > -1 ||
        item.surfaceName.toLowerCase().indexOf(query) > -1 ||
        item.status.toLowerCase().indexOf(query) > -1 ||
        item.sport.toLowerCase().indexOf(query) > -1
    );
  };

  const SurfaceRowNum = (items) => {
    return filterQuery(items).length;
  };

  const setRowClassName = (record) => {
    return record.id === currentSurfaceId ? "clickRowStyl" : "";
  };

  return (
    <>
      <Table
        rowKey="id"
        rowClassName={setRowClassName}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              setRowIndex(rowIndex);
              setCurrentSurfaceId(record.id);
              setCurrentServerId(record.server.id);
            },
          };
        }}
        columns={surfaceColumns}
        dataSource={filterQuery(state.data)}
        pagination={false}
        scroll={{ y: "73vh" }}
      />
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          margin: "1em 0",
        }}
      >
        Surface Total : {SurfaceRowNum(state.data)}
      </div>
    </>
  );
};

export default SurfaceTable;
