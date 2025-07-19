import React, { useEffect, useState } from "react";
import Pagination from "./components/pagination/Pagination.jsx";

const data = Array.from({ length: 100 }, (_, index) => index + 1);

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setData(Array.from({ length: 10 }, (_, index) => index + 1));
  }, []);

  const handlePageChange = (pageNumber) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData(Array.from({ length: 10 }, (_, index) => index * pageNumber + 1));
    }, 3000);
  };

  return (
    <div>
      <Pagination
        loading={loading}
        data={data}
        totalNumberOfPages={100}
        renderRow={(rowData, rowIndex) => {
          return (
            <div>{`Hello from App  Data = ${rowData}, Index = ${rowIndex}.`}</div>
          );
        }}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
