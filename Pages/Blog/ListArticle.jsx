import React, { useEffect, useState } from 'react'

const ListArticle = () => {
  const [articles,setArticles] = useState([])

  const getArticles = async() =>{
    try {
        const response = await fetch('http://localhost:5000/api/blog/articles')

        const data = await response.json()

        console.log(data);

        setArticles(data.articles)
        
    } catch (error) {
       console.log(error); 
    }
  }

  useEffect(()=>{
    getArticles()
  },[])

  return (
    <>
      <h1>ListArticles</h1>
         {articles ? (
             <div>
         {articles.map((article)=>(
            <div key={article._id}>
                <h2>{article.title}</h2>
                <p>Created By {article.user?.name}</p>
            </div>

         ))}
             </div> )
             :(
              <div>
            <p>No Articles</p>
            </div>
        )}
    </>
  )
}

export default ListArticle
