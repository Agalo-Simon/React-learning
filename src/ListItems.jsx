import { useState } from "react";

const items = [
  { name: "Sam", id: 1234 },
  { name: "James", id: 1634 },
  { name: "Samuel", id: 1284 },
  { name: "Mary", id: 12894 },
];

const List = () => {
  return (
    <>
      <Count />
      <ol>
        {items.map((item) => (
          <ItemList key={item.id} value={item.name} />
        ))}
      </ol>
    </>
  );
};

const ItemList = ({ value }) => {
  // const value = props.value
  // const {value} = props
  return <li>{value}</li>;
};
const Count = () => {
  const [count, setCount] = useState(0);
  // const Handler = () => {
  //   setCount(count + 1);
  // };
  return <button onClick={() => setCount(count + 1)}>Click Me {count}</button>;
};

export default List;
