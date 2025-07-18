import React from "react";
import InfiniteScroll from "./components/infinite-scroll-1/InfiniteScroll.jsx";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
        <InfiniteScroll />
      </>
    </div>
  );
};

export default App;
