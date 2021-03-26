export const initialState = {
  loading: true,
  error: "",
  data: [],
  isSearchActive: false,
  foundWords: [],
};

export const updateTime = 60000;

export const surfaceColumns = [
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

export const serverColumns = [
  {
    title: "Ip4",
    key: "ip4",
    dataIndex: "ip4",
    width: "40%",
  },
  {
    title: "Dns",
    key: "dns",
    dataIndex: "dns",
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
