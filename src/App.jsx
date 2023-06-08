import { useState } from 'react';
// import AppWriteDB from './appwrite-services/database.service'
import { ADD_TO_CART_FUNCTION_ID, REMOVE_FROM_CART_FUNCTION_ID } from './appwrite-services/appWriteSecrets';
import AppWriteFunction from './appwrite-services/functions.service';

const App = () => {
  // const db = new AppWriteDB();
  const functions = new AppWriteFunction();

  // const [cartName, setCartName] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault()
    let PAYLOAD = {
      seller_id: "2312342423",
      location_id: "3242442412412",
      customer_id: "3242423421423",
      product_id: "s3rqr3453453",
      quantity: 34
    }
    // console.log(ADD_TO_CART_FUNCTION_ID, PAYLOAD)
    const data1 = await functions.ExecuteFunc(ADD_TO_CART_FUNCTION_ID, JSON.stringify(PAYLOAD));
    const data = await functions.ExecuteFunc(REMOVE_FROM_CART_FUNCTION_ID, "db3dw45IDJWEy")
    if (data) {
      setData(data);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>submit</button>
      <div>
        {JSON.stringify(data)}
      </div>
    </form>
  )
}

export default App