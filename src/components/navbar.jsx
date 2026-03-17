
import List from "../ListItems";



function ChatInput() {
  return (
    <div>
      <input placeholder="Send a massage to chatbot." />
      <button>Send</button>
    </div>
  );
}
function ChatMesssage({ sender, message }) {
  //   const message = props.message
  //   const sender = props.sender
  // const {sender, message} = props

  /*
  if (sender === "robot") {
    return (
      <div>
        <img src="./src/assets/robot.jpg" alt="" width="30px" />
        {message}
      </div>
    );
  }
  */
  return (
    <div>
      {sender === "robot" && (
        <img src="./src/assets/robot.jpg" alt="" width="30px" />
      )}
      {message}
      {sender === "user" && (
        <img src="./src/assets/user.jpg" alt="" width="30px" />
      )}
    </div>
  );
}

/*
const MyButton = () => {
  const [count, setCount] = useState(0);

  const Handler = () => {
    setCount(count + 1);
  };
  return <button onClick={Handler}>You Click {count} times</button>;
};
*/



const user = {
  name: "Agalo Simon",
  imageUrl: "./src/assets/galos.png",
  alt: "galos logo",
};

function MyApp() {

  const chatMessages =[
    {message:"Hello chatbot!.", sender:"user", id: 1234765509},
    {message:"How can I help you!.", sender:"robot", id:23415709},
    {message:"Tell me the date of today!.", sender:"user", id:12345683},
    {message:"Today is 23rd January 2026!.", sender:"robot", id: 1234545923},
  
  ]
  return (
    <>
      <header>
        <img src={user.imageUrl} alt={user.alt} className="galos" />
      </header>
      <h3>Welcome {user.name}</h3>
      <ChatInput />
      {chatMessages.map(chat =>{
        return <ChatMesssage message={chat.message}sender={chat.sender} key={chat.id} />
      })}

      {/* <List />  */}
      {
      /* <ChatMesssage message="Hello chatbot!." sender="user" />
      <ChatMesssage message="How can I help you!." sender="robot" />
      <ChatMesssage message="Tell me the date of today!." sender="user" />
      <ChatMesssage message="Today is 23rd January 2026 !." sender="robot" /> 
      */
      }
    
      {/* <MyButton /> */}

      <footer>
        <p>@Copy Galos 2026 development. All rights reserved.</p>
      </footer>



      {detail.map(item =>{
        return (
          <Galos name={item.name} email={item.email} and key={item.id}/>
        )
      })}
     
    </>
  );
}
export default MyApp;

const detail =[
  {name:"Agalo Simon", email:"agalosimon@gmail.com", id:crypto.randomUUID()},
  {name:"Mary", email:"mary@gmail.com", id: crypto.randomUUID()},
  {name:"Agnes", email:"agness@gmail.com", id: crypto.randomUUID()},
  {name:"July", email:"july@gmail.com", id: crypto.randomUUID()}
]

function Galos({name, email}){
  return(
    <>
      <h2>Welcome {name}</h2>
      <p>You email: {email}</p>
    </>
  )
}
