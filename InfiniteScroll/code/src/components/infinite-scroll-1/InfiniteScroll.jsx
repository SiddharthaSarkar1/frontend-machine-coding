import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://fakestoreapi.in/api/products?page=${pageNumber}`
      );
      const productData = await response.json();
      const newData = await productData.products;
      setData((prevData) => [...prevData, ...newData]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      //   console.log(newData);
      console.log(data);
      console.log(pageNumber);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop - clientHeight - scrollHeight < 100 && !loading) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          height: "400px",
          width: "50%",
          overflow: "auto",
          background: "#47f9ffff",
          margin: "auto",
          padding: "20px",
        }}
        onScroll={handleScroll}
      >
        {data.map((item, index) => (
          <div key={item.id}>
            {item.title}
            <h2>Title: {item.title}</h2>
            <h4>Price: {item.price}</h4>
            <h5>Description: {item.description}</h5>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default InfiniteScroll;
