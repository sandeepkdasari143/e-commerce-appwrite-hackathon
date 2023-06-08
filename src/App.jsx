import { useState } from 'react';
import AppWriteDB from './appwrite-services/database.service'
import { CART_ID, ECOMM_DB_ID } from './appwrite-services/appWriteSecrets';

const App = () => {
  const db = new AppWriteDB();
  const [cartName, setCartName] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await db.createDoc(ECOMM_DB_ID, CART_ID,{ 'cartName': cartName })
    if (data) {
      setData(data);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setCartName(e.target.value)} value={cartName} />
      <button type='submit'>submit</button>

      <div>
        {JSON.stringify(data)}
      </div>
    </form>
  )
}

export default App