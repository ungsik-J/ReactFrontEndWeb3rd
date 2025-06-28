import './App.css';

import Z_Table from './chapter_01/components/Z_Table'

import ChangeColor from './chapter_02/ButtonChangeColor/ChangeColor';
import Form from './chapter_02/FormTable/Form';
import Table from './chapter_02/FormTable/Table';
import { useState } from 'react'

import Main from './chapter_99/Main';

const App = () => {

  const [obj, setObj] = useState(null)

  //자식에게 전달하여 데이터를 받는 함수
  const getData = (data) => {
    setObj(data);
  }

  return (

    <>
      <h2>Main</h2>
      <Main />
      <h2>chapter_01</h2>
      <Z_Table />
      <h2>chapter_02</h2>
      <ChangeColor />
      <Form getData={getData} /><br /><br />
      <Table obj={obj} />

    </>
  )
}

export default App;
