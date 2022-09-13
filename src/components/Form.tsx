import { useState } from 'react';

interface FormType {
  fname: string
  lname: string
  age?: number
  height: number
}

const Form = () => {
  const [form, setForm] = useState<FormType>({fname: '', lname: '', height: 0})

  console.log(form)

  return (
    <>
      <form action="">
        <input type="text" onChange={(event) => setForm({...form, fname: event.target.value})}/>
        <br />
        <input type="text" onChange={(event) => setForm({...form, lname: event.target.value})}/>
        <br />
        <input type="number" onChange={(event) => setForm({...form, age: Number(event.target.value)})}/>
        <br />
        <p>Name: </p> {form.fname} 
        {form.lname}
        <br />
        <p>Age: </p>{form.age}
      </form>
    </>
  )
}

export default Form