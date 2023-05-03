const Home = () => {
    const handleClick = () => {
        console.log('Button was clicked!');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }

    const handleClickAgainAgain = (name,e) => {
        console.log('hello ' + name,e);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => { handleClickAgain('mario') }}>Click me again</button>
            <button onClick={(e) => { handleClickAgainAgain('yoshi',e) }}>Click me again again</button>
        </div>
    );
}

export default Home;