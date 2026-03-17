

function PurchaseComplete(){
  return <button onClick={() => alert("Purchase Complete")}>Purchase Complete</button>
}


function Footer(){
  return(
    <>
    <h1>50% Purchase</h1>
    {/* <PurchaseComplete/> */}
    </>
  )
}

export default Footer;