import {useState} from 'react';
const Create = () => {
	const [title,setTitle] = useState('')
	const [body,setBody] = useState('')
	const [author,setAuthor] = useState('')
    return ( 
        <div className="create">
            <h1>Add a new Blog</h1>
            <form>
		    <label>Blog title:</label>
		    <input
		      type="text"
		      required
		      value={title}
		      onchange={(e) => setTitle(e.target.value)}
		    />
		    <label>Blog Body:</label>
		    <textarea
		      required
		      value={body}
		      onchange={(e) => setBody(e.target.value)}		      
		    ></textarea>
		    <label>Blog Author:</label>
		    <select>
		      <option value="Rinshin">Rinshin</option>
		      <option value="Rinu">Rinu</option>
		    </select>
		    <button>Add Blog</button>
		  	</form>
        </div>
     );
}
 
export default Create;