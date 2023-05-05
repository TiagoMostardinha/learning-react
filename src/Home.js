import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return (
        <div className="home">
            <div id="content-wrapper">
                <div className="include-html" data-src="./sections/slider.html" data-type="section" data-id="home"></div>
                <div className="include-html" data-src="./sections/about_us.html" data-type="section" data-id="about_us"></div>
                <div className="include-html" data-src="./sections/gallery.html" data-type="section" data-id="gallery"></div>
                <p>Slider</p>



                <div className="include-html" data-src="./sections/testimonials.html" data-type="section" data-id="testimonials"></div>



                <div className="include-html" data-src="./sections/contact_us.html" data-type="section" data-id="contact_us"></div>

            </div>
        </div>
    );
}

export default Home;