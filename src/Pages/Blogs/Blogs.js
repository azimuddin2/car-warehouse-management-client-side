import React from 'react';

const Blogs = () => {
    return (
        <div className='container p-5'>
            <div>
                <h1>Q-1: Difference between javascript and nodejs?</h1>
                <h4>Javascript:</h4>
                <ul>
                    <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                    <li>Javascript can only be run in the browsers.</li>
                    <li>It is basically used on the client-side.</li>
                    <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                    <li>Javascript is used in frontend development.</li>
                </ul>
                <h4>NodeJS:</h4>
                <ul>
                    <li>NodeJS is a Javascript runtime environment.</li>
                    <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                    <li>It is mostly used on the server-side.</li>
                    <li>Nodejs does not have capability to add HTML tags.</li>
                    <li>Nodejs is used in server-side development.</li>
                </ul>
            </div>
            <div>
                <h1>Q-2: Differences between sql and nosql databases?</h1>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div>
                <h1>Q-3: What is the purpose of jwt and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            </div>

        </div>
    );
};

export default Blogs;