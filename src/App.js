import React, {useState} from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Logins from './Components/LogIn/Logins';
import Page404 from './Components/Page404/Page404';
import Forms from './Components/SignUp/Form';
import Home from './Components/Home/Home';
import Edit from './Components/Home/Edit';
import Add from './Components/Home/Add';
const dataArr = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    address: "John Address",
  },
  {
    id: 2,
    name: "David",
    email: "david@gmail.com",
    address: "David Address",
  },
  {
    id: 3,
    name: "James",
    email: "james@gmail.com",
    address: "James Address",
  },
  {
    id: 4,
    name: "Sam",
    email: "sam@gmail.com",
    address: "Sam Address",
  },
]
const App = () => {
  const [appData, setAppData] = useState(dataArr)
  const [data, setData] = useState({})
  
  const handleData = (dataSource) => {
    setData(dataSource)
  }

  const handleAppData = (item) => {
    console.log('aaa', item)
    const newData = appData.map((value) => (
      data.id === value.id ? {...item, id:data.id} : value 
    ))
     
     console.log('id',data.id)

    setAppData(newData,data.id)
  }

  const handleAdd = (values) => {
    const newValue = {
      ...values,
      id: appData.length+1
    }
    setAppData([...appData, newValue])
  }

  return (
    <>
    <div style={{ color: "blue", marginBottom: 20,marginTop:40}}>
    <BrowserRouter>
        <Routes>
         <Route path="/"  element={<Forms/>} />
          <Route path="/login"  element={<Logins/>}/>
          <Route path='/home' element={<Home handleData={handleData} appData={appData} />}/>
          <Route path='/edit' element={<Edit data={data} handleAppData={handleAppData} />}/>
          <Route path='/add' element={<Add data={data} handleAdd={handleAdd} />}/>
           <Route path="*" element={<Page404/>} />
        </Routes>
     </BrowserRouter>
     
     </div>
    
    </>
  )
}

export default App