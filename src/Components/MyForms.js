import React from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setMydata} from './nameSlice'

export const MyForms = () => {

    const dispatch =useDispatch()
    const [frmDt,setFrmDt] = useState("")

    const handlechanged =(e) =>{
        setFrmDt(e.target.value)

    }

    const handlesumit =(e) =>{
       e.preventDefault();
       dispatch(setMydata(frmDt))

    }
  return (
        <Form  onSubmit={handlesumit}>
            <>
            <input  name="name" onChange={handlechanged}/>

<button>
    Add
</button>
            </>


        </Form>
  )
}
