import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'

const UpdatedArticle = () => {

  const [article,setArticles] = useState({});
  const [title,setTitle] = useState({})
  const [ body,setBody] = useState({})
  const [price,setPrice] = useState({});

  const params = useParams()
  const Navigate = useNavigate()

 const getSingleArticle = async() =>{
  try {
    const response = await fetch(`http://localhost:5000/api/blog/articles/${params.articleId}`)

    const data = await response.json();

    console.log(data);

    setArticles(data.article)
    setTitle(data.title)
    setBody(data.body)
    setPrice(data.price)
    
  } catch (error) {
console.log(error);
    
  }
 }


 useEffect(()=>{
getSingleArticle()
 },[])

  const EditFormSubmit = async(e) =>{
    e.preventDefault()
  try {
    const response = await fetch(`http://localhost:5000/api/blog/articles/${params.articleId}`,{
      method:"PUT",
       headers: {
                 'Content-Type': 'application/json',
                 //Authorization:`Bearer ${token}`
             },
               body: JSON.stringify({title,body,price})
    })

     const data = await response.json();

     console.log(data);

     Navigate('/admin/blog/articles')
     

  } catch (error) {
   console.log(error);
    
  }
 }


  return (
    <>
      <h1>Updated Article</h1>
        <form >
        <label >Title</label>
        <input defaultValue={article.title} onChange={(e)=>setTitle(e.target.value)} type="text"  placeholder='Enter Article Name' />
        <br />
        <br />
        <label>Body</label>
        <textarea defaultValue={article.body} onChange={(e)=>setBody(e.target.value)} placeholder='Enter Article Body ' ></textarea>
        <br /><br />
        <label>Price</label>
        <input defaultValue={article.price} onChange={(e)=>setPrice(e.target.value)} type="number" placeholder='Enter Article Amount' />
        <br />
        <br />
        <button onClick={EditFormSubmit}>Updated Article</button>
    </form> 
    </>
  )
}

export default UpdatedArticle
