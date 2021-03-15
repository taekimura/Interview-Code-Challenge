import { Tabs } from "antd";
import DashBoard from "./dashboard";
import { InboxOutlined, DatabaseOutlined } from "@ant-design/icons";
const TabPane = Tabs.TabPane;

/***
 * This is the tabs for an empty tab and data.
 ***/
const LeftTabs = () => {
  return (
    <Tabs
      tabPosition="left"
      style={{
        height: "100vh",
        padding: "0",
      }}
      defaultActiveKey="empty"
    >
      <TabPane
        tab={
          <span>
            <InboxOutlined />
            Empty Tab
          </span>
        }
        key="empty"
        style={{ textAlign: "center", padding: "30px", fontSize: "24px" }}
      >
        This is an empty tab.
      </TabPane>
      <TabPane
        tab={
          <span>
            <DatabaseOutlined />
            Data
          </span>
        }
        key="data"
      >
        <DashBoard />
      </TabPane>
    </Tabs>
  );
};

export default LeftTabs;
