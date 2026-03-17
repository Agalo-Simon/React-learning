import {useState } from "react";


function Message() {
  const [message, setMessage] = useState(["a", "b", "c"]);

  const HandleClick =() =>{
    setMessage(previous => previous+1)
  }
  let text
  if (message.length === 0) {
    text ="You are all caught up!"
  } else if(message.length ===1) {
    text = "You have 1 unread message"
  }
  else{
    text = `You have ${message.length} unread messages`
  }
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )


}
export default Message;