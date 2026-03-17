import { useState } from "react";

//==============To do =======================//

const Todo =()=> {
  const [todos , setTodos]= useState([
    {id:1, items:"Clothes", title:"For Men" },
    {id:2, items:"Bags", title:"For women" },
    {id:3, items:"Bottles", title:"For water" }
  ])
  const HandleTodo=()=>{
    setTodos(pre => pre)
  }
  return(
    <div>
      {todos.map((todo) =>{
        return(
        <div>
          <p key={todo.id}>{todo.items}</p>
          <h4>{todo.title}</h4>
        </div>
          
        ) 
      })}
    </div>
  )
}
  

//================================================//


function Freedom() {
  return (
    <main className="main">
      <h1>Galos Todo List</h1>

      <UserGreeting name="Agalo Simon" isLogIn={true} />
      <List />
      <EventComponent />
      <MyComponent/>
      <ChangeComponent/>
    </main>
  );
}
//============ PropTypes =====================//

import {PropTypes} from "prop-types";
function Galos() {
  return (
  <main className="main">
    <MyComponent name="Galos" age= {12} />
  </main>
);
}

function MyComp({ name, age}) {
  return (
    <div>
      {name} is {age} years old
    </div>
  );
}
MyComp.protoTypes ={
  name: PropTypes.string,
  age: PropTypes.number
}

//=========== UserGreeting component==========//

function UserGreeting(props) {
  return props.isLogIn ? (
    <h2>Welcome {props.name}</h2>
  ) : (
    <h3>Please login to continue </h3>
  );
  //   if (props.isLogIn) {
  //     return <h2>Welcome {props.name}</h2>;
  //   }
  //   return <h3>Please login to continue </h3>;
}
//============= List component ==================//

function List() {
  const fruits = [
    { id: 1, name: "Apple", calories: 411 },
    { id: 2, name: "Banana", calories: 408 },
    { id: 3, name: "Oranges", calories: 467 },
    { id: 4, name: "Guava", calories: 480 },
  ];

  const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>);

  return <l>{listItems}</l>;
}

//====== When clicked event on the image or button it display none=========//

/*
  Click event => Is an interaction when a user click
  on specific element, we can respond to the clicked 
  by passing a callback to the onclick event handler.
*/
function EventComponent() {
  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <img
      src="./src/assets/galos.png"
      onClick={(e) => handleClick(e)}
      alt="Galos Image"
      width="200px"
    />
    // <button onClick={(e)=>handleClick(e)}>Galos</button>
  );
}

//==================React hook===========//
/**
 * What is React hook:
 * Examples of react Hooks
 * (useState, useEffect, useContext, useReducer, useCallback etc...)
 *
 */

function MyComponent() {
  const [name, setNmae] = useState("Guest");

  const updateName = () => {
    setNmae("Agalo Simon");
  };
  return (
    <div>
      <p>{name}</p>
      <button onClick={updateName}>Update</button>
    </div>
  );
}

//============Onchange Component ===================//

/**
 * onChange => Event handle primarily use with
 * forms elements(<input>,<textarea>, <select>,<radio>)
 */

function ChangeComponent() {
   const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("delivery");

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };
  const handleCommentChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };
  const handlePaymentChange = (event) => {
    event.preventDefault();
    setPayment(event.target.value);
  };
  const handleShippingtChange = (event) => {
    event.preventDefault();
    setShipping(event.target.value);
  };

  return (
    <main className="main">
      <h1>Galos Todo List</h1>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <hr />
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <hr />
      <textarea type="text" value={comment} onChange={handleCommentChange} placeholder="Enter your comment here!."/>
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value ="">Select an option</option>
        <option value ="Visa">Visa</option>
        <option value ="Master Card">Master Card</option>
        <option value ="Gift Card">Gift Card</option>
        <option value ="Cash">Cash</option>
      </select>
      <p>Payment: {payment}</p>
      <hr />
      <label htmlFor="pick up">
        <input type="radio" value="pick up" checked={shipping === "pick up"}  onChange={handleShippingtChange}/>
        Pick Up 
      </label>
        <br />
      <label htmlFor="dilevery">
        <input type="radio" value="delivery" checked={shipping === "delivery"}  onChange={handleShippingtChange}/>
        Delivery
        </label>
        <p>Shipping: {shipping}</p>

    </main>
  );
}


export default Freedom;
