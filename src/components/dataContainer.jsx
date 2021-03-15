import React, { useState, useContext } from "react";
import { Row, Col, Input, Tabs, Table, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DataContext } from "../App";
const { TabPane } = Tabs;

const DataContainer = () => {
  const [query, setQuery] = useState("");
  const [rowIndex, setRowIndex] = useState(0);
  const dataContext = useContext(DataContext);

  const surfaceColumns = [
    {
      title: "Venue Name",
      dataIndex: "venueName",
      width: "40%",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Surface Name",
      dataIndex: "surfaceName",
      width: "25%",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Sport",
      dataIndex: "sport",
    },
  ];

  const serverColumns = [
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

  const filterQuery = (rows) => {
    return rows.filter(
      (row) =>
        row.venueName.toLowerCase().indexOf(query) > -1 ||
        row.surfaceName.toLowerCase().indexOf(query) > -1 ||
        row.status.toLowerCase().indexOf(query) > -1 ||
        row.sport.toLowerCase().indexOf(query) > -1
    );
  };

  const SurfaceRowNum = (items) => {
    return filterQuery(items).length;
  };

  const filterUniqueIP4 = (items) => {
    const itemIp4s = items.map((item) => {
      return item.server.ip4;
    });
    return items.filter(
      (item, index) =>
        itemIp4s.indexOf(item.server.ip4) === index &&
        (item.server.ip4.toLowerCase().indexOf(query) > -1 ||
          item.server.dns.toLowerCase().indexOf(query) > -1)
    );
  };

  const ServerRowNum = (items) => {
    return filterUniqueIP4(items).length;
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
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => {
                      setRowIndex(rowIndex);
                    },
                  };
                }}
                columns={surfaceColumns}
                dataSource={filterQuery(dataContext.state.data)}
                pagination={false}
                scroll={{ y: "73vh" }}
              />
              <div style={{ textAlign: "center" }}>
                Total:{SurfaceRowNum(dataContext.state.data)}
              </div>
            </TabPane>
            <TabPane tab="Servers" key="servers">
              <Table
                columns={serverColumns}
                dataSource={filterUniqueIP4(dataContext.state.data)}
                pagination={false}
                scroll={{ y: "73vh" }}
              />
              <div style={{ textAlign: "center" }}>
                Total:{ServerRowNum(dataContext.state.data)}
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
            <p>Venue Name : {dataContext.state.data[rowIndex].venueName}</p>
            <p>Surface Name : {dataContext.state.data[rowIndex].surfaceName}</p>
            <p>Status : {dataContext.state.data[rowIndex].status}</p>
            <p>Sport : {dataContext.state.data[rowIndex].sport}</p>
            <p>ServerIP : {dataContext.state.data[rowIndex].server.ip4}</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DataContainer;
