// import React, { useReducer, useEffect } from "react";
// import axios from "axios";
// import { Table } from "antd";

// const initialState = {
//   loading: true,
//   error: "",
//   data: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//       return {
//         loading: false,
//         data: action.payload,
//         error: "",
//       };

//     case "FETCH_ERROR":
//       return {
//         loading: false,
//         data: [],
//         error: "Something went wrong!",
//       };
//     default:
//       return state;
//   }
// };

// const DataFetching = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     axios
//       .get(
//         "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project"
//       )
//       .then((response) => {
//         dispatch({
//           type: "FETCH_SUCCESS",
//           payload: response.data,
//         });
//         // setLoading(false);
//         // setData(response.data);
//         // console.log(response);
//         // setError("");
//       })
//       .catch((error) => {
//         dispatch({
//           type: "FETCH_ERROR",
//         });
//       });
//   }, []);

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
//         dataSource={state.data}
//         pagination={false}
//         scroll={{ y: "73vh" }}
//       />
//     </>
//   );
// };
// export default DataFetching;
