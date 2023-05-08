import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(response => {
            return response.json();
        }).then(data => {
            console.log("DATA",data);
            setBlogs(data);
        });
    },[]);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;

/* Endpoints
/blogs          GET    Fetch all blogs
/blogs/{id}     GET    Fetch a single blog
/blogs          POST   Add a new blog
/blogs/{id}     DELETE Delete a blog
*/