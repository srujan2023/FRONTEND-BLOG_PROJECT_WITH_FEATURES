import { NavLink } from "react-router";

function App(){
  return(
    <>
    <h1>mern website</h1>
    <NavLink to='/admin/blog/articles'>Mange Articles</NavLink>
    </>
  )
}

export default App;