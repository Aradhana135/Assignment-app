import React, {useState} from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Logins from './Components/LogIn/Logins';
import Page404 from './Components/Page404/Page404';
import Forms from './Components/SignUp/Form';
// import Demo from './Components/Home/Demo';
import Home from './Components/Home/Home';
import Demo2 from './Components/Home/Home';
import Edit from './Components/Home/Edit';
const App = () => {
  const [data, setData] = useState({})
  const [isLogin, setIsLogin] = useState(false)

  const handleData = (dataSource) => {
    setData(dataSource)
  }

  return (
    <>
    <div style={{ color: "blue", marginBottom: 20,marginTop:40}}>
    <BrowserRouter>
        <Routes>
         <Route path="/"  element={<Forms/>} />
          <Route path="/login"  element={<Logins/>}/>
          <Route path='/home' element={<Home handleData={handleData} />}/>
          <Route path='/edit' element={<Edit data={data} />}/>
           <Route path="*" element={<Page404/>} />
        </Routes>
     </BrowserRouter>
     
     </div>
    
    </>
  )
}

export default App