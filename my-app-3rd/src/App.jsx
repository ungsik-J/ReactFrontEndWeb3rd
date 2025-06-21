
import './App.css'
import Table from './components/Table'
import ChangeColor from './components/ChangeColor'
import ZForm from './useEffect/ZForm'
import ZTable from './useEffect/ZTable'

import { useState } from 'react'

const App = () => {
  
  const [obj, setObj] = useState(null)

  //자식에게 전달하여 데이터를 받는 함수
  const getData = (data) =>{
    setObj(data);
  }

  return (
    <>
      <Table/>    
      <ChangeColor />
      <ZForm getData={getData}/><br/><br/>
      <ZTable obj={obj}/>    
    </>
  )
}

export default App

