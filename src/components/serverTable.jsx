import React, { useContext, useState } from "react";
import { Table } from "antd";
import { DataContext } from "../contexts/context";
import { serverColumns, expandRowColumns } from "../constants";

const ServerTable = () => {
  const {
    state,
    recordIp4,
    setRecordIp4,
    currentServerId,
    currentSurfaceId,
    query,
  } = useContext(DataContext);

  const [expandedRowKeys, setExpandedRowKeys] = useState(0);

  const filteredUniqueServerData = (items) => {
    const filteredSurfaceData = items.filter(
      (item) =>
        item.venueName.toLowerCase().indexOf(query) > -1 ||
        item.surfaceName.toLowerCase().indexOf(query) > -1 ||
        item.status.toLowerCase().indexOf(query) > -1 ||
        item.sport.toLowerCase().indexOf(query) > -1
    );
    const servers = filteredSurfaceData.map((item) => {
      return item.server;
    });

    const filteredUniqueServer = servers.filter((item, index, array) => {
      return array.findIndex((nextItem) => item.id === nextItem.id) === index;
    });
    console.log(filteredUniqueServer);
    return filteredUniqueServer;
  };

  const expandData = (items, ip4) => {
    const expandData = items.filter(
      (item) => item.server.ip4.toLowerCase().indexOf(ip4) > -1
    );
    return expandData;
  };

  const onTableRowExpand = (expanded, record) => {
    var keys = [];
    if (expanded) {
      keys.push(record.id);
    }
    setExpandedRowKeys(keys);
  };

  const expandedRowRender = () => {
    return (
      <>
        <div style={{ fontWeight: "bold" }}>
          Surface Num:{expandData(state.data, recordIp4).length}
        </div>
        <Table
          rowClassName={setRowClassName}
          rowKey="id"
          columns={expandRowColumns}
          dataSource={expandData(state.data, recordIp4)}
          pagination={false}
          scroll={{ y: "73vh" }}
        />
      </>
    );
  };

  const ServerRowNum = (items) => {
    return filteredUniqueServerData(items).length;
  };

  const setRowClassNameForServer = (record) => {
    return record.id === currentServerId ? "clickRowStyl" : "";
  };

  const setRowClassName = (record) => {
    return record.id === currentSurfaceId ? "clickRowStyl" : "";
  };

  return (
    <>
      <Table
        rowKey="id"
        rowClassName={setRowClassNameForServer}
        expandedRowKeys={expandedRowKeys}
        onExpand={onTableRowExpand}
        onRow={(record) => {
          return {
            onClick: () => {
              setRecordIp4(record.ip4);
            },
          };
        }}
        expandable={{
          expandIcon: () => null,
          expandRowByClick: true,
          expandedRowRender,
          expandIconColumnIndex: -1,
        }}
        columns={serverColumns}
        dataSource={filteredUniqueServerData(state.data)}
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
        Server Total : {ServerRowNum(state.data)}
      </div>
    </>
  );
};

export default ServerTable;
