import { Table } from "antd";

const TableForSurfaces = () => {
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

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      venueName: `Edward King ${i}`,
      surfaceName: `Rink# ${i}`,
      status: `Hockey${i}`,
      sport: `OK`,
    });
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: "71vh" }}
      />
      <div>Total:---</div>
    </>
  );
};

export default TableForSurfaces;
