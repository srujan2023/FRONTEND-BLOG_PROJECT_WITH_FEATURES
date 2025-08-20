import React, { useState } from 'react'

const CreateArticle = () => {
    const [title,setTitle] = useState({})
    const [body,setbody] = useState({})
    

  return (
    <>     
    <h1>Create Article</h1>
    <form onClick={CreateFormSubmited}>
        <label >Title</label>
        <input  onChange={(e)=>settitle(e.target.value)} type="text"  placeholder='Enter Article Name' />
        <br />
        <br />
        <label>Body</label>
        <textarea onChange={(e)=>setbody(e.target.value)} placeholder='Enter Article Body ' ></textarea>
        <br /><br />
        <label>Price</label>
        <input  onChange={(e)=>setprice(e.target.value)}type="number" placeholder='Enter Article Amount' />
        <br />
        <br />
        <button>Create Article</button>
    </form>
     </>
  )
}

export default CreateArticle
