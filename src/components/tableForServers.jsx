import { Table } from "antd";

const TableForServers = () => {
  const columns = [
    {
      title: "Ip4",
      dataIndex: "ip4",
      width: "40%",
    },
    {
      title: "Dns",
      dataIndex: "dns",
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      ip4: `Edward King ${i}`,
      dns: `Rink# ${i}`,
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

export default TableForServers;
