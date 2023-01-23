import React from "react";
import { useSelector } from "react-redux";
import css from "./Bookmarks.module.css";

const Bookmark = () => {
  const items = useSelector((state) => state);
  console.log(items, "bookitem");
  return (
    <div className={css.container}>
      <div className={css.content}>
        <span>{items.quote.data && items.quote.data.content}</span>
       

        <span style={{ fontWeight: "700" }}>
          -{items.quote.data && items.quote.data.author}
        </span>
      </div>
    </div>
  );
};

export default Bookmark;
