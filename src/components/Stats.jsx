/* eslint-disable react/prop-types */
function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your shopping list Now! 🏴</em>
      </footer>
    );
  }
  const itemsNum = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage =
    itemsNum === 0 ? 0 : Math.round((packedItems / itemsNum) * 100);

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          You have {itemsNum} item, and {packedItems} ({percentage}%)are packed
        </em>
      ) : (
        <em>You Are Ready! 🚩</em>
      )}
    </footer>
  );
}

export default Stats;
