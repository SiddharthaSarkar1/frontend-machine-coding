import React from "react";
import Pagination from "./components/pagination/Pagination.jsx";

const data = Array.from({ length: 100 }, (_, index) => index + 1);

const App = () => {
  return (
    <div>
      <Pagination
        data={data}
        renderRow={(rowData, rowIndex) => {
          return (
            <div>{`Hello from App  Data = ${rowData}, Index = ${rowIndex}.`}</div>
          );
        }}
      />
    </div>
  );
};

export default App;
