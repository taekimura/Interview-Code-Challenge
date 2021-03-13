import { Input, Space } from "antd";

const { Search } = Input;

const SearchBox = () => {
  const onSearch = (value) => console.log(value);

  return (
    <Space direction="vertical" style={{ width: "75%", margin: "20px 0" }}>
      <Search
        placeholder="input search text..."
        onSearch={onSearch}
        enterButton
      />
    </Space>
  );
};

export default SearchBox;
