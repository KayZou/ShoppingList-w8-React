/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";
function PackingList({ items, onDeleteItem, onCheck, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: false },
  //   { id: 3, description: "Charger", quantity: 1, packed: true },
  // ];
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => {
      // .slice for creating a copy!
      //   if (a.description < b.description) {
      //     return -1;
      //   }
      //   if (a.description > b.description) {
      //     return 1;
      //   }
      //   return 0;
      return a.description.localeCompare(b.description);
    });
  } else if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => {
      // if (a.packed > b.packed) {
      //   return -1;
      // }
      // if (a.packed < b.packed) {
      //   return 1;
      // }
      // return 0;
      return Number(a.packed) - Number(b.packed);
    });
  }
  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => {
          return (
            <>
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onCheck={onCheck}
              />
            </>
          );
        })}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by the packed status</option>
        </select>
        <button onClick={() => onClearList()}>Clear</button>
      </div>
    </div>
  );
}

export default PackingList;
