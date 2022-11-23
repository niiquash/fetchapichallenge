import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import Table from './Table'

function App() {

  // api url
  const API_URL = 'https://jsonplaceholder.typicode.com/'

  // track state for request type and the items fetched
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])

  // fetch data in useEffect function
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        setItems(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchItems()
  }, [reqType])

  return (
    <div className='App'>
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
