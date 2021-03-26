import React, { useContext } from "react";
import { DataContext } from "../contexts/context";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBox = () => {
  const { query, setQuery } = useContext(DataContext);
  return (
    <Input
      prefix={<SearchOutlined />}
      style={{ width: "75%", margin: "20px 0" }}
      placeholder="search box"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBox;
