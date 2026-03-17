import { useState } from "react";


const Form = () => {
  const [data, setData] =useState({
    email:"",
    address: "Kigali",
    password: ""
  })
  const SubmitData = (formData) => {
    const data = Object.fromEntries(formData);
    setData(data)
  };

  return (
    <div>
      <form action={SubmitData}>
        <input type="email" name="email" placeholder="Enter email" />
        <br />
        <input type="text" name="address"placeholder="Enter the address"/><br />
        <input type="password" name="password"placeholder="Enter the password"/>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <div>
      <h1>Details: </h1>
        <p>Email:{data.email}</p>
        <p>Address: {data.address}</p>
        <p>Password: {data.password}</p>
      </div>
    </div>
  );
};

export default Form;
