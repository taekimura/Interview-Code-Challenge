export const initialState = {
  loading: true,
  error: "",
  data: [],
  isSearchActive: false,
  foundWords: [],
};

export const surfaceColumns = [
  {
    title: "Venue Name",
    dataIndex: "venueName",
    width: "40%",
    render: (text) => <a href="#">{text}</a>,
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

export const serverColumns = [
  {
    title: "Ip4",
    key: "ip4",
    render: (record) => record.server.ip4,
    width: "40%",
  },
  {
    title: "Dns",
    key: "dns",
    dataIndex: ["server", "dns"],
  },
];

export const expandRowColumns = [
  { title: "Venue", dataIndex: "venueName" },
  { title: "Surface", dataIndex: "surfaceName" },
  {
    title: "Sport",
    dataIndex: "sport",
  },
];
