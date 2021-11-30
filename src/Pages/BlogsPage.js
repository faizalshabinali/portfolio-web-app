import React from 'react';
import allBlogs from '../Components/allBlogs';
import Title from '../Components/Title';

function BlogsPage() {
  return (
    <div>
      <div className='blogs-title'>
        <Title title={'Recent Blogs'} span={'Recent Blogs'} />
      </div>
      <div className='BlogsPage'>
        {allBlogs.map((blog) => {
          return (
            <div className='blog' key={blog.id}>
              <div className='blog-content'>
                <img src={blog.image} alt='blog-picture' />
                <a href={blog.link} className='blog-link'>
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
