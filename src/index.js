import React, { useState, useRef } from "react";

const SortableList = ({ data }) => {
  const [list, setList] = useState(data);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: "lightblue",
              margin: "20px 25%",
              textAlign: "center",
              fontSize: "40px",
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            onDragOver={(e) => e.preventDefault()}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  );
};
export default SortableList;
