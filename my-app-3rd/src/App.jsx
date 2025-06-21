import './App.css';

import ChangeColor from './chapter_02/ButtonChangeColor/ChangeColor';
import Form from './chapter_02/FormTable/Form';
import Table from './chapter_02/FormTable/Table';
import { useState } from 'react'

const App = () => {

  const [obj, setObj] = useState(null)

  //자식에게 전달하여 데이터를 받는 함수
  const getData = (data) => {
    setObj(data);
  }

  return (

    <>

      <ChangeColor />
      <Form getData={getData} /><br /><br />
      <Table obj={obj} />

    </>
  )
}

export default App;
