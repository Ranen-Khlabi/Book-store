import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return (
    <div className="jumbotron">
        <img src="https://www.electronicbub.com/wp-content/uploads/2019/11/%D9%83%D8%AA%D8%A8-%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A7%D8%AA.png" alt="logo" height="150px" />
        <h1>R-Book Store</h1>
        <p>STAY HOME AND READ BOOK</p>
        <Link to="about" className="btn btn-primary">
            About us
        </Link>
    </div>
    );
}

export default HomePage;
