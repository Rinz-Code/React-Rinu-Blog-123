import { Link } from 'react-router-dom'
const BlogList = ({blogs,title}) => {
    return ( 
        <div className="blog-list">
            <h1>{ title }</h1>
            {blogs.map(blog=>(
                <div className="blog-preview" key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}> {/*template string*/}
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                  </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;