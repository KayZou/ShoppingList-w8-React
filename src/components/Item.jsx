/* eslint-disable react/prop-types */
function Item({ item, onDeleteItem, onCheck }) {
  return (
    <div key={item.id}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onCheck(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}: {item.quantity} {item.packed ? "✅" : "🆕"}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </span>
    </div>
  );
}
export default Item;