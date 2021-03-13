import { Row, Col } from "antd";
import SearchBox from "./searchBox";
import TabsForData from "./tabsForData";
import DetailCard from "./detailCard";

const DataContainer = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <SearchBox />
        </Col>
        <Col span={18}>
          <TabsForData />
        </Col>
        <Col span={6}>
          <DetailCard />
        </Col>
      </Row>
    </>
  );
};

export default DataContainer;
