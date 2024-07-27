import { useState, useEffect } from 'react';
import {Table} from './components';



function App() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('fetched data', data);
          setColumns([
            {label:'Name', field: 'name'},
            {label:'Email', field: 'email'},
            {label:'Address', field: 'address'},
            {label:'Phone', field: 'phone'},
          ]);
          setRows(data.map(user => ({
            name: user.name,
            email: user.email,
            address: user.address.street,
            phone: user.phone
          })));
          setLoading(false);
        } catch (error){
          console.log(error);
          setLoading(false);
        }   
      };
    fetchData();
  },[]);

  if(loading){
   return <div>Loading.....</div>;
  }

  return (
    <div>
     <Table columns = {columns} rows = {rows}/>
    </div>
  )
}

export default App
