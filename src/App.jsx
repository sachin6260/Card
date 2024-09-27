 import React from 'react'
 import PostProvider from './context/Context'
import PostList from './components/PostList'
import './style/PostList.css'
 
 const App = () => {
   return (
     <div>
      <PostProvider>
        <div className="App">
          <h1>Paginate Posr Card</h1>
          <PostList/>
        </div>
      </PostProvider>
       
     </div>
   )
 }
 
 export default App
 