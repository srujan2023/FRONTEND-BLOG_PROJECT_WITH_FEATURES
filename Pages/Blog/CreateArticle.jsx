import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const CreateArticle = () => {
    const [title,setTitle] = useState({})
    const [body,setBody] = useState({})
    const [price,setPrice] = useState({})

    const Navigate = useNavigate()

    const CreateFormSubmited = async(e) =>{
      e.preventDefault()

      console.log(title);
      console.log(body);
      console.log(price);
      
      const response = await fetch('http://localhost:5000/api/blog/articles',{
        method:"POST",
         headers: {
                 'Content-Type': 'application/json',
                 //Authorization:`Bearer ${token}`
             },
               body: JSON.stringify({title,body,price})
            })

            const data = await response.json();

            console.log(data);
           Navigate('/admin/blog') 
    }
    

  return (
    <>     
    <h1>Create Article</h1>
     <form onClick={CreateFormSubmited}>
        <label >Title</label>
        <input  onChange={(e)=>setTitle(e.target.value)} type="text"  placeholder='Enter Article Name' />
        <br />
        <br />
        <label>Body</label>
        <textarea onChange={(e)=>setBody(e.target.value)} placeholder='Enter Article Body ' ></textarea>
        <br /><br />
        <label>Price</label>
        <input  onChange={(e)=>setPrice(e.target.value)} type="number" placeholder='Enter Article Amount' />
        <br />
        <br />
        <button>Create Article</button>
    </form> 
     </>
  )
}

export default CreateArticle
