/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

const initialData = {name: null, age: null, email: null, city: null}
const ZForm = ({getData}) => {
    const [obj, setObj] = useState(initialData);

    const handleChange = (event) => {
        setObj((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(obj);
    };
  return (
    <>
        <h2>정보입력</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름</label>
            <input type="text" name="name" onChange={handleChange}/>
            <label htmlFor='age'>나이</label>
            <input type="number" name="age" onChange={handleChange}/>
            <label htmlFor='email'>이메일</label>
            <input type="email" name="email" onChange={handleChange}/>
            <label htmlFor='city'>도시</label>
            <input type="text" name="city" onChange={handleChange}/>
            <button>제출</button>
        </form>
    </>
  )
}

export default ZForm