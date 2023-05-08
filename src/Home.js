import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(response => {
            return response.json();
        }).then(data => {
            console.log("DATA",data);
            setBlogs(data);
            setIsPending(false);
        });
    },[]);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
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