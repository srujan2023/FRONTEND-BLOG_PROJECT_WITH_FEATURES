import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ListSingleArticle = () => {
    const [article,setArticles] = useState({})
    const [updatedAt,setupdatedAt]= useState({})
    const [createdAt,setcreatedAt]= useState({})
    const [id,setId] = useState({})
    const [price,setPrice] = useState({})


    const params = useParams();

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
      <h1>List Single Article</h1>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>Rs/-{article.price}</p>
      {/* <p>{article._id}</p>
      <p>{article.updatedAt}</p>
      <p>{article.createdAt}</p> */}
    </>
  )
}

export default ListSingleArticle
