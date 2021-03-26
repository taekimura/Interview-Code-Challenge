import DataTabContainer from "./dataTabContainer";
import { Tabs } from "antd";
import { InboxOutlined, DatabaseOutlined } from "@ant-design/icons";
const TabPane = Tabs.TabPane;

const LeftTabsForEntirePage = () => {
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
        <DataTabContainer />
      </TabPane>
    </Tabs>
  );
};

export default LeftTabsForEntirePage;
