import { Tabs } from "antd";
import TableForSurfaces from "./tableForSurfaces";
import TableForServers from "./tableForServers";
const { TabPane } = Tabs;

const TabsForData = () => {
  return (
    <>
      <Tabs defaultActiveKey="surfaces" type="card" size="large">
        <TabPane tab="Surfaces" key="surfaces" style={{ margin: 0 }}>
          <TableForSurfaces />
        </TabPane>
        <TabPane tab="Servers" key="servers">
          <TableForServers />
        </TabPane>
      </Tabs>
    </>
  );
};

export default TabsForData;
