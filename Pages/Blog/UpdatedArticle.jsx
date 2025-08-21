import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const UpdatedArticle = () => {
   const [article,setArticles] = useState({})
      const [updatedAt,setupdatedAt]= useState({})
      const [createdAt,setcreatedAt]= useState({})
      const [id,setId] = useState({})
      const [price,setPrice] = useState({})
  

    const params = useParams()

     const getSingleArticle = async() =>{
            const response = await fetch(`http://localhost:5000/api/blog/articles/${params.articleId}`)
    
            const data = await response.json()
    
            console.log(data);
    
            setArticles(data.article)
        setupdatedAt(data.updatedAt)
        setcreatedAt(data.createdAt)
        setId(data._id)
        setPrice(data.price) 
        }
    
        useEffect(()=>{
            getSingleArticle()
        },[])
    
  return (
    <>
      <h1>Updated Article</h1>
        <form >
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
        <button>Updated Article</button>
    </form> 
    </>
  )
}

export default UpdatedArticle
