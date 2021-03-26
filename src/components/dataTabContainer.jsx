import React from "react";
import SearchBox from "./searchBox";
import SurfaceTable from "./surfaceTable";
import DetailsBox from "./detailsBox";
import ServerTable from "./serverTable";
import { Row, Col, Tabs } from "antd";
const { TabPane } = Tabs;

const DataTabContainer = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <SearchBox />
        </Col>
        <Col span={18}>
          <Tabs defaultActiveKey="surfaces" type="card" size="large">
            <TabPane tab="Surfaces" key="surfaces" style={{ margin: 0 }}>
              <SurfaceTable />
            </TabPane>
            <TabPane tab="Servers" key="servers">
              <ServerTable />
            </TabPane>
          </Tabs>
        </Col>
        <Col span={6}>
          <DetailsBox />
        </Col>
      </Row>
    </>
  );
};

export default DataTabContainer;
