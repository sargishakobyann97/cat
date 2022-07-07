import React, { useState } from "react";
import { useSelector } from "react-redux";

const List = () => {
  const cats = useSelector((state) => state.cats);
  const [showImageToFullScreen, setShowImageToFullScreen] = useState("");
  return (
    <>
      {cats.map((cat) => (
        <div key={"key" + cat.id} id={cat.id}>
          <img
            className="cat-img"
            src={cat.url}
            onClick={() => setShowImageToFullScreen(cat.url)}
          />
        </div>
      ))}
      {showImageToFullScreen && (
        <div className="full-screen">
          <img src={showImageToFullScreen} />
          <button onClick={() => setShowImageToFullScreen("")}>Closse</button>
        </div>
      )}
    </>
  );
};
export default List;
