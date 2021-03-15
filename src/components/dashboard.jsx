import React, { useState, useContext } from "react";
import { Row, Col, Input, Tabs, Table, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DataContext } from "../contexts/context";
import { surfaceColumns, serverColumns, expandRowColumns } from "../constants";
const { TabPane } = Tabs;

const DashBoard = () => {
  const [rowIndex, setRowIndex] = useState(0);
  const [record, setRecord] = useState("");
  const [recordIp4, setRecordIp4] = useState("");
  const [query, setQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState("white");
  const dataContext = useContext(DataContext);

  const filterQuery = (items) => {
    return items.filter(
      (item) =>
        item.venueName.toLowerCase().indexOf(query) > -1 ||
        item.surfaceName.toLowerCase().indexOf(query) > -1 ||
        item.status.toLowerCase().indexOf(query) > -1 ||
        item.sport.toLowerCase().indexOf(query) > -1
    );
  };

  const setRowClassName = (record) => {
    return record.id === selectedColor ? "clickRowStyl" : "";
  };

  const SurfaceRowNum = (items) => {
    return filterQuery(items).length;
  };

  const filterUniqueIP4 = (items) => {
    // For removing overlapped rows....
    // const itemIp4s = items.map((item) => {
    //   return item.server.ip4;
    // });
    return items.filter(
      (item, index) =>
        // itemIp4s.indexOf(item.server.ip4) === index &&
        item.venueName.toLowerCase().indexOf(query) > -1 ||
        item.surfaceName.toLowerCase().indexOf(query) > -1 ||
        item.status.toLowerCase().indexOf(query) > -1 ||
        item.sport.toLowerCase().indexOf(query) > -1
    );
  };

  const ServerRowNum = (items) => {
    return filterUniqueIP4(items).length;
  };

  const expandData = (items, ip4) => {
    const expandData = items.filter(
      (item) => item.server.ip4.toLowerCase().indexOf(ip4) > -1
    );
    console.log(expandData);
    return expandData;
  };

  const expandedRowRender = () => {
    return (
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              expandData(dataContext.state.data, record.server.ip4);
            },
          };
        }}
        rowKey="id"
        columns={expandRowColumns}
        dataSource={dataContext.state.data}
        pagination={false}
        scroll={{ y: "73vh" }}
      />
    );
  };

  const showDetail = () => {
    if (record === "") {
      return (
        <>
          <p>Venue Name : {dataContext.state.data[rowIndex].venueName}</p>
          <p>Surface Name : {dataContext.state.data[rowIndex].surfaceName}</p>
          <p>Status : {dataContext.state.data[rowIndex].status}</p>
          <p>Sport : {dataContext.state.data[rowIndex].sport}</p>
          <p>ServerIP : {dataContext.state.data[rowIndex].server.ip4}</p>
        </>
      );
    } else {
      return (
        <>
          <p>Venue Name : {record.venueName}</p>
          <p>Surface Name : {record.surfaceName}</p>
          <p>Status : {record.status}</p>
          <p>Sport : {record.sport}</p>
          <p>ServerIP : {recordIp4.ip4}</p>
        </>
      );
    }
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Input
            prefix={<SearchOutlined />}
            style={{ width: "75%", margin: "20px 0" }}
            placeholder="search box"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col span={18}>
          <Tabs defaultActiveKey="surfaces" type="card" size="large">
            <TabPane tab="Surfaces" key="surfaces" style={{ margin: 0 }}>
              <Table
                rowKey="id"
                rowClassName={setRowClassName}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => {
                      setRowIndex(rowIndex);
                      setRecord(record);
                      setRecordIp4(record.server);
                      setSelectedColor(record.id);
                    },
                  };
                }}
                columns={surfaceColumns}
                dataSource={filterQuery(dataContext.state.data)}
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
                Surface Total : {SurfaceRowNum(dataContext.state.data)}
              </div>
            </TabPane>
            <TabPane tab="Servers" key="servers">
              <Table
                rowKey="id"
                rowClassName={setRowClassName}
                onRow={(record) => {
                  return {
                    //Grabbed the data that I'd like to show in expanded table with console.log,
                    //but still working on showing them on the table.
                    onClick: () => {
                      console.log(record.server.ip4);
                      expandData(dataContext.state.data, record.server.ip4);
                    },
                  };
                }}
                expandable={{ expandedRowRender }}
                columns={serverColumns}
                dataSource={filterUniqueIP4(dataContext.state.data)}
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
                Server Total : {ServerRowNum(dataContext.state.data)}
              </div>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={6}>
          <Card
            title="Detail"
            style={{
              height: "100vh",
              marginTop: "39px",
            }}
          >
            {" "}
            {showDetail()}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
