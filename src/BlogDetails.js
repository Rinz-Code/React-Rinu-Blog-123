import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data,isPending,error } = useFetch()
    return ( 
        <div className="blog-details">
            <h2>Blog Detail Page - { id }</h2>
        </div>
     );
}
 
export default BlogDetails;