import React, { useState } from "react";
import styled from "styled-components";

function Sortable_List(props) {
  const [data, setData] = useState({ data: props.data });

  let placeholder = document.createElement("li");
  placeholder.className = "placeholder";
  let dragged;
  let over;

  const SortableWrapper = styled.div`
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    ul li {
      background: #eee;
      color: #666;
      margin: 0;
      padding: 10px;
      line-height: 1;
      .placeholder {
        background: #03cc85;
      }
      .placeholder:before {
        content: "Drop here";
        color: #666;
      }
    }
  `;

  /**
   * Kullanıcı bir nesneyi sürüklemeye başladığı anda oluşur.
   **/
  const dragStart = (e) => {
    dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.currentTarget);
  };

  /**
   * Sürükleme esnasında kullanıcı farenin düğmesini bırakınca oluşur.
   **/
  const dragEnd = (e) => {
    dragged.style.display = "block";
    dragged.parentNode.removeChild(placeholder);
    let from = Number(dragged.dataset.id);
    let to = Number(over.dataset.id);
    if (from < to) to--;
    if (nodePlacement === "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    setData({ data: data });
  };

  /**
   * Sürükleme meydana geldiği zaman farenin bir elemanın üzerine hareket ettirilmesiyle tetiklenen olaydır.
   **/
  const dragOver = (e) => {
    e.preventDefault();
    dragged.style.display = "none";
    if (e.target.className == "placeholder") return;
    over = e.target;
    let relY = e.clientY - over.offsetTop;
    let height = over.offsetHeight / 2;
    let parent = e.target.parentNode;
    if (relY > height) {
      nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    } else if (relY < height) {
      nodePlacement = "before";
      parent.insertBefore(placeholder, e.target);
    }
  };

  const listItems = data.map((item, index) => {
    return (
      <li
        id
        data-id={index}
        key={index}
        draggable="true"
        onDragEnd={dragEnd}
        onDragStart={dragStart}
      >
        {item}
      </li>
    );
  });

  return (
    <SortableWrapper>
      <ul onDragOver={dragOver}>{listItems}</ul>
    </SortableWrapper>
  );
}

export default Sortable_List;
