// components/CurrentQuery.js

import React from "react";
import { useSelector } from "react-redux";

const CurrentQuery = () => {
  const query = useSelector((state) => state.search.queries);

  return <div>Current Search Query: {query}</div>;
};

export default CurrentQuery;

// // components/SearchHistory.js

// import React from "react";
// import { List } from "antd";
// import { useSelector } from "react-redux";

// const SearchHistory = () => {
//   const queries = useSelector((state) => state.search.queries);

//   return (
//     <List
//       header={<div>Search History</div>}
//       bordered
//       dataSource={queries}
//       renderItem={(item) => <List.Item>{item}</List.Item>}
//     />
//   );
// };

// export default SearchHistory;
