import React, { useContext } from 'react';
import { PostContext } from '../context/Context';
import "../style/PostList.css";
import image from "../assets/flower.jpg"

const PostList = () => {
  const { posts, loading, currentPage, setCurrentPage, postsPerPage, removeCard } = useContext(PostContext);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (loading) {
    return <div>Loading.....</div>;
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRemoveCard = (id) => {
    removeCard(id);
  };

  return (
    <div>
      <div className="post-container">
         {currentPosts.map((post) => (
          <div key={post.id} className="card">
            <div className="card-content">
                <img src={image} alt="" />
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button className='remove-button' onClick={() => handleRemoveCard(post.id)}>X</button>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>

        {[...Array(totalPages).keys()].map((page) => (
          <button 
            key={page + 1}
            className={currentPage === page + 1 ? 'active' : ''} 
            onClick={() => handlePageClick(page + 1)}>
            {page + 1}
          </button>
        ))}

        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
