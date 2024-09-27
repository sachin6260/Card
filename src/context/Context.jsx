import React, { createContext, useEffect, useState } from "react";

// create context
export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Fetch data from Api
  useEffect(() => {
    console.log("post provide re-render");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
         setPosts(data);
        
        setLoading(false);
      });
  }, []);

  const removeCard = (id )=>{
    setPosts(prevPost => prevPost.filter(post => post.id !== id ));
  }

  const value ={
    posts,
    loading,
    currentPage,
    setCurrentPage,
    postsPerPage,
    removeCard

  };

  return(
    <PostContext.Provider value={value}>
        {children}
    </PostContext.Provider> 
  )
};

export default PostProvider;