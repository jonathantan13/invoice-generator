export default function List({}) {
  const itemsObj = {};

  return (
    <form className="w-64 border">
      <ul>
        {/* {itemsObj.map((item, index) => (
          <ListItem
            key={index}
            name={item.name}
            itemName={item.itemName}
            quantity={item.quantity}
            unitPrice={item.unitPrice}
          />
        ))} */}
      </ul>
    </form>
  );
}
