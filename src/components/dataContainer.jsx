import React, { useState, useContext } from "react";
import { Row, Col } from "antd";
import { Input, Space } from "antd";
import { Tabs } from "antd";
import DetailCard from "./detailCard";
import { Table } from "antd";
import { DataContext } from "../App";
const { TabPane } = Tabs;
const { Search } = Input;

const DataContainer = () => {
  const [query, setQuery] = useState("");
  const dataContext = useContext(DataContext);
  const columns = [
    {
      title: "Venue Name",
      dataIndex: "venueName",
      width: "40%",
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

  const search = (rows) => {
    return rows.filter(
      (row) =>
        row.venueName.toLowerCase().indexOf(query) > -1 ||
        row.surfaceName.toLowerCase().indexOf(query) > -1 ||
        row.status.toLowerCase().indexOf(query) > -1 ||
        row.sport.toLowerCase().indexOf(query) > -1
    );
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Space
            direction="vertical"
            style={{ width: "75%", margin: "20px 0" }}
          >
            <Search
              placeholder="input search text..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Space>
        </Col>
        <Col span={18}>
          <Tabs defaultActiveKey="surfaces" type="card" size="large">
            <TabPane tab="Surfaces" key="surfaces" style={{ margin: 0 }}>
              <Table
                columns={columns}
                dataSource={search(dataContext.state.data)}
                pagination={false}
                scroll={{ y: "73vh" }}
              />
              <div style={{ textAlign: "center" }}>
                Total:{dataContext.state.data.length}
              </div>
            </TabPane>
            <TabPane tab="Servers" key="servers">
              {/* <TableForServers /> */}
            </TabPane>
          </Tabs>
        </Col>
        <Col span={6}>
          <DetailCard />
        </Col>
      </Row>
    </>
  );
};

export default DataContainer;
