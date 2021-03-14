// import React, { useContext } from "react";
// import { Table } from "antd";
// import { DataContext } from "../App";

// const TableForSurfaces = () => {
//   const dataContext = useContext(DataContext);
//   const columns = [
//     {
//       title: "Venue Name",
//       dataIndex: "venueName",
//       width: "40%",
//     },
//     {
//       title: "Surface Name",
//       dataIndex: "surfaceName",
//       width: "25%",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//     },
//     {
//       title: "Sport",
//       dataIndex: "sport",
//     },
//   ];

//   return (
//     <>
//       <Table
//         columns={columns}
//         dataSource={dataContext.state.data}
//         pagination={false}
//         scroll={{ y: "73vh" }}
//       />
//       <div style={{ textAlign: "center" }}>
//         Total:{dataContext.state.data.length}
//       </div>
//     </>
//   );
// };

// export default TableForSurfaces;
