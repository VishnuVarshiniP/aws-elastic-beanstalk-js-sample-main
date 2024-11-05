const express = require('express');
const path = require('path'); // Required for serving static files
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// HTML route with big text and an image
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    font-size: 48px;
                    color: #333;
                }
                p {
                    font-size: 24px;
                    color: #666;
                }
                img {
                    max-width: 80%;
                    height: auto;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Hello All, Happy Learning!</h1>
            <p>This is an updated version with larger text and images.</p>
            <img src="/images/happy-learning.jpg" alt="Sample Image">
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
