import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending,setPending] = useState(false);

  const history = useHistory()

  const handleSubmit = (e) => {
   e.preventDefault(); // this preventDefault action which refresh the page we don't need it to happen
   
   const blog = {title,body,author};

   setPending(true);

   fetch('http://localhost:8000/blogs/',{
     method:'POST',
     headers: { "Content-Type":"application/json" },
     body: JSON.stringify(blog)
  	}).then(()=>{
     console.log('New blog created');
     setPending(false);
     history.push('/');
  	})
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;